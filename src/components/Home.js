import React, { Component } from 'react';
import Login from './Login'

import {} from 'react-materialize'

class Home extends Component {

  render() {
    return (
      <div className='home'>
        <img src='https://images.unsplash.com/photo-1481495278953-0967c9759b78?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80' />
        <h1>OUTFIT<span className="badge badge-secondary">designr</span></h1>
        <Login />
      </div>
    );
  }

}

export default Home;
