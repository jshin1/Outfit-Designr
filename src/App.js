import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Home from './components/Home'
import MainContainer from './containers/MainContainer'
import About from './components/About'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <>
            <nav>
              <Link to='/'>Home</Link>
              <Link to='/main'>Main</Link>
              <Link to='/about'>About</Link>
            </nav>
              <Route path='/' exact component={Home} />
              <Route path='/main' component={MainContainer} />
              <Route path='/about' component={About} />
          </>
        </Router>
      </div>
    );
  }
}

export default App;
