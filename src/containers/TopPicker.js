import React, { Component } from 'react';
import {connect} from 'react-redux'

class TopPicker extends Component {

  state = {
    index: 0
  }

  rotateTops = () => {
    this.setState(prevState => ({
      index: prevState.index + 1
    }))
  }

  showMyTop = () => {
    return <img src={this.props.myTops[this.state.index]} />
  }

  render() {
    return (
      <div>
      <button>Previous</button>
      {this.showMyTop()}
      <button onClick={this.rotateTops}>Next</button>
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return {
    myTops: state.myTops
  }
}

export default connect(mapStateToProps, null)(TopPicker);
