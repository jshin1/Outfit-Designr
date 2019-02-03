import React, { Component } from 'react';
import Login from './Login'

import {} from 'react-materialize'

class Home extends Component {

  render() {
    return (
      <div className='home'>
        <img src='https://images.unsplash.com/photo-1446214814726-e6074845b4ce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=761&q=80' />
        <h1>O U T F I T d e s i g n r</h1>
        <p>Hi</p>
        <Login />
      </div>
    );
  }

}

export default Home;
