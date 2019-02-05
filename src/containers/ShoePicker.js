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
    this.props.displayShoes(this.props.myShoes[this.state.index])
    return <img src={this.props.myShoes[this.state.index].image_url} />
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
    myShoes: state.myShoes,
    currentShoes: state.currentShoes
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    displayShoes: (data) => dispatch({type: 'DISPLAY_SHOES', payload: data})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoePicker);
