import { combineReducers } from 'redux';  

///// MarsRovers page
// photos array
const roverReducer = (state = [], action) => {
  switch(action.type) {
    case "FETCH_ROVERPHOTOS":
      return action.payload
    default:
      return state
  }
}  


///// SearchPage
// media array
const searchReducer = (state = [], action) => {
  switch(action.type) {
    case "FETCH_LIBRARYMEDIA":
      return action.payload
    case "FETCH_LIBRARY_WITH_KEYWORD":
      return action.payload
    default:
      return state
  }
}

// searchbar searchterm string
const searchKeywordReducer = (state = "", action) => {
  switch(action.type) {
    case "SEARCH_KEYWORD_ONCHANGE":
      return action.payload
    default:
      return state
  }
}


///// Mars weather page
// fetching info
const marsWeatherReducer = (state = {}, action) => {
  switch(action.type) {
    case "FETCH_WEATHERINFO":
      return action.payload
    default:
      return state
  }
}


///// Current user page
const currentUserReducer = (state={}, action) => {
  switch(action.type) {
    case "SET_CURRENT_USER":
      return action.payload ? action.payload : state
    default:
      return state
  }
}


///// libraries
const myLibraryReducer = (state = [], action) => {
  switch(action.type) {
    case "FETCHED_MY_LIBRARIES":
      return action.payload
    case "ADD_LIBRARY":
      return [...state, action.payload]
    case "DELETE_LIBRARY":
      let newLibsArray = state.filter(lib => lib.id !== action.payload.id)
      return newLibsArray
    case "EMPTY_LIBRARY_LIST":
      return []
    default:
      return state
  }
}

const myItemReducer = (state = [], action) => {
  switch(action.type) {
    case "FETCHED_MY_ITEMS":
      return action.payload
    case "ADD_ITEM":
      return [...state, action.payload]
    case "DELETE_ITEM":
      const newItemsArr = state.filter(item => item.id !== action.payload.id)
      return newItemsArr
    case "EMPTY_ITEM_LIST":
      return []
    default:
      return state
  }
}

const rootReducer = combineReducers({
  roverPhotos: roverReducer,
  searchMedia: searchReducer,
  searchKeyword: searchKeywordReducer,
  marsWeather: marsWeatherReducer,
  currentUser: currentUserReducer,
  myLibraries: myLibraryReducer,
  myItems: myItemReducer
})


export default rootReducer;