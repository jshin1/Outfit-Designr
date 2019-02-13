import React, { Component } from 'react';
import {connect} from 'react-redux'
import ClothingArticle from '../components/ClothingArticle'
import {clothes} from '../apiURLs'

class HatContainer extends Component {

  showHats = () => {
    return this.props.hats.map(hat => {
      return <ClothingArticle hat={hat} />
    })
  }

  render() {
    return (
      <div className='hats'>
        {this.showHats()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    hats: state.hats
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addHats: (data) => dispatch({type: 'ADD_HATS', payload: data})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HatContainer);
