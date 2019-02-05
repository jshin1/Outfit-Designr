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
    return <img src={this.props.myBottoms[this.state.index]} />
  }

  render() {
    return (
      <div>
      <button>Previous</button>
      {this.showMyBottom()}
      <button onClick={this.rotateBottoms}>Next</button>
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return {
    myBottoms: state.myBottoms
  }
}

export default connect(mapStateToProps, null)(BottomPicker);
