const initialState = {
  clothes: [],
  hats: [],
  tops: [],
  jackets: [],
  bottoms: [],
  shoes: [],
  currentUserId: '',
  currentUserName: '',
  userInput: ''
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
    case 'LOGIN_INPUT':
      return {...state, userInput: action.payload}
    case 'LOGIN_SUBMIT':
      return {...state, currentUserId: action.id, currentUserName: action.first_name}
    default:
      return state
  }
}

export default reducer
