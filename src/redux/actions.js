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


///// NASA library search page actions
// initial fetch to display
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

// search keyword on change
export function searchKeywordChange(searchKeyword) {
  return {type: "SEARCH_KEYWORD_ONCHANGE", payload: searchKeyword}
}

// fetch to backend with keyword
function fetchedWithKeyword(media) {
  return {type: "FETCH_LIBRARY_WITH_KEYWORD", payload: media}
}

export function fetchingWithKeyword(keyword) {
  return (dispatch) => {
    fetch("http://localhost:3001/searchwithkeyword", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({keyword})
    })
    .then(resp => resp.json())
    .then(media => dispatch(fetchedWithKeyword(media)))
  }
}