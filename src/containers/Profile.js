import React, { Component } from 'react';
import { connect } from 'react-redux'
import HatPicker from './HatPicker'
import TopPicker from './TopPicker'
import JacketPicker from './JacketPicker'
import BottomPicker from './BottomPicker'
import ShoePicker from './ShoePicker'
import Ootd from '../components/Ootd'

import {Dropdown, Button, Segment, Message, Header} from 'semantic-ui-react'

const schemeOptions = [
  {key: 'Complementary', value: 'complementary', text: 'Complementary'},
  {key: 'Analogous', value: 'analogous', text: 'Analogous'},
  {key: 'Triad', value: 'triad', text: 'Triad'}
]

const colorOptions = [
  {key: '0', value: '0', text: 'Show All'},
  {key: 'Magenta', value: '1', text: 'Magenta'},
  {key: 'Red Magenta', value: '2', text: 'Red Magenta'},
  {key: 'Red', value: '3', text: 'Red'},
  {key: 'Red Orange', value: '4', text: 'Red Orange'},
  {key: 'Yellow', value: '5', text: 'Yellow'},
  {key: 'Yellow Green', value: '6', text: 'Yellow Green'},
  {key: 'Green', value: '7', text: 'Green'},
  {key: 'Blue Green', value: '8', text: 'Blue Green'},
  {key: 'Cyan', value: '9', text: 'Cyan'},
  {key: 'Blue', value: '10', text: 'Blue'},
  {key: 'Violet Blue', value: '11', text: 'Violet Blue'},
  {key: 'Violet', value: '12', text: 'Violet'}
]

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

  findComplementaryClothes = () => {
    if (this.props.currentHat) {
      let color = this.props.colors.find(color => color.id == this.props.currentHat.color_id)
    }
  }

  state = {
    currentOutfit: []
  }

  save = () => {
    const outfit = [this.props.currentHat.id, this.props.currentTop.id, this.props.currentJacket.id, this.props.currentBottom.id, this.props.currentShoes.id]

    fetch('http://localhost:3000/api/v1/outfits', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          occasion_id: 2,
          user_id: 1,
          clothes: outfit
        })
      })
    .then(res=>res.json())
    .then(data => console.log(data))
  }

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

      const color2index = () => {
        if (primaryColorIndex - 1 < 0) {
          return (this.props.schemeColors.length - 1)
        } else {
          return (primaryColorIndex -1)
        }
      }

      const color3index = () => {
        if (primaryColorIndex + 1 >= this.props.schemeColors.length) {
          return (primaryColorIndex + 1 - this.props.schemeColors.length)
        } else {
          return (primaryColorIndex + 1)
        }
      }

        const color4index = () => {
          if (primaryColorIndex - 2 < 0) {
            return (this.props.schemeColors.length - 2)
          } else {
            return (primaryColorIndex - 2)
          }
        }

        const color5index = () => {
          if (primaryColorIndex + 2 >= this.props.schemeColors.length) {
            return (primaryColorIndex + 2 - this.props.schemeColors.length)
          } else {
            return (primaryColorIndex + 2)
          }
      }
      let color2 = this.props.colors.find(color => color.name == this.props.schemeColors[color2index()])
      let color3 = this.props.colors.find(color => color.name == this.props.schemeColors[color3index()])
      let color4 = this.props.colors.find(color => color.name == this.props.schemeColors[color4index()])
      let color5 = this.props.colors.find(color => color.name == this.props.schemeColors[color5index()])
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

    if (this.props.currentUserName === null) {
      return(
        <div>you're not logged in</div>
      )
    } else {
      return (
        <Segment className='cheese' id='profile'>
          <h1>{`Welcome to your DESIGN PORTAL, ${this.props.currentUserName}`}</h1>
          <Header as='h2' className='textstyle'>{`Welcome to your Design Portal, ${this.props.currentUserName}`}</Header>

          <Message color='black'>
            <Message.Header >Instructions</Message.Header> <br />
              {'Please select how you would like to match your outfit:'} <br />
                <select onChange={(event) => this.props.setColorScheme(event)}>
                  <option value='complementary'>Complementary</option>
                  <option value='analogous'>Analogous</option>
                  <option value='triad'>Triad</option>
                </select> <br /><br />

              {'What would you like your primary color to be?'} <br />
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
                </select>

                <br />
                <br />
                {this.colorRecommender()}
          </Message>
          <br /><br />







          <HatPicker />
          <TopPicker />
          <JacketPicker />
          <BottomPicker />
          <ShoePicker />

          <Segment inverted>
            <Button inverted color='orange' onClick={this.save}>Save Outfit</Button>
            <Button inverted color='orange' onClick={this.reroute}>Log Out</Button>
          </Segment>
        </Segment>
      )
    }
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
    addShoes: (data) => dispatch({type: 'ADD_SHOES', payload: data }),

    setCurrentOutfit: (data) => dispatch({type: 'SET_CURRENT_OUTFIT', payload: data})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
