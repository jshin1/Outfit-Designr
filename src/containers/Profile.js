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

  findComplementaryClothes = () => {
    if (this.props.currentHat) {
      let color = this.props.colors.find(color => color.id == this.props.currentHat.color_id)
    }
  }

  state = {
    currentOutfit: [],
  }

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



  // matchOutfit = (event) => {
  //   console.log(event.target.value.toLowerCase());
  // }

  changeSetting = (event) => {
    this.props.setPrimaryColor(event)
    this.props.resetIndex()
  }

  colorRecommender = () => {
    if (this.props.colorScheme === 'complementary' && this.props.primaryColor != '0') {
      const primaryColor = this.props.colors.find(color => color.id == this.props.primaryColor)

      return(
        <div>
          {`You've chosen ${primaryColor.name} as your primary color! The complementary color is ${primaryColor.complementary_color}! Your wardrobe has been modified to best refine your look.`}
        </div>
      )
    } else if (this.props.colorScheme === 'analogous' && this.props.primaryColor != '0') {
      const primaryColor = this.props.colors.find(color => color.id == this.props.primaryColor)
      let primaryColorIndex = this.props.schemeColors.findIndex(el => el == primaryColor.name)
      console.log(primaryColorIndex)

      let color1 = this.props.colors.find(color => color.name == this.props.schemeColors[primaryColorIndex])
      let color2 = this.props.colors.find(color => color.name == this.props.schemeColors[primaryColorIndex - 1])
      let color3 = this.props.colors.find(color => color.name == this.props.schemeColors[primaryColorIndex + 1])
      let color4 = this.props.colors.find(color => color.name == this.props.schemeColors[primaryColorIndex - 2])
      let color5 = this.props.colors.find(color => color.name == this.props.schemeColors[primaryColorIndex + 2])
      return(
        <div>
          {`Looks like you've chosen to match your outfit with ${this.props.colorScheme} colors!`} <br />
          {`Being that your primary color is ${primaryColor.name}, you have a several options:`} <br />
          {`1.  ${color2.name} / ${color1.name} / ${color3.name}`} <br />
          {`2. ${color1.name} / ${color3.name} / ${color5.name}`} <br />
          {`3. ${color4.name} / ${color2.name} / ${color1.name}`}
        </div>
      )
    } else if (this.props.colorScheme === 'triad' && this.props.primaryColor != '0') {
      const primaryColor = this.props.colors.find(color => color.id == this.props.primaryColor)
      let primaryColorIndex = this.props.schemeColors.findIndex(el => el == primaryColor.name)
      console.log(primaryColorIndex)

      const color1 = this.props.colors.find(color => color.name == this.props.schemeColors[primaryColorIndex])

      const color2index = () => {
        if (primaryColorIndex + 4 >= this.props.schemeColors.length) {
          return (primaryColorIndex + 4 - this.props.schemeColors.length)
        } else {
          return (primaryColorIndex + 4)
        }
      }

      const color3index = () => {
        if (primaryColorIndex + 8 >= this.props.schemeColors.length) {
          return (primaryColorIndex + 8 - this.props.schemeColors.length)
        } else {
          return (primaryColorIndex + 8)
        }
      }

      let color2 = this.props.colors.find(color => color.name == this.props.schemeColors[color2index()])
      let color3 = this.props.colors.find(color => color.name == this.props.schemeColors[color3index()])
      return(
        <div>
          {`Looks like you've chosen to match your outfit with ${this.props.colorScheme} colors!`} <br />
          {'Your color options are as follows:'} <br />
          {`${color1.name}, ${color2.name}, ${color3.name}`}
        </div>
      )
    }
  }

  render() {
    return (
      <div>
        <h1>{`Welcome to your DESIGN PORTAL, ${this.props.currentUserName}`}</h1>
        <img className='wheel' src='https://1.bp.blogspot.com/-AxRd0J6IncI/Vqe0uEUjgjI/AAAAAAAAJOw/ANepkB3-2qo/s1600/astounding-color-wheel-analogous-color-scheme-new-at-homes-gallery-ideas.jpg' />
        <button type='submit' onClick={this.reroute}>Log Out</button>

        <Ootd />

{'Please select how you would like to match your outfit: '}
          <select onChange={(event) => this.props.setColorScheme(event)}>
            <option value='complementary'>Complementary</option>
            <option value='analogous'>Analogous</option>
            <option value='triad'>Triad</option>
          </select> <br />
{'What would you like your primary color to be?'}
          <select onChange={(event) => this.changeSetting(event)}>
            <option value='0'>SHOW ALL</option>
            <option value='1'>Magenta</option>
            <option value='2'>Red Magenta</option>
            <option value='3'>Red</option>
            <option value='4'>Red Orange</option>
            <option value='5'>Yellow</option>
            <option value='6'>Yellow Green</option>
            <option value='7'>Green</option>
            <option value='8'>Blue Green</option>
            <option value='9'>Cyan</option>
            <option value='10'>Blue</option>
            <option value='11'>Violet Blue</option>
            <option value='12'>Violet</option>
            <option value='13'>Denim</option>
            <option value='14'>Navy</option>
            <option value='15'>Burgundy</option>
            <option value='16'>Olive</option>
            <option value='17'>White</option>
            <option value='18'>Grey</option>
            <option value='19'>Black</option>
          </select>

          {this.colorRecommender()}
        <HatPicker />
        <TopPicker />
        <JacketPicker />
        <BottomPicker />
        <ShoePicker />
        <button type='submit' className='btn btn-dark' onClick={this.save}>SAVE THIS OUTFIT, BIHHHHH</button>
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

    myHats: state.myHats,
    myTops: state.myTops,
    myJackets: state.myJackets,
    myBottoms: state.myBottoms,
    myShoes: state.myShoes,

    colors: state.colors,
    colorScheme: state.colorScheme,
    primaryColor: state.primaryColor,
    outfits: state.outfits,
    currentOutfit: state.currentOutfit,

    schemeColors: state.schemeColors
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logOut: () => {
      return dispatch({type: 'LOG_OUT', payload: null})},
    setColors: (data) => dispatch({type: 'SET_COLORS', payload: data}),
    setOutfit: (data) => dispatch({type: 'SET_OUTFIT', payload: data}),
    setColorScheme: (event) => dispatch({type: 'SET_COLOR_SCHEME', payload: event.target.value}),
    setPrimaryColor: (event) => dispatch({type: 'SET_PRIMARY_COLOR', payload: event.target.value}),

    resetIndex: (data) => dispatch({type: 'RESET_INDEX', payload: 0}),

    addHats: (data) => {
      return dispatch({type: 'ADD_HATS', payload: data })},

    addTops: (data) => dispatch({type: 'ADD_TOPS', payload: data }),
    addJackets: (data) => dispatch({type: 'ADD_JACKETS', payload: data }),
    addBottoms: (data) => dispatch({type: 'ADD_BOTTOMS', payload: data }),
    addShoes: (data) => dispatch({type: 'ADD_SHOES', payload: data })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
