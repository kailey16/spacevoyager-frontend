///// library and item actions
// get my library list
function fetchedMyLibraries(libs) {
  return {type: "FETCHED_MY_LIBRARIES", payload: libs}
}

export function fetchingMyLibraries() {
  return (dispatch) => {
    fetch("http://localhost:3001/mylibraries", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization' : `Bearer ${localStorage.getItem('jwt')}`
      }})
    .then(resp => resp.json())
    .then(libs => dispatch(fetchedMyLibraries(libs)))
  } 
}

// library creation
function myLibraryCreated(lib) {
  return {type: "ADD_LIBRARY", payload: lib}
}

export function createLibrary(libInfo) {
  return (dispatch) => {
    fetch("http://localhost:3001/libraries", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization' : `Bearer ${localStorage.getItem('jwt')}`
      },
      body: JSON.stringify({
        libName: libInfo.libraryName,
        libDescription: libInfo.libraryDescription
      })
    })
    .then(resp => resp.json())
    .then(lib => dispatch(myLibraryCreated(lib)))
  } 
}

// save item under library
function createdItem(item) {
  return {type: "ADD_LIBRARY", payload: item}
}

export function saveImgToLibrary(lib, img) {
  return dispatch => {
    fetch("http://localhost:3001/items", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization' : `Bearer ${localStorage.getItem('jwt')}`
      },
      body: JSON.stringify({
        library: lib,
        image: img
      })
    })
    .then(resp => resp.json())
    .then(item => dispatch(createdItem(item)))
  }
}