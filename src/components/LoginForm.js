import React, { Component } from 'react';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react';
import {connect} from 'react-redux'

class LoginForm extends Component {

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
      <div className='login-form'>
        {/*
          Heads up! The styles below are necessary for the correct render of this example.
          You can do same with CSS, the main idea is that all the elements up to the `Grid`
          below must have a height of 100%.
        */}
        <style>{`
          body > div,
          body > div > div,
          body > div > div > div.login-form {
            height: 100%;
          }
        `}</style>
        <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as='h2' color='red' textAlign='center'>
              Login to your account:
            </Header>
            <Form size='large'>
              <Segment stacked>
                <Form.Input fluid icon='user' iconPosition='left' placeholder='Please enter username.'
                  onChange={this.props.loginInput}
                />

                <Button color='red' fluid size='large'
                  onClick={() => this.loginUser(this.props.userInput)}
                >
                  Login
                </Button>
              </Segment>
            </Form>
          </Grid.Column>
        </Grid>
      </div>
    )
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

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
