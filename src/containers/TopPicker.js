import React, { Component } from 'react';
import {connect} from 'react-redux'

class TopPicker extends Component {

  goBack = (array) => {
    let lastIdx = (array.length - 1)
    if (this.props.topIndex === 0) {
      this.props.setTopIndex(lastIdx)
    } else {
      this.props.decreaseTopIndex()
    }
  }

  goForward = (array) => {
    if (this.props.topIndex === array.length - 1) {
      this.props.setTopIndex(0)
    } else {
      this.props.increaseTopIndex()
    }
  }

  showMyTop = () => {

    if (this.props.myTops.length > 0) {
      if (this.props.primaryColor != '0' && this.props.colorScheme === 'complementary') {

        let primaryColor = this.props.colors.find(c => c.id == this.props.primaryColor)
        let secondaryColor = this.props.colors.find(c => c.name == primaryColor.complementary_color)
        let neutralColors = this.props.colors.filter(c => c.name == 'white' || c.name == 'black' || c.name == 'grey')

        const filteredTops = this.props.myTops.filter(top => top.color_id == primaryColor.id || top.color_id == secondaryColor.id || top.color_id == 17 || top.color_id == 18 || top.color_id == 19)

        if (filteredTops.length > 0) {

          console.log(filteredTops);
          this.props.displayTop(filteredTops[this.props.topIndex])
          return (
            <div>
              <button onClick={() => this.goBack(filteredTops)}>Previous</button>
              <div className='tile'>
                <img src={filteredTops[this.props.topIndex].image_url} />
              </div>
              <button onClick={() => this.goForward(filteredTops)}>Next</button>
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

        let filteredTops = this.props.myTops.filter(t => t.color_id == color1.id || t.color_id == color2.id || t.color_id == color3.id || t.color_id == color4.id || t.color_id == color5.id || t.color_id == 17 || t.color_id == 18 || t.color_id == 19)

        if (filteredTops.length > 0) {

          this.props.displayTop(filteredTops[this.props.topIndex])

          return (
            <div>
              <button onClick={() => this.goBack(filteredTops)}>Previous</button>
              <div className='tile'>
                <img src={filteredTops[this.props.topIndex].image_url} />
              </div>
              <button onClick={() => this.goForward(filteredTops)}>Next</button>
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

        let filteredTops = this.props.myTops.filter(j => j.color_id == color1.id || j.color_id == color2.id || j.color_id == color3.id || j.color_id == 17 || j.color_id == 18 || j.color_id == 19)

        if (filteredTops.length > 0) {

          this.props.displayTop(filteredTops[this.props.topIndex])

          return (
            <div>
              <button onClick={() => this.goBack(filteredTops)}>Previous</button>
              <div className='tile'>
                <img src={filteredTops[this.props.topIndex].image_url} />
              </div>
              <button onClick={() => this.goForward(filteredTops)}>Next</button>
            </div>
          )
        }
      } else {
      this.props.displayTop(this.props.myTops[this.props.topIndex])
      return (
        <div>
          <button onClick={() => this.goBack(this.props.myTops)}>Previous</button>
          <div className='tile'>
            <img src={this.props.myTops[this.props.topIndex].image_url} />
          </div>
          <button onClick={() => this.goForward(this.props.myTops)}>Next</button>
        </div>
      )}
    }
  }

  render() {
    return (
      <div>
        {this.showMyTop()}
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return {
    myTops: state.myTops,
    currentTop: state.currentTop,
    schemeColors: state.schemeColors,
    primaryColor: state.primaryColor,
    colors: state.colors,
    colorScheme: state.colorScheme,
    topIndex: state.topIndex
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    displayTop: (data) => dispatch({type: 'DISPLAY_TOP', payload: data}),
    decreaseTopIndex: (data) => dispatch({type: 'DECREASE_TOP_INDEX', payload: data}),
    increaseTopIndex: (data) => dispatch({type: 'INCREASE_TOP_INDEX', payload: data}),
    setTopIndex: (data) => dispatch({type: 'SET_TOP_INDEX', payload: data})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TopPicker);
