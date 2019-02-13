import React, { Component } from 'react';
import {connect} from 'react-redux'

class BottomPicker extends Component {

  state = {
    index: 0
  }

  rotateBottoms = () => {
    this.setState(prevState => ({
      index: prevState.index + 1
    }))
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
            <div>
              <button onClick={this.props.decreaseBottomIndex}>Previous</button>
              <div className='tile'>
                <img src={filteredBottoms[this.props.bottomIndex].image_url} />
              </div>
              <button onClick={this.props.increaseBottomIndex}>Next</button>
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
            <div>
              <button onClick={this.props.decreaseBottomIndex}>Previous</button>
              <div className='tile'>
                <img src={filteredBottoms[this.props.bottomIndex].image_url} />
              </div>
              <button onClick={this.props.increaseBottomIndex}>Next</button>
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
            <div>
              <button onClick={this.props.decreaseBottomIndex}>Previous</button>
              <div className='tile'>
                <img src={filteredBottoms[this.props.bottomIndex].image_url} />
              </div>
              <button onClick={this.props.increaseBottomIndex}>Next</button>
            </div>
          )
        }
      } else {
      this.props.displayBottom(this.props.myBottoms[this.props.bottomIndex])
      return (
        <div>
          <button onClick={this.props.decreaseBottomIndex}>Previous</button>
          <div className='tile'>
            <img src={this.props.myBottoms[this.props.bottomIndex].image_url} />
          </div>
          <button onClick={this.props.increaseBottomIndex}>Next</button>
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
    increaseBottomIndex: (data) => dispatch({type: 'INCREASE_BOTTOM_INDEX', payload: data})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BottomPicker);
