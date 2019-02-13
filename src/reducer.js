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
  userInput: '',

  colors: [],
  schemeColors: ['magenta', 'red magenta', 'red', 'red orange', 'yellow', 'yellow green', 'green', 'blue green', 'cyan', 'blue', 'violet blue', 'violet'],
  colorScheme: 'complementary',
  primaryColor: '0',

  outfits: [],
  currentOutfit: [],

  hatIndex: 0,
  topIndex: 0,
  jacketIndex: 0,
  bottomIndex: 0,
  shoesIndex: 0
}

function reducer(state=initialState, action) {
  switch(action.type) {

    case 'INCREASE_HAT_INDEX':
      return {...state, hatIndex: state.hatIndex + 1}
    case 'DECREASE_HAT_INDEX':
      return {...state, hatIndex: state.hatIndex - 1}

    case 'INCREASE_TOP_INDEX':
      return {...state, topIndex: state.topIndex + 1}
    case 'DECREASE_TOP_INDEX':
      return {...state, topIndex: state.topIndex - 1}

    case 'INCREASE_JACKET_INDEX':
      return {...state, jacketIndex: state.jacketIndex + 1}
    case 'DECREASE_JACKET_INDEX':
      return {...state, jacketIndex: state.jacketIndex - 1}

    case 'INCREASE_BOTTOM_INDEX':
      return {...state, bottomIndex: state.bottomIndex + 1}
    case 'DECREASE_BOTTOM_INDEX':
      return {...state, bottomIndex: state.bottomIndex - 1}

    case 'INCREASE_SHOES_INDEX':
      return {...state, shoesIndex: state.shoesIndex + 1}
    case 'DECREASE_SHOES_INDEX':
      return {...state, shoesIndex: state.shoesIndex - 1}

    case 'RESET_INDEX':
      return {...state, hatIndex: action.payload, topIndex: action.payload, jacketIndex: action.payload, bottomIndex: action.payload, shoesIndex: action.payload}

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

    case 'SET_COLORS':
      return {...state, colors: [...state.colors, action.payload]}

    case 'FETCH_OUTFITS':
      return {...state, outfits: [...state.outfits, action.payload]}
    case 'SET_OUTFIT':
      return {...state, currentOutfit: action.payload}
    case 'SET_PRIMARY_COLOR':
      return {...state, primaryColor: action.payload}
    case 'CLEAR_CLOTHES':
      return {...state, myHats: [], myTops: [], myJackets: [], myBottoms: [], myShoes: []}

    case 'SET_COLOR_SCHEME':
      return {...state, colorScheme: action.payload}

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
