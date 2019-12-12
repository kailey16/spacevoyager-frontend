// Mars Rover page actions

function fetchedRoverPhotos(photos) {
  return {type: "FETCH_ROVERPHOTOS", payload: photos}
}

export function fetchingRoverPhotos() {
  return (dispatch) => {
    fetch("http://localhost:3001/marsrover")
    .then(resp => resp.json())
    .then(photos => dispatch(fetchedRoverPhotos(photos)))
  } 
}

// NASA library search page actions

function fetchedMedia(media) {
  return {type: "FETCH_LIBRARYMEDIA", payload: media}
}

export function fetchingMedia() {
  return (dispatch) => {
    fetch("http://localhost:3001/nasalibrary")
    .then(resp => resp.json())
    .then(media => dispatch(fetchedMedia(media)))
  } 
}

export function searchKeywordOnchange(searchKeyword) {
  return {type: "SEARCH_KEYWORD_ONCHANGE", payload: searchKeyword}
}