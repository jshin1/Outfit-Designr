import React, { Component } from 'react';
import {connect} from 'react-redux'

import { Card, Icon } from 'semantic-ui-react'

class ShoePicker extends Component {

  goBack = (array) => {
    let lastIdx = (array.length - 1)
    if (this.props.shoesIndex === 0) {
      this.props.setShoesIndex(lastIdx)
    } else {
      this.props.decreaseShoesIndex()
    }
  }

  goForward = (array) => {
    if (this.props.shoesIndex === array.length - 1) {
      this.props.setShoesIndex(0)
    } else {
      this.props.increaseShoesIndex()
    }
  }

  showMyShoes = () => {
    if (this.props.myShoes.length > 0) {
      if (this.props.primaryColor != '0' && this.props.colorScheme === 'complementary') {

        let primaryColor = this.props.colors.find(c => c.id == this.props.primaryColor)
        let secondaryColor = this.props.colors.find(c => c.name == primaryColor.complementary_color)
        let neutralColors = this.props.colors.filter(c => c.name == 'white' || c.name == 'black' || c.name == 'grey')

        const filteredShoes = this.props.myShoes.filter(shoes => shoes.color_id == primaryColor.id || shoes.color_id == secondaryColor.id || shoes.color_id == 17 || shoes.color_id == 18 || shoes.color_id == 19)

        if (filteredShoes.length > 0) {

          console.log(filteredShoes);
          this.props.displayShoes(filteredShoes[this.props.shoesIndex])
          return (
            <div className='profileshoes'>
              <Icon name='arrow alternate circle left' color={primaryColor.name} size='huge' onClick={() => this.goBack(filteredShoes)}/>
              <div className='tile'>
                <img src={filteredShoes[this.props.shoesIndex].image_url} />
              </div>
              <Icon name='arrow alternate circle right' color={primaryColor.name} size='huge' onClick={() => this.goForward(filteredShoes)}/>
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

        let filteredShoes = this.props.myShoes.filter(s => s.color_id == color1.id || s.color_id == color2.id || s.color_id == color3.id || s.color_id == color4.id || s.color_id == color5.id || s.color_id == 17 || s.color_id == 18 || s.color_id == 19)

        if (filteredShoes.length > 0) {

          this.props.displayShoes(filteredShoes[this.props.shoesIndex])

          return (
            <div className='profileshoes'>
              <Icon name='arrow alternate circle left' color={primaryColor.name} size='huge' onClick={() => this.goBack(filteredShoes)}/>
              <div className='tile'>
                <img src={filteredShoes[this.props.shoesIndex].image_url} />
              </div>
              <Icon name='arrow alternate circle right' color={primaryColor.name} size='huge' onClick={() => this.goForward(filteredShoes)}/>
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

        let filteredShoes = this.props.myShoes.filter(s => s.color_id == color1.id || s.color_id == color2.id || s.color_id == color3.id || s.color_id == 17 || s.color_id == 18 || s.color_id == 19)

        if (filteredShoes.length > 0) {

          this.props.displayShoes(filteredShoes[this.props.shoesIndex])

          return (
            <div className='profileshoes'>
              <Icon name='arrow alternate circle left' color={primaryColor.name} size='huge' onClick={() => this.goBack(filteredShoes)}/>
              <div className='tile'>
                <img src={filteredShoes[this.props.shoesIndex].image_url} />
              </div>
              <Icon name='arrow alternate circle right' color={primaryColor.name} size='huge' onClick={() => this.goForward(filteredShoes)}/>
            </div>
          )
        }
      } else {
      this.props.displayShoes(this.props.myShoes[this.props.shoesIndex])
      return (
        <div className='profileshoes'>
          <Icon name='arrow alternate circle left' size='huge' onClick={() => this.goBack(this.props.myShoes)}/>
          <div className='tile'>
            <img src={this.props.myShoes[this.props.shoesIndex].image_url} />
          </div>
          <Icon name='arrow alternate circle right' size='huge' onClick={() => this.goForward(this.props.myShoes)}/>
        </div>
      )}
    }
  }

  render() {
    return (
      <div>
        {this.showMyShoes()}
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return {
    myShoes: state.myShoes,
    currentShoes: state.currentShoes,
    schemeColors: state.schemeColors,
    primaryColor: state.primaryColor,
    colors: state.colors,
    colorScheme: state.colorScheme,
    shoesIndex: state.shoesIndex
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    displayShoes: (data) => dispatch({type: 'DISPLAY_SHOES', payload: data}),
    decreaseShoesIndex: (data) => dispatch({type: 'DECREASE_SHOES_INDEX', payload: data}),
    increaseShoesIndex: (data) => dispatch({type: 'INCREASE_SHOES_INDEX', payload: data}),
    setShoesIndex: (data) => dispatch({type: 'SET_SHOES_INDEX', payload: data})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoePicker);
