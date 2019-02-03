import React, { Component } from 'react';

import HatContainer from './HatContainer'
import TopContainer from './TopContainer'
import JacketContainer from './JacketContainer'
import BottomContainer from './BottomContainer'
import ShoeContainer from './ShoeContainer'
import ClothingArticle from '../components/ClothingArticle'
import {connect} from 'react-redux'
import {clothes} from '../apiURLs'
import '../App.css';

class MainContainer extends Component {

  componentDidMount() {
    fetch('http://localhost:3000/api/v1/categories')
    .then(res => res.json())
    .then(data => {
      console.log(data);
      data.map(d => {
        switch(d.name) {
          case 'hat':
            return this.props.fetchHats(d.clothes)
          case 'top':
            return this.props.fetchTops(d.clothes)
          case 'jacket':
            return this.props.fetchJackets(d.clothes)
          case 'bottom':
            return this.props.fetchBottoms(d.clothes)
          case 'shoes':
            return this.props.fetchShoes(d.clothes)
        }
      })
    })
  }

  render() {
    return (
      <div className='container'>
        <HatContainer/>
        <TopContainer/>
        <JacketContainer/>
        <BottomContainer/>
        <ShoeContainer/>
      </div>
    );
  }
}
//get rid of
function mapStateToProps(state) {
  return {
    hats: state.hats,
    tops: state.tops,
    jackets: state.jackets,
    bottoms: state.bottoms,
    shoes: state.shoes
  }
}
//get rid of
function mapDispatchToProps(dispatch) {
  return {
    fetchClothes: (data) => dispatch({type: 'FETCH_CLOTHES', payload: data}),
    fetchHats: (data) => dispatch({type: 'FETCH_HATS', payload: data}),
    fetchTops: (data) => dispatch({type: 'FETCH_TOPS', payload: data}),
    fetchJackets: (data) => dispatch({type: 'FETCH_JACKETS', payload: data}),
    fetchBottoms: (data) => dispatch({type: 'FETCH_BOTTOMS', payload: data}),
    fetchShoes: (data) => dispatch({type: 'FETCH_SHOES', payload: data}),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);