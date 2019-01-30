import React, { Component } from 'react';

import ClothingArticle from '../components/ClothingArticle'

class MainContainer extends Component {

  awsURL = 'https://s3.us-east-2.amazonaws.com/outfitdesignr/'

  createURL = () => {
    
  }

  render() {
    return (
      <div>
        <ClothingArticle />
      </div>
    );
  }

}

export default MainContainer;
