import React, { Component } from 'react';

import {Segment, Header} from 'semantic-ui-react'

class About extends Component {

  render() {
    return (

      <Segment className='cheese' id='about'>
        <Header as='h2' className='textstyle'>ABOUT</Header>
        <img className='wheel' src='https://1.bp.blogspot.com/-AxRd0J6IncI/Vqe0uEUjgjI/AAAAAAAAJOw/ANepkB3-2qo/s1600/astounding-color-wheel-analogous-color-scheme-new-at-homes-gallery-ideas.jpg' />
      </Segment>

    );
  }

}

export default About;
