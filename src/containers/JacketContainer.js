import React, { Component } from 'react';
import {connect} from 'react-redux'
import ClothingArticle from '../components/ClothingArticle'
import {clothes} from '../apiURLs'

class JacketContainer extends Component {

  showJackets = () => {
    console.log(this.props.jackets);
    return this.props.jackets.map(jacket => {
      return <ClothingArticle jacket={jacket} />
    })
  }

  render() {
    return (
      <div className='jackets'>
        {this.showJackets()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    jackets: state.jackets
  }
}

export default connect(mapStateToProps, null)(JacketContainer);
