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
    this.props.displayTop(this.props.myTops[this.state.index])
    return (
      <div className='tile'>
        <img src={this.props.myTops[this.state.index].image_url} />
      </div>
    )
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
    myTops: state.myTops,
    currentTop: state.currentTop
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    displayTop: (data) => dispatch({type: 'DISPLAY_TOP', payload: data})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TopPicker);
