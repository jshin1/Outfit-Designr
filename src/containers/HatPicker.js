import React, { Component } from 'react';
import {connect} from 'react-redux'

class HatPicker extends Component {

  state = {
    index: 0
  }

  rotateHats = () => {
    this.setState(prevState => ({
      index: prevState.index + 1
    }))
  }

  showMyHat = () => {
    if (this.props.myHats.length > 0) {
      console.log(this.props.myHats);
      this.props.displayHat(this.props.myHats[this.state.index])
      return (
        <div>
          <button>Previous</button>
          <div className='tile'>
            <img src={this.props.myHats[this.state.index].image_url} />
          </div>
          <button onClick={this.rotateHats}>Next</button>
        </div>
      )
    }
  }

  render() {
    return (
      <div>
      {this.showMyHat()}
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return {
    myHats: state.myHats,
    currentHat: state.currentHat
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    displayHat: (data) => dispatch({type: 'DISPLAY_HAT', payload: data})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HatPicker);
