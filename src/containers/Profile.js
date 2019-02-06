import React, { Component } from 'react';
import { connect } from 'react-redux'
import HatPicker from './HatPicker'
import TopPicker from './TopPicker'
import JacketPicker from './JacketPicker'
import BottomPicker from './BottomPicker'
import ShoePicker from './ShoePicker'

class Profile extends Component {

  componentDidMount() {
    fetch('http://localhost:3000/api/v1/colors')
    .then(res => res.json())
    .then(colors => {
      return colors.map(color => this.props.setColors(color))
    })
  }

  reroute = () => {
    this.props.logOut()
    this.props.history.push('/')
  }

  matchWithHat = () => {
    if (this.props.currentHat) {
      let color = this.props.colors.find(color => color.id == this.props.currentHat.color_id)
      return(
        <div>
        {`Hey! You've picked a ${color.name} hat! That goes great with ${color.complementary_color}!`}
        </div>
      )
    }
  }

  matchWithTop = () => {
    if (this.props.currentTop) {
      let color = this.props.colors.find(color => color.id == this.props.currentTop.color_id)
      return(
        <div>
        {`Hey! You've picked a ${color.name} top! That goes great with ${color.complementary_color}!`}
        </div>
      )
    }
  }

  // findComplementaryColors = () => {
  //   if (this.props.currentHat) {
  //     fetch('http://localhost:3000/api/v1/colors')
  //     .then(res => res.json())
  //     .then(data => {
  //       let color = data.find(color => color.id === this.props.currentHat.color_id)
  //       console.log(`Hey! You've picked a ${color.name} hat! That goes great with ${color.complementary_color}!`)
  //       return (
  //         this.colorDiv(color.name, color.complementary_color)
  //       )
  //     })
  //   }
  // }

  render() {
    return (
      <div>
        <h1>{`Welcome to your DESIGN PORTAL, ${this.props.currentUserName}`}</h1>
        <img className='wheel' src='https://1.bp.blogspot.com/-AxRd0J6IncI/Vqe0uEUjgjI/AAAAAAAAJOw/ANepkB3-2qo/s1600/astounding-color-wheel-analogous-color-scheme-new-at-homes-gallery-ideas.jpg' />
        <button type='submit' onClick={this.reroute}>Log Out</button>

        {this.matchWithHat()}
        <HatPicker />

        {this.matchWithTop()}
        <TopPicker />
        <JacketPicker />
        <BottomPicker />
        <ShoePicker />
      </div>

    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentUserId: state.currentUserId,
    currentUserName: state.currentUserName,
    currentHat: state.currentHat,
    currentTop: state.currentTop,
    currentJacket: state.currentJacket,
    currentBottom: state.currentBottom,
    currentShoes: state.currentShoes,

    colors: state.colors
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logOut: () => {
      return dispatch({type: 'LOG_OUT', payload: null})},
    setColors: (data) => dispatch({type: 'SET_COLORS', payload: data})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
