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

  showMyTop = () => {
    return <img src={this.props.myJackets[this.state.index]} />
  }

  render() {
    return (
      <div>
      <button>Previous</button>
      {this.showMyTop()}
      <button onClick={this.rotateJackets}>Next</button>
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return {
    myJackets: state.myJackets
  }
}

export default connect(mapStateToProps, null)(JacketPicker);
