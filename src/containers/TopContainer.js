import React, { Component } from 'react';
import {connect} from 'react-redux'
import ClothingArticle from '../components/ClothingArticle'
import {clothes} from '../apiURLs'

class TopContainer extends Component {

  showTops = () => {
    console.log(this.props.tops);
    return this.props.tops.map(top => {
      return <ClothingArticle top={top} />
    })
  }

  render() {
    return (
      <div className='tops'>
        {this.showTops()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    tops: state.tops
  }
}

export default connect(mapStateToProps, null)(TopContainer);
