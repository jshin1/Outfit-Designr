import React, { Component } from 'react';
import { connect } from 'react-redux'

import { Card, Icon, Segment, Header } from 'semantic-ui-react'

class Gallery extends Component {

  componentDidMount() {
    fetch('http://localhost:3000/api/v1/outfits')
    .then(res => res.json())
    .then(data => {
      this.props.loadOutfits(data)
    })
  }

  deleteOutfit = (number) => {
    fetch(`http://localhost:3000/api/v1/outfits/${number}`, {
        method: 'DELETE'
      })
    }

  showOutfits = () => {
    return this.props.outfits.map(outfit => {
      return (
        <div className='outfit'>
          <Icon name='trash alternate' size='large' onClick={() => this.deleteOutfit(outfit.id)} />
          {outfit.clothes.map(clothing => {
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
    if (this.props.currentUserName === null) {
      return(
        <div>whaaaaaa</div>
      )
    } else {
      return (
        <Segment className='cheese' id='gallery'>
          <Header as='h2' className='textstyle'>GALLERY</Header>
          {this.props.outfits.length > 0 ? this.showOutfits() : <h4>no outfits found</h4>}
        </Segment>
      )
    }
  }

}

const mapStateToProps = (state) => {
  return {
    outfits: state.outfits,
    currentUserName: state.currentUserName
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadOutfits: (data) => dispatch({type: 'LOAD_OUTFITS', payload: data})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Gallery);
