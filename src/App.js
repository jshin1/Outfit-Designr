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

class App extends Component {
  render() {
    console.log(this.props.currentUserId);
    return (
      <div className="App">
        <Router>
          <>
            <nav>
              <Link to='/'>
                <i class="material-icons">home</i>
              </Link>
              <Link to='/profile'>Profile</Link>
              <Link to='/main'>Main</Link>
              <Link to='/about'>About</Link>
            </nav>
              <Route exact path="/" render={() => (this.props.currentUserId !== null ? (<Redirect to="/main"/>) : (<Home/>))}/>
              <Route path='/profile' component={Profile} />
              <Route path='/main' component={MainContainer} />
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
  currentUserName: state.currentUserName
  }
}

export default connect(mapStateToProps, null)(App);
