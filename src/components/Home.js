import React, { Component } from 'react';
import LoginForm from './LoginForm'

import { Button, Divider, Form, Grid, Segment, Checkbox, Header } from 'semantic-ui-react'

class Home extends Component {

  render() {
    return (
      <div className='home'>
        <h1>OUTFIT DESIGNR</h1>

          <Segment placeholder>
            <Grid columns={2} relaxed='very' stackable>
              <Grid.Column>
              <LoginForm />
            </Grid.Column>

            <Grid.Column verticalAlign='middle'>


              <Form>
                <Header as='h2' color='red' textAlign='center'>
                  Sign up if you're a new user:
                </Header>
                <Form.Field>
                  <Form.Input label='First name' placeholder='First name' />
                  <Form.Input label='Last name' placeholder='Last name' />
                  <Form.Input label='Username' placeholder='Username' />
                </Form.Field>
                <Form.Button>Submit</Form.Button>
              </Form>


            </Grid.Column>
          </Grid>

      <Divider vertical>Or</Divider>
    </Segment>

      </div>
    );
  }

}

export default Home;
