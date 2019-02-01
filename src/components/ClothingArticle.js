import React, { Component } from 'react';

class ClothingArticle extends Component {

  showClothing = () => {
    if (this.props.hat) {
      return (
        <div>
          <h2>{this.props.hat[0].brand}</h2>
          <img src={this.props.hat[0].image_url} />
        </div>
      )
    } else if (this.props.top) {
      return (
        <div>
          <h2>{this.props.top[0].brand}</h2>
          <img src={this.props.top[0].image_url} />
        </div>
      )
    } else if (this.props.jacket) {
      return (
        <div>
          <h2>{this.props.jacket[0].brand}</h2>
          <img src={this.props.jacket[0].image_url} />
        </div>
      )
    } else if (this.props.bottom) {
      return (
        <div>
          <h2>{this.props.bottom[0].brand}</h2>
          <img src={this.props.bottom[0].image_url} />
        </div>
      )
    } else if (this.props.shoes) {
      return (
        <div>
          <h2>{this.props.shoes[0].brand}</h2>
          <img src={this.props.shoes[0].image_url} />
        </div>
      )
    }
  }

  render() {
    console.log(this.props);
    return (
      <div className='tile'>
        {this.showClothing()}
      </div>
    );
  }

}

export default ClothingArticle;
