import React, { Component } from 'react';
import {connect} from 'react-redux'

import { Card, Icon } from 'semantic-ui-react'

class BottomPicker extends Component {

  goBack = (array) => {
    let lastIdx = (array.length - 1)
    if (this.props.bottomIndex === 0) {
      this.props.setBottomIndex(lastIdx)
    } else {
      this.props.decreaseBottomIndex()
    }
  }

  goForward = (array) => {
    if (this.props.bottomIndex === array.length - 1) {
      this.props.setBottomIndex(0)
    } else {
      this.props.increaseBottomIndex()
    }
  }

  showMyBottom = () => {
    if (this.props.myBottoms.length > 0) {
      if (this.props.primaryColor != '0' && this.props.colorScheme === 'complementary') {

        let primaryColor = this.props.colors.find(c => c.id == this.props.primaryColor)
        let secondaryColor = this.props.colors.find(c => c.name == primaryColor.complementary_color)
        let neutralColors = this.props.colors.filter(c => c.name == 'white' || c.name == 'black' || c.name == 'grey')

        const filteredBottoms = this.props.myBottoms.filter(bottom => bottom.color_id == primaryColor.id || bottom.color_id == secondaryColor.id || bottom.color_id == 17 || bottom.color_id == 18 || bottom.color_id == 19)

        if (filteredBottoms.length > 0) {

          console.log(filteredBottoms);
          this.props.displayBottom(filteredBottoms[this.props.bottomIndex])
          return (
            <div className='profilebottom'>
              <Icon name='arrow alternate circle left' color={primaryColor.name} size='huge' onClick={() => this.goBack(filteredBottoms)}/>
              <div className='tile'>
                <img src={filteredBottoms[this.props.bottomIndex].image_url} />
              </div>
              <Icon name='arrow alternate circle right' color={primaryColor.name} size='huge' onClick={() => this.goForward(filteredBottoms)}/>
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

        let filteredBottoms = this.props.myBottoms.filter(b => b.color_id == color1.id || b.color_id == color2.id || b.color_id == color3.id || b.color_id == color4.id || b.color_id == color5.id || b.color_id == 17 || b.color_id == 18 || b.color_id == 19)

        if (filteredBottoms.length > 0) {

          this.props.displayBottom(filteredBottoms[this.props.bottomIndex])

          return (
            <div className='profilebottom'>
              <Icon name='arrow alternate circle left' color={primaryColor.name} size='huge' onClick={() => this.goBack(filteredBottoms)}/>
              <div className='tile'>
                <img src={filteredBottoms[this.props.bottomIndex].image_url} />
              </div>
              <Icon name='arrow alternate circle right' color={primaryColor.name} size='huge' onClick={() => this.goForward(filteredBottoms)}/>
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

        let filteredBottoms = this.props.myBottoms.filter(b => b.color_id == color1.id || b.color_id == color2.id || b.color_id == color3.id || b.color_id == 17 || b.color_id == 18 || b.color_id == 19)

        if (filteredBottoms.length > 0) {

          this.props.displayBottom(filteredBottoms[this.props.bottomIndex])

          return (
            <div className='profilebottom'>
              <Icon name='arrow alternate circle left' color={primaryColor.name} size='huge' onClick={() => this.goBack(filteredBottoms)}/>
              <div className='tile'>
                <img src={filteredBottoms[this.props.bottomIndex].image_url} />
              </div>
              <Icon name='arrow alternate circle right' color={primaryColor.name} size='huge' onClick={() => this.goForward(filteredBottoms)}/>
            </div>
          )
        }
      } else {
      this.props.displayBottom(this.props.myBottoms[this.props.bottomIndex])
      return (
        <div className='profilebottom'>
          <Icon name='arrow alternate circle left' size='huge' onClick={() => this.goBack(this.props.myBottoms)}/>
          <div className='tile'>
            <img src={this.props.myBottoms[this.props.bottomIndex].image_url} />
          </div>
          <Icon name='arrow alternate circle right' size='huge' onClick={() => this.goForward(this.props.myBottoms)}/>
        </div>
      )}
    }
  }

  render() {
    return (
      <div>
        {this.showMyBottom()}
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return {
    myBottoms: state.myBottoms,
    currentBottom: state.currentBottom,
    schemeColors: state.schemeColors,
    primaryColor: state.primaryColor,
    colors: state.colors,
    colorScheme: state.colorScheme,
    bottomIndex: state.bottomIndex
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    displayBottom: (data) => dispatch({type: 'DISPLAY_BOTTOM', payload: data}),
    decreaseBottomIndex: (data) => dispatch({type: 'DECREASE_BOTTOM_INDEX', payload: data}),
    increaseBottomIndex: (data) => dispatch({type: 'INCREASE_BOTTOM_INDEX', payload: data}),
    setBottomIndex: (data) => dispatch({type: 'SET_BOTTOM_INDEX', payload: data})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BottomPicker);
