import React, { Component } from 'react';
import {connect} from 'react-redux'

class Login extends Component {

  loginUser = (input) => {
    fetch('http://localhost:3000/api/v1/users')
    .then(res => res.json())
    .then(data => {
      let user = data.find(user => user.first_name == input)
      console.log(data[0].first_name)
      if (user !== undefined) {
        this.props.loginSubmit(user.id, user.first_name)
      } else {
        console.log('hi');
      }
    })
  }

  render() {
    return (
      <div>
        <input onChange={this.props.loginInput} placeholder='Please enter username' value={this.props.userInput}/>
        <button type='submit' onClick={() => this.loginUser(this.props.userInput)}>Login</button>
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return {
    currentUserId: state.currentUserId,
    currentUserName: state.currentUserName,
    userInput: state.userInput
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loginInput: (event) => dispatch({type: 'LOGIN_INPUT', payload: event.target.value}),
    loginSubmit: (userId, userName) => dispatch({type: 'LOGIN_SUBMIT', id: userId, name: userName})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
