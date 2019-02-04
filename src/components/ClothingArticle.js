import React, { Component } from 'react';
import {connect} from 'react-redux';

class ClothingArticle extends Component {

  selectClothing = (event) => {
    event.target.className = 'selected';
    if (event.target.id == 'hat') {
      this.props.addHats(event)
    }
  }

  showClothing = () => {
    if (this.props.hat) {
      return this.props.hat.map(h => {
          return (
            <div className='tile'>
              <h2>{h.brand}</h2>
              <img src={h.image_url} id="hat" onClick={(event) => this.selectClothing(event)}/>
            </div>
          )
        })
    } else if (this.props.top) {
      return this.props.top.map(t => {
          return (
            <div className='tile'>
              <h2>{t.brand}</h2>
              <img src={t.image_url} id="top" onClick={(event) => this.selectClothing(event)} />
            </div>
          )
        })
    } else if (this.props.jacket) {
      return this.props.jacket.map(j => {
          return (
            <div className='tile'>
              <h2>{j.brand}</h2>
              <img src={j.image_url} id="jacket" onClick={(event) => this.selectClothing(event)} className='selected'/>
            </div>
          )
        })
    } else if (this.props.bottom) {
      return this.props.bottom.map(b => {
          return (
            <div className='tile'>
              <h2>{b.brand}</h2>
              <img src={b.image_url} id="bottom" onClick={(event) => this.selectClothing(event)}/>
            </div>
          )
        })
    } else if (this.props.shoes) {
      return this.props.shoes.map(s => {
          return (
            <div className='tile'>
              <h2>{s.brand}</h2>
              <img src={s.image_url} id="shoes" onClick={(event) => this.selectClothing(event)}/>
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
    myShoes: state.myShoes
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addHats: (event) => {
      console.log(event.target.src)
      return dispatch({type: 'ADD_HATS', payload: event.target.src })},

    addTops: (event) => dispatch({type: 'ADD_TOPS', payload: event.target.src }),
    addJackets: (event) => dispatch({type: 'ADD_JACKETS', payload: event.target.src }),
    addBottoms: (event) => dispatch({type: 'ADD_BOTTOMS', payload: event.target.src }),
    addShoes: (event) => dispatch({type: 'ADD_SHOES', payload: event.target.src })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ClothingArticle);
