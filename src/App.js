import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import Home from './components/Home'
import MainContainer from './containers/MainContainer'
import About from './components/About'
import Profile from './containers/Profile'
import Gallery from './containers/Gallery'

import { Input, Menu, Segment, Icon } from 'semantic-ui-react'

const colorsA = ['red', 'orange', 'yellow', 'green', 'blue']
const routes = ['', 'profile', 'main', 'gallery', 'about']
const names = ['Home', 'Profile', 'Main', 'Gallery', 'About']
const icons = ['home', 'user circle outline', 'shopping basket','save outline', 'question circle outline']

class App extends Component {

  state = { activeA: colorsA[2] }

  handleAClick = (color) => this.setState({ activeA: color })

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
    const { activeA } = this.state

    return (
      <div className="App">
          <Router>
            <>
              {this.props.currentUserId === null ?
                null
              :
              <Menu compact icon='labeled' inverted >
                {colorsA.map(c => (
                  <Menu.Item as={ Link } to={`/${routes[colorsA.indexOf(c)]}`}
                    key={c}
                    active={activeA === c}
                    color={c}
                    onClick={() => this.handleAClick(c)}
                    >
                    <Icon name={`${icons[colorsA.indexOf(c)]}`} />
                    {names[colorsA.indexOf(c)]}
                  </Menu.Item>
                ))}
              </Menu>
              }

              <Segment>
                <Route exact path="/" render={() => (this.props.currentUserId !== null ? (<Redirect to="/main"/>) : (<Home/>))}/>
                <Route path='/profile' component={Profile} />
                <Route path='/main' component={MainContainer} />
                <Route path='/gallery' component={Gallery} />
                <Route path='/about' component={About} />
              </Segment>

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
