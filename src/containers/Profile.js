import React, { Component } from 'react';
import { connect } from 'react-redux'

class Profile extends Component {

  reroute = () => {
    this.props.logOut()
    this.props.history.push('/')
  }

  render() {
    return (
      <div>
        <h1>{`Welcome to your DESIGN PORTAL, ${this.props.currentUserName}`}</h1>
        <img className='wheel' src='https://1.bp.blogspot.com/-AxRd0J6IncI/Vqe0uEUjgjI/AAAAAAAAJOw/ANepkB3-2qo/s1600/astounding-color-wheel-analogous-color-scheme-new-at-homes-gallery-ideas.jpg' />
        <button type='submit' onClick={this.reroute}>Log Out</button>
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

const mapDispatchToProps = (dispatch) => {
  return {
    logOut: () => {
      console.log('hio');
      return dispatch({type: 'LOG_OUT', payload: null})}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
