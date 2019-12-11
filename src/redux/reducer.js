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
    default:
      return state
  }
}

const rootReducer = combineReducers({
  roverPhotos: roverReducer,
  searchMedia: searchReducer
})


export default rootReducer;