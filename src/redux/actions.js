///// Mars Rover page actions
// initial fetch to display
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

///// Mars weather page actions
// fetch weather info
function fetchedWeatherInfo(info) {
  return {type: "FETCH_WEATHERINFO", payload: info}
}

export function fetchingWeatherInfo() {
  return (dispatch) => {
    fetch("http://localhost:3001/marsweather")
    .then(resp => resp.json())
    .then(info => dispatch(fetchedWeatherInfo(info)))
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