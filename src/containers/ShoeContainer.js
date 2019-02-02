import React, { Component } from 'react';
import {connect} from 'react-redux'
import ClothingArticle from '../components/ClothingArticle'
import {clothes} from '../apiURLs'

class BottomContainer extends Component {

  showShoes = () => {
    console.log(this.props.shoes);
    return this.props.shoes.map(shoes => {
      return <ClothingArticle shoes={shoes} />
    })
  }

  render() {
    return (
      <div className='shoes'>
        {this.showShoes()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    shoes: state.shoes
  }
}

export default connect(mapStateToProps, null)(BottomContainer);
