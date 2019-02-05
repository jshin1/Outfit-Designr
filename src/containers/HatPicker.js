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
    return <img src={this.props.myHats[this.state.index]} />
  }

  render() {
    return (
      <div>
      <button>Previous</button>
      {this.showMyHat()}
      <button onClick={this.rotateHats}>Next</button>
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return {
    myHats: state.myHats
  }
}

export default connect(mapStateToProps, null)(HatPicker);
