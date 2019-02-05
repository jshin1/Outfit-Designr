const initialState = {
  hats: [],
  tops: [],
  jackets: [],
  bottoms: [],
  shoes: [],
  myHats: [],
  myTops: [],
  myJackets: [],
  myBottoms: [],
  myShoes: [],
  currentHat: '',
  currentTop: '',
  currentJacket: '',
  currentBottom: '',
  currentShoes: '',
  currentUserId: null,
  currentUserName: null,
  userInput: ''
}

function reducer(state=initialState, action) {
  switch(action.type) {
    case 'FETCH_HATS':
      return {...state, hats: [action.payload]}
    case 'FETCH_TOPS':
      return {...state, tops: [action.payload]}
    case 'FETCH_JACKETS':
      return {...state, jackets: [action.payload]}
    case 'FETCH_BOTTOMS':
      return {...state, bottoms: [action.payload]}
    case 'FETCH_SHOES':
      return {...state, shoes: [action.payload]}
    case 'ADD_HATS':
      return {...state, myHats: [...state.myHats, action.payload]}
    case 'ADD_TOPS':
      return {...state, myTops: [...state.myTops, action.payload]}
    case 'ADD_JACKETS':
      return {...state, myJackets: [...state.myJackets, action.payload]}
    case 'ADD_BOTTOMS':
      return {...state, myBottoms: [...state.myBottoms, action.payload]}
    case 'ADD_SHOES':
      return {...state, myShoes: [...state.myShoes, action.payload]}

    case 'DISPLAY_HAT':
      return {...state, currentHat: action.payload}
    case 'DISPLAY_TOP':
      return {...state, currentTop: action.payload}
    case 'DISPLAY_JACKET':
      return {...state, currentJacket: action.payload}
    case 'DISPLAY_BOTTOM':
      return {...state, currentBottom: action.payload}
    case 'DISPLAY_SHOES':
      return {...state, currentShoes: action.payload}

    case 'LOGIN_INPUT':
      return {...state, userInput: action.payload}
    case 'LOGIN_SUBMIT':
      return {...state, currentUserId: action.id, currentUserName: action.name}
    case 'LOG_OUT':
      return {...state, currentUserId: action.payload, currentUserName: action.payload, userInput:action.payload}
    default:
      return state
  }
}

export default reducer
