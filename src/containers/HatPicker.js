import React, { Component } from 'react';
import {connect} from 'react-redux'

class HatPicker extends Component {

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
              <button onClick={this.props.decreaseHatIndex}>Previous</button>
              <div className='tile'>
                <img src={filteredHats[this.props.hatIndex].image_url} />
              </div>
              <button onClick={this.props.increaseHatIndex}>Next</button>
            </div>
          )
        }
      } else if (this.props.primaryColor != '0' && this.props.colorScheme == 'analogous') {

        let primaryColor = this.props.colors.find(c => c.id == this.props.primaryColor)
        let neutralColors = this.props.colors.filter(c => c.name == 'white' || c.name == 'black' || c.name == 'grey')

        let primaryColorIndex = this.props.schemeColors.findIndex(el => el == primaryColor.name);

        let color1 = this.props.colors.find(color => color.name == this.props.schemeColors[primaryColorIndex])
        let color2 = this.props.colors.find(color => color.name == this.props.schemeColors[primaryColorIndex - 1])
        let color3 = this.props.colors.find(color => color.name == this.props.schemeColors[primaryColorIndex + 1])
        let color4 = this.props.colors.find(color => color.name == this.props.schemeColors[primaryColorIndex - 2])
        let color5 = this.props.colors.find(color => color.name == this.props.schemeColors[primaryColorIndex + 2])

        let filteredHats = this.props.myHats.filter(h => h.color_id == color1.id || h.color_id == color2.id || h.color_id == color3.id || h.color_id == color4.id || h.color_id == color5.id || h.color_id == 17 || h.color_id == 18 || h.color_id == 19)

        if (filteredHats.length > 0) {

          this.props.displayHat(filteredHats[this.props.hatIndex])

          return (
            <div>
              <p>hi</p>
              <button onClick={this.props.decreaseHatIndex}>Previous</button>
              <div className='tile'>
                <img src={filteredHats[this.props.hatIndex].image_url} />
              </div>
              <button onClick={this.props.increaseHatIndex}>Next</button>
            </div>
          )
        }
      } else {
      this.props.displayHat(this.props.myHats[this.props.hatIndex])
      return (
        <div>
          <button onClick={this.props.decreaseHatIndex}>Previous</button>
          <div className='tile'>
            <img src={this.props.myHats[this.props.hatIndex].image_url} />
          </div>
          <button onClick={this.props.increaseHatIndex}>Next</button>
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
    increaseHatIndex: (data) => dispatch({type: 'INCREASE_HAT_INDEX', payload: data})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HatPicker);
