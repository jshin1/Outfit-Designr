import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import Home from './components/Home'
import MainContainer from './containers/MainContainer'
import About from './components/About'
import Icon from '@material-ui/core/Icon'
import Profile from './containers/Profile'
import Gallery from './containers/Gallery'

import ButtonAppBar from './styles/ButtonAppBar'
import PrimarySearchAppBar from './styles/PrimarySearchAppBar'

class App extends Component {

  componentDidMount() {
    fetch('http://localhost:3000/api/v1/outfits')
    .then(res => res.json())
    .then(data => {
      return data.map(outfit => {
        console.log(outfit.clothes)
        return this.props.fetchOutfits(outfit.clothes)
      })
    })
  }

  render() {
    return (
      <div className="App">
          <PrimarySearchAppBar />
          <Router>
            <>
              <nav className="navbar navbar-dark bg-dark">
                <Link className='navbar-brand' to='/'>
                  <button type="button" class="btn btn-outline-warning">Home</button>
                </Link>
                <Link className='navbar-brand' to='/profile'>Profile</Link>
                <Link className='navbar-brand' to='/main'>Main</Link>
                <Link className='navbar-brand' to='/gallery'>Gallery</Link>
                <Link className='navbar-brand' to='/about'>About</Link>
              </nav>
                <Route exact path="/" render={() => (this.props.currentUserId !== null ? (<Redirect to="/main"/>) : (<Home/>))}/>
                <Route path='/profile' component={Profile} />
                <Route path='/main' component={MainContainer} />
                <Route path='/gallery' component={Gallery} />
                <Route path='/about' component={About} />
            </>
          </Router>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
  currentUserId: state.currentUserId,
  currentUserName: state.currentUserName,
  outfits: state.outfits
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchOutfits: (data) => dispatch({type: 'FETCH_OUTFITS', payload: data})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
