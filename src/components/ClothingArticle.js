import React, { Component } from 'react';
import {connect} from 'react-redux';

import { Card, Icon, Image, Reveal } from 'semantic-ui-react'

class ClothingArticle extends Component {

  selectClothing = (event, data) => {
    event.target.className = 'selected';
    if (event.target.id == 'hat') {
      this.props.addHats(data)
    } else if (event.target.id == 'top') {
      this.props.addTops(data)
    } else if (event.target.id == 'jacket') {
      this.props.addJackets(data)
    } else if (event.target.id == 'bottom') {
      this.props.addBottoms(data)
    } else if (event.target.id == 'shoes') {
      this.props.addShoes(data)
    }
  }

  showClothing = () => {
    if (this.props.hat) {
      return this.props.hat.map(h => {
          return (
            <div className='tile'>
              <h2 id="hat" onClick={(event) => this.selectClothing(event, h)}>{h.name}</h2>
              <img className='img-thumbnail' src={h.image_url} id="hat" />
            </div>
          )
        })
    } else if (this.props.top) {
      return this.props.top.map(t => {
          return (
            <div className='tile'>
              <h2 id="top" onClick={(event) => this.selectClothing(event, t)}>{t.name}</h2>
              <img className='img-thumbnail' src={t.image_url} />
            </div>
          )
        })
    } else if (this.props.jacket) {
      return this.props.jacket.map(j => {
          return (
            <div className='tile'>
              <h2 id="jacket" onClick={(event) => this.selectClothing(event, j)}>{j.name}</h2>
              <img className='img-thumbnail' src={j.image_url} />
            </div>
          )
        })
    } else if (this.props.bottom) {
      return this.props.bottom.map(b => {
          return (
            <div className='tile'>
              <h2 id="bottom" onClick={(event) => this.selectClothing(event, b)}>{b.name}</h2>
              <img className='img-thumbnail' src={b.image_url}/>
            </div>
          )
        })
    } else if (this.props.shoes) {
      return this.props.shoes.map(s => {
          return (
            <div className='tile'>
              <h2 id="shoes" onClick={(event) => this.selectClothing(event, s)}>{s.name}</h2>
              <img className='img-thumbnail' src={s.image_url}/>
            </div>
          )
        })
    }
  }

  render() {
    console.log(this.props);
    return this.showClothing()
  }

}

const mapStateToProps = (state) => {
  return {
    myHats: state.myHats,
    myTops: state.myTops,
    myJackets: state.myJackets,
    myBottoms: state.myBottoms,
    myShoes: state.myShoes,
    allSelected: state.allSelected
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addHats: (data) => {
      return dispatch({type: 'ADD_HATS', payload: data })},

    addTops: (data) => dispatch({type: 'ADD_TOPS', payload: data }),
    addJackets: (data) => dispatch({type: 'ADD_JACKETS', payload: data }),
    addBottoms: (data) => dispatch({type: 'ADD_BOTTOMS', payload: data }),
    addShoes: (data) => dispatch({type: 'ADD_SHOES', payload: data })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ClothingArticle);
