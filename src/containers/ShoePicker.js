import React, { Component } from 'react';
import {connect} from 'react-redux'

class ShoePicker extends Component {

  state = {
    index: 0
  }

  rotateShoes = () => {
    this.setState(prevState => ({
      index: prevState.index + 1
    }))
  }

  showMyShoes = () => {
    return <img src={this.props.myShoes[this.state.index]} />
  }

  render() {
    return (
      <div>
      <button>Previous</button>
      {this.showMyShoes()}
      <button onClick={this.rotateShoes}>Next</button>
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return {
    myShoes: state.myShoes
  }
}

export default connect(mapStateToProps, null)(ShoePicker);
