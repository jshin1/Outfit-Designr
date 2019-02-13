import React, { Component } from 'react';
import {connect} from 'react-redux'

class JacketPicker extends Component {

  state = {
    index: 0
  }

  lookBack = () => {
    this.setState(prevState => ({
      index: prevState.index - 1
    }))
  }

  rotateJackets = () => {
    this.setState(prevState => ({
      index: prevState.index + 1
    }))
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
            <div>
              <button onClick={this.props.decreaseJacketIndex}>Previous</button>
              <div className='tile'>
                <img src={filteredJackets[this.props.jacketIndex].image_url} />
              </div>
              <button onClick={this.props.increaseJacketIndex}>Next</button>
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

        let filteredJackets = this.props.myJackets.filter(j => j.color_id == color1.id || j.color_id == color2.id || j.color_id == color3.id || j.color_id == color4.id || j.color_id == color5.id || j.color_id == 17 || j.color_id == 18 || j.color_id == 19)

        if (filteredJackets.length > 0) {

          this.props.displayJacket(filteredJackets[this.props.jacketIndex])

          return (
            <div>
              <p>hi</p>
              <button onClick={this.props.decreaseJacketIndex}>Previous</button>
              <div className='tile'>
                <img src={filteredJackets[this.props.jacketIndex].image_url} />
              </div>
              <button onClick={this.props.increaseJacketIndex}>Next</button>
            </div>
          )
        }
      } else {
      this.props.displayJacket(this.props.myJackets[this.props.jacketIndex])
      return (
        <div>
          <button onClick={this.props.decreaseJacketIndex}>Previous</button>
          <div className='tile'>
            <img src={this.props.myJackets[this.props.jacketIndex].image_url} />
          </div>
          <button onClick={this.props.increaseJacketIndex}>Next</button>
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
    increaseJacketIndex: (data) => dispatch({type: 'INCREASE_JACKET_INDEX', payload: data})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(JacketPicker);
