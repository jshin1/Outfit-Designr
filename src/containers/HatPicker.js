import React, { Component } from 'react';
import {connect} from 'react-redux'

class HatPicker extends Component {

  goBack = (array) => {
    let lastIdx = (array.length - 1)
    if (this.props.hatIndex === 0) {
      this.props.setHatIndex(lastIdx)
    } else {
      this.props.decreaseHatIndex()
    }
  }

  goForward = (array) => {
    if (this.props.hatIndex === array.length - 1) {
      this.props.setHatIndex(0)
    } else {
      this.props.increaseHatIndex()
    }
  }

  showMyHat = () => {

    if (this.props.myHats.length > 0) {
      if (this.props.primaryColor != '0' && this.props.colorScheme === 'complementary') {

        let primaryColor = this.props.colors.find(c => c.id == this.props.primaryColor)
        let secondaryColor = this.props.colors.find(c => c.name == primaryColor.complementary_color)
        let neutralColors = this.props.colors.filter(c => c.name == 'white' || c.name == 'black' || c.name == 'grey')

        const filteredHats = this.props.myHats.filter(hat => hat.color_id == primaryColor.id || hat.color_id == secondaryColor.id || hat.color_id == 17 || hat.color_id == 18 || hat.color_id == 19)

        if (filteredHats.length > 0) {

          console.log(filteredHats);
          this.props.displayHat(filteredHats[this.props.hatIndex])
          return (
            <div>
              <button onClick={() => this.goBack(filteredHats)}>Previous</button>
              <div className='tile'>
                <img src={filteredHats[this.props.hatIndex].image_url} />
              </div>
              <button onClick={() => this.goForward(filteredHats)}>Next</button>
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

        let filteredHats = this.props.myHats.filter(h => h.color_id == color1.id || h.color_id == color2.id || h.color_id == color3.id || h.color_id == color4.id || h.color_id == color5.id || h.color_id == 17 || h.color_id == 18 || h.color_id == 19)

        if (filteredHats.length > 0) {

          this.props.displayHat(filteredHats[this.props.hatIndex])

          return (
            <div>
              <button onClick={() => this.goBack(filteredHats)}>Previous</button>
              <div className='tile'>
                <img src={filteredHats[this.props.hatIndex].image_url} />
              </div>
              <button onClick={() => this.goForward(filteredHats)}>Next</button>
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

        let filteredHats = this.props.myHats.filter(h => h.color_id == color1.id || h.color_id == color2.id || h.color_id == color3.id || h.color_id == 17 || h.color_id == 18 || h.color_id == 19)

        if (filteredHats.length > 0) {

          this.props.displayHat(filteredHats[this.props.hatIndex])

          return (
            <div>
              <button onClick={() => this.goBack(filteredHats)}>Previous</button>
              <div className='tile'>
                <img src={filteredHats[this.props.hatIndex].image_url} />
              </div>
              <button onClick={() => this.goForward(filteredHats)}>Next</button>
            </div>
          )
        }

      } else {
      this.props.displayHat(this.props.myHats[this.props.hatIndex])
      return (
        <div>
          <button onClick={() => this.goBack(this.props.myHats)}>Previous</button>
          <div className='tile'>
            <img src={this.props.myHats[this.props.hatIndex].image_url} />
          </div>
          <button onClick={() => this.goForward(this.props.myHats)}>Next</button>
        </div>
      )}
    }
  }

  render() {
    return (
      <div>
      {this.showMyHat()}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    myHats: state.myHats,
    currentHat: state.currentHat,
    schemeColors: state.schemeColors,
    primaryColor: state.primaryColor,
    colors: state.colors,
    colorScheme: state.colorScheme,
    hatIndex: state.hatIndex
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    displayHat: (data) => dispatch({type: 'DISPLAY_HAT', payload: data}),
    decreaseHatIndex: (data) => dispatch({type: 'DECREASE_HAT_INDEX', payload: data}),
    increaseHatIndex: (data) => dispatch({type: 'INCREASE_HAT_INDEX', payload: data}),
    setHatIndex: (data) => dispatch({type: 'SET_HAT_INDEX', payload: data})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HatPicker);
