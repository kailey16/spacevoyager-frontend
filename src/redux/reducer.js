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

const rootReducer = combineReducers({
  roverPhotos: roverReducer,
  searchMedia: searchReducer,
  searchKeyword: searchKeywordReducer,
  marsWeather: marsWeatherReducer
})


export default rootReducer;