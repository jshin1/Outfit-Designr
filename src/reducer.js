const initialState = {
  clothes: [],
  hats: [],
  tops: [],
  jackets: [],
  bottoms: [],
  shoes: []
}

function reducer(state=initialState, action) {
  switch(action.type) {
    case 'FETCH_HATS':
      return {...state, hats: [...state.hats, action.payload]}
    case 'FETCH_TOPS':
      return {...state, tops: [...state.tops, action.payload]}
    case 'FETCH_JACKETS':
      return {...state, jackets: [...state.jackets, action.payload]}
    case 'FETCH_BOTTOMS':
      return {...state, bottoms: [...state.bottoms, action.payload]}
    case 'FETCH_SHOES':
      return {...state, shoes: [action.payload]}
    default:
      return state
  }
}

export default reducer
