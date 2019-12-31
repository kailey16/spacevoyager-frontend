import { trackPromise } from 'react-promise-tracker'
import { fetchingMyLibraries, emptyLibraryList } from './actions-library'
import Swal from 'sweetalert2'


///// Mars Rover page actions 
// initial fetch (sol 1000)
function fetchedRoverPhotos(photos) {
  return {type: "FETCH_ROVERPHOTOS", payload: photos}
}

export function fetchingRoverPhotos() {
  return (dispatch) => {
    trackPromise(
      fetch("http://localhost:3001/marsrover")
      .then(resp => resp.json())
      .then(photos => dispatch(fetchedRoverPhotos(photos)))
    )
  } 
}

//fetch with earth date
export function fetchingRoverPhotosWithDate(date) {
  return (dispatch) => {
    trackPromise(
      fetch("http://localhost:3001/marsrover/date", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({date})
      })
      .then(resp => resp.json())
      .then(photos => {
        console.log(photos)
        dispatch(fetchedRoverPhotos(photos))
        }
      )
    )
  } 
}



///// Mars weather page actions
// fetch weather info
function fetchedWeatherInfo(info) {
  return {type: "FETCH_WEATHERINFO", payload: info}
}

export function fetchingWeatherInfo() {
  return (dispatch) => {
    trackPromise(
      fetch("http://localhost:3001/marsweather")
      .then(resp => resp.json())
      .then(info => dispatch(fetchedWeatherInfo(info)))
    )
  } 
}



///// NASA library search page actions
// initial fetch to display
function fetchedMedia(media) {
  return {type: "FETCH_LIBRARYMEDIA", payload: media}
}

export function fetchingMedia() { 
  return (dispatch) => {
    trackPromise(
      fetch("http://localhost:3001/nasalibrary")
      .then(resp => resp.json())
      .then(media => dispatch(fetchedMedia(media)))
    )
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
    trackPromise(
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
    )
  }
}



///// Login/Signup page actions
function setCurrentUser(user) {
  return {type: "SET_CURRENT_USER", payload: user}
}

// login
export function loginRequest(loginInfo) {
  return (dispatch) => {
    fetch('http://localhost:3001/api/v1/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }, 
      body: JSON.stringify({
        user: {
          username: loginInfo.username,
          password: loginInfo.password
        }
      })
    })
    .then(res => res.json())
    .then(data => {
      if (data.user) {
        localStorage.setItem("jwt", data.jwt)
        dispatch(setCurrentUser(data.user))
        dispatch(fetchingMyLibraries())
      } else {
        Swal.fire({
          icon: 'error',
          text: `${data.message}`
        })
      }
    })
  }
}

// singup
export function signupRequest(signupInfo) {
  return (dispatch) => {
    fetch('http://localhost:3001/api/v1/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
      user: {
        username: signupInfo.username,
        password: signupInfo.password,
        email: signupInfo.email
        }
      })
    })
    .then(res => res.json())
    .then(data => {
      if (data.user) {
        localStorage.setItem("jwt", data.jwt)
        dispatch(setCurrentUser(data.user))
        dispatch(fetchingMyLibraries())
      } else {
        Swal.fire({
          icon: 'error',
          text: `${data.error.join(", ")}`
        })
      }
    })
  }
}

// get current user
export function getCurrentUser() {
  return (dispatch) => {
    if(localStorage.getItem('jwt')){
      fetch('http://localhost:3001/api/v1/profile', {
        headers: {
          "Authorization" : `Bearer ${localStorage.getItem('jwt')}`
        }
      })
      .then(res => res.json())
      .then(data => {
        dispatch(setCurrentUser(data.user))
        dispatch(fetchingMyLibraries())
      })
    }
  }
}

// log out
export function logOut() {
  return (dispatch) => {
    localStorage.clear()
    dispatch(setCurrentUser({}))
    dispatch(emptyLibraryList())
  }
}

