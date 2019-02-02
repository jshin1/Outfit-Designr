import React, { Component } from 'react';
import {connect} from 'react-redux'
import ClothingArticle from '../components/ClothingArticle'
import {clothes} from '../apiURLs'

class HatContainer extends Component {

  showHats = () => {
    return this.props.hats.map(hat => {
      console.log(this.props.hats);
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

export default connect(mapStateToProps, null)(HatContainer);
