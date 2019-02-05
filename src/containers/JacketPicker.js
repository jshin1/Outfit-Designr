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
    this.props.displayJacket(this.props.myJackets[this.state.index])
    return <img src={this.props.myJackets[this.state.index].image_url} />
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
