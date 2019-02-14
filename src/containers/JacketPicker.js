import React, { Component } from 'react';
import {connect} from 'react-redux'

import { Card, Icon } from 'semantic-ui-react'

class JacketPicker extends Component {

  goBack = (array) => {
    let lastIdx = (array.length - 1)
    if (this.props.jacketIndex === 0) {
      this.props.setJacketIndex(lastIdx)
    } else {
      this.props.decreaseJacketIndex()
    }
  }

  goForward = (array) => {
    if (this.props.jacketIndex === array.length - 1) {
      this.props.setJacketIndex(0)
    } else {
      this.props.increaseJacketIndex()
    }
  }

  showMyJacket = () => {

    if (this.props.myJackets.length > 0) {
      if (this.props.primaryColor != '0' && this.props.colorScheme === 'complementary') {

        let primaryColor = this.props.colors.find(c => c.id == this.props.primaryColor)
        let secondaryColor = this.props.colors.find(c => c.name == primaryColor.complementary_color)
        let neutralColors = this.props.colors.filter(c => c.name == 'white' || c.name == 'black' || c.name == 'grey')

        const filteredJackets = this.props.myJackets.filter(jacket => jacket.color_id == primaryColor.id || jacket.color_id == secondaryColor.id || jacket.color_id == 17 || jacket.color_id == 18 || jacket.color_id == 19)

        if (filteredJackets.length > 0) {

          console.log(filteredJackets);
          this.props.displayJacket(filteredJackets[this.props.jacketIndex])
          return (
            <div className='profilejacket'>
              <Icon name='arrow alternate circle left' color={primaryColor.name} size='huge' onClick={() => this.goBack(filteredJackets)}/>
              <div className='tile'>
                <img src={filteredJackets[this.props.jacketIndex].image_url} />
              </div>
              <Icon name='arrow alternate circle right' color={primaryColor.name} size='huge' onClick={() => this.goForward(filteredJackets)}/>
            </div>
          )
        }
      } else if (this.props.primaryColor != '0' && this.props.colorScheme == 'analogous') {

        let primaryColor = this.props.colors.find(c => c.id == this.props.primaryColor)
        let neutralColors = this.props.colors.filter(c => c.name == 'white' || c.name == 'black' || c.name == 'grey')

        let primaryColorIndex = this.props.schemeColors.findIndex(el => el == primaryColor.name);

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

        let filteredJackets = this.props.myJackets.filter(j => j.color_id == color1.id || j.color_id == color2.id || j.color_id == color3.id || j.color_id == color4.id || j.color_id == color5.id || j.color_id == 17 || j.color_id == 18 || j.color_id == 19)

        if (filteredJackets.length > 0) {

          this.props.displayJacket(filteredJackets[this.props.jacketIndex])

          return (
            <div className='profilejacket'>
              <Icon name='arrow alternate circle left' color={primaryColor.name} size='huge' onClick={() => this.goBack(filteredJackets)}/>
              <div className='tile'>
                <img src={filteredJackets[this.props.jacketIndex].image_url} />
              </div>
              <Icon name='arrow alternate circle right' color={primaryColor.name} size='huge' onClick={() => this.goForward(filteredJackets)}/>
            </div>
          )
        }
      } else if (this.props.primaryColor != '0' && this.props.colorScheme == 'triad') {
        const primaryColor = this.props.colors.find(color => color.id == this.props.primaryColor)
        let primaryColorIndex = this.props.schemeColors.findIndex(el => el == primaryColor.name)

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

        let filteredJackets = this.props.myJackets.filter(j => j.color_id == color1.id || j.color_id == color2.id || j.color_id == color3.id || j.color_id == 17 || j.color_id == 18 || j.color_id == 19)

        if (filteredJackets.length > 0) {

          this.props.displayJacket(filteredJackets[this.props.jacketIndex])

          return (
            <div className='profilejacket'>
              <Icon name='arrow alternate circle left' color={primaryColor.name} size='huge' onClick={() => this.goBack(filteredJackets)}/>
              <div className='tile'>
                <img src={filteredJackets[this.props.jacketIndex].image_url} />
              </div>
              <Icon name='arrow alternate circle right' color={primaryColor.name} size='huge' onClick={() => this.goForward(filteredJackets)}/>
            </div>
          )
        }
      } else {
      this.props.displayJacket(this.props.myJackets[this.props.jacketIndex])
      return (
        <div className='profilejacket'>
          <Icon name='arrow alternate circle left' size='huge' onClick={() => this.goBack(this.props.myJackets)}/>
          <div className='tile'>
            <img src={this.props.myJackets[this.props.jacketIndex].image_url} />
          </div>
          <Icon name='arrow alternate circle right' size='huge' onClick={() => this.goForward(this.props.myJackets)}/>
        </div>
      )}
    }
}

  render() {
    return (
      <div>
        {this.showMyJacket()}
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return {
    myJackets: state.myJackets,
    currentJacket: state.currentJacket,
    schemeColors: state.schemeColors,
    primaryColor: state.primaryColor,
    colorScheme: state.colorScheme,
    colors: state.colors,
    jacketIndex: state.jacketIndex
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    displayJacket: (data) => dispatch({type: 'DISPLAY_JACKET', payload: data}),
    decreaseJacketIndex: (data) => dispatch({type: 'DECREASE_JACKET_INDEX', payload: data}),
    increaseJacketIndex: (data) => dispatch({type: 'INCREASE_JACKET_INDEX', payload: data}),
    setJacketIndex: (data) => dispatch({type: 'SET_JACKET_INDEX', payload: data})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(JacketPicker);
