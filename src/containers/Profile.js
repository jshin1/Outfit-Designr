import React, { Component } from 'react';
import { connect } from 'react-redux'
import HatPicker from './HatPicker'
import TopPicker from './TopPicker'
import JacketPicker from './JacketPicker'
import BottomPicker from './BottomPicker'
import ShoePicker from './ShoePicker'
import Ootd from '../components/Ootd'

class Profile extends Component {

  componentDidMount() {
    fetch('http://localhost:3000/api/v1/colors')
    .then(res => res.json())
    .then(colors => {
      this.setState({
        currentOutfit: [this.props.currentHat.id, this.props.currentTop.id, this.props.currentJacket.id, this.props.currentBottom.id, this.props.currentShoes.id]
      })
      console.log(this.state.currentOutfit)
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

  state = {
    currentOutfit: []
  }
  //
  // saveOutfit = () => {
  //   console.log('outfit has been saved, bihhhhhh!')
  //
  //
  //
  //   let clothes = []
  //   this.state.currentOutfit.map(clothing => {
  //     console.log(clothing.name)
  //       return clothes.push({
  //         'id': clothing.id,
  //         'name': clothing.name,
  //         'image_url': clothing.image_url,
  //         'category_id': clothing.category_id,
  //         'color_id': clothing.color_id
  //       })
  //     })
  //
  //   fetch('http://localhost:3000/api/v1/outfits', {
  //     method: 'POST',
  //     headers: {
  //       'Accept': 'application/json',
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({
  //       'user_id': 1,
  //       'clothes': clothes
  //       //clothes: [
  //         // this.props.outfits.map(outfit => {
  //         //   return outfit.map(clothing => {
  //         //     return {
  //         //       'id': clothing.id,
  //         //       'name': clothing.name,
  //         //       'image_url': clothing.image_url,
  //         //       'category_id': clothing.category_id,
  //         //       'color_id': clothing.color_id
  //         //     }
  //         //   })
  //         // })
  //       //]
  //     })
  //   })
  //   .then(res => res.json())
  //   .then(data => {
  //     console.log(clothes)
  //     console.log(data)
  //   })
  // }

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

  save = () => {
    fetch('http://localhost:3000/api/v1/outfits', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          occasion_id: 2,
          user_id: 1,
          clothes: this.state.currentOutfit
        })
      })
    .then(res=>res.json())
    .then(data => console.log(data))
  }

  render() {
    return (
      <div>
        <h1>{`Welcome to your DESIGN PORTAL, ${this.props.currentUserName}`}</h1>
        <img className='wheel' src='https://1.bp.blogspot.com/-AxRd0J6IncI/Vqe0uEUjgjI/AAAAAAAAJOw/ANepkB3-2qo/s1600/astounding-color-wheel-analogous-color-scheme-new-at-homes-gallery-ideas.jpg' />
        <button type='submit' onClick={this.reroute}>Log Out</button>

        <Ootd />

        {this.matchWithHat()}
        <HatPicker />

        {this.matchWithTop()}
        <TopPicker />
        <JacketPicker />
        <BottomPicker />
        <ShoePicker />
        <button type='submit' onClick={this.save}>SAVE THIS OUTFIT, BIHHHHH</button>
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

    colors: state.colors,
    outfits: state.outfits,
    currentOutfit: state.currentOutfit
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logOut: () => {
      return dispatch({type: 'LOG_OUT', payload: null})},
    setColors: (data) => dispatch({type: 'SET_COLORS', payload: data}),
    setOutfit: (data) => dispatch({type: 'SET_OUTFIT', payload: data})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
