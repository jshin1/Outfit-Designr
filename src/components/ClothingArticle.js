import React, { Component } from 'react';

class ClothingArticle extends Component {

  showClothing = () => {
    if (this.props.hat) {
      return this.props.hat.map(h => {
          return (
            <div className='tile'>
              <h2>{h.brand}</h2>
              <img src={h.image_url} />
            </div>
          )
        })
    } else if (this.props.top) {
      return this.props.top.map(t => {
          return (
            <div className='tile'>
              <h2>{t.brand}</h2>
              <img src={t.image_url} />
            </div>
          )
        })
    } else if (this.props.jacket) {
      return this.props.jacket.map(j => {
          return (
            <div className='tile'>
              <h2>{j.brand}</h2>
              <img src={j.image_url} className='selected'/>
            </div>
          )
        })
    } else if (this.props.bottom) {
      return this.props.bottom.map(b => {
          return (
            <div className='tile'>
              <h2>{b.brand}</h2>
              <img src={b.image_url} />
            </div>
          )
        })
    } else if (this.props.shoes) {
      return this.props.shoes.map(s => {
          return (
            <div className='tile'>
              <h2>{s.brand}</h2>
              <img src={s.image_url} />
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

export default ClothingArticle;
