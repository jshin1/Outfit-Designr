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
    this.props.displayBottom(this.props.myBottoms[this.state.index])
    return <img src={this.props.myBottoms[this.state.index].image_url} />
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
    myBottoms: state.myBottoms,
    currentBottom: state.currentBottom
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    displayBottom: (data) => dispatch({type: 'DISPLAY_BOTTOM', payload: data})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BottomPicker);
