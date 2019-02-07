import React, { Component } from 'react';
import {connect} from 'react-redux'

class JacketPicker extends Component {

  state = {
    index: 0
  }

  rotateJackets = () => {
    this.setState(prevState => ({
      index: prevState.index + 1
    }))
  }

  showMyJacket = () => {
    if (this.props.myJackets.length > 0) {
    this.props.displayJacket(this.props.myJackets[this.state.index])
    return (
      <div className='tile'>
        <img src={this.props.myJackets[this.state.index].image_url} />
      </div>
    )
    }
  }

  render() {
    return (
      <div>
        <button>Previous</button>
        {this.showMyJacket()}
        <button onClick={this.rotateJackets}>Next</button>
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return {
    myJackets: state.myJackets,
    currentJacket: state.currentJacket
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    displayJacket: (data) => dispatch({type: 'DISPLAY_JACKET', payload: data})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(JacketPicker);