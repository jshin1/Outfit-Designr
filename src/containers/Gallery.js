import React, { Component } from 'react';
import { connect } from 'react-redux'

class Gallery extends Component {

  deleteOutfit = () => {
    fetch('http://localhost:3000/api/v1/outfits/2', {
        method: 'DELETE'
      })
    }

  showOutfits = () => {
    return this.props.outfits.map(outfit => {
      return (
        <div className='outfit'>
          <button type='submit' onClick={this.deleteOutfit}>Delete Outfit</button>
          {outfit.map(clothing => {
            return(
              <div className='tile'>
                <img src={clothing.image_url} />
              </div>
            )
          })}
        </div>
      )
    })
  }

  render() {
    return (
      <div>
        {this.showOutfits()}
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return {
    outfits: state.outfits
  }
}

export default connect(mapStateToProps, null)(Gallery);
