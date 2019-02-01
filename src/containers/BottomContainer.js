import React, { Component } from 'react';
import {connect} from 'react-redux'
import ClothingArticle from '../components/ClothingArticle'
import {clothes} from '../apiURLs'

class BottomContainer extends Component {

  showBottoms = () => {
    console.log(this.props.bottoms);
    return this.props.bottoms.map(bottom => {
      return <ClothingArticle bottom={bottom} />
    })
  }

  render() {
    return (
      <div>
        {this.showBottoms()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    bottoms: state.bottoms
  }
}

export default connect(mapStateToProps, null)(BottomContainer);
