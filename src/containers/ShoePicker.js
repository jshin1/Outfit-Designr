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
    if (this.props.myShoes.length > 0) {
      this.props.displayShoes(this.props.myShoes[this.state.index])
      return (
        <div className='tile'>
          <img src={this.props.myShoes[this.state.index].image_url} />
        </div>
      )
    }
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
