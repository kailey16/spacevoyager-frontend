import { combineReducers } from 'redux';

const roverReducer = (state = [], action) => {
  switch(action.type) {
    case "FETCH_ROVERPHOTOS":
      return action.payload
    default:
      return state
  }
}

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

const searchKeywordReducer = (state = "", action) => {
  switch(action.type) {
    case "SEARCH_KEYWORD_ONCHANGE":
      return action.payload
    default:
      return state
  }
}

const rootReducer = combineReducers({
  roverPhotos: roverReducer,
  searchMedia: searchReducer,
  searchKeyword: searchKeywordReducer
})


export default rootReducer;