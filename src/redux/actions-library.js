import Swal from 'sweetalert2'


// get my library list
function fetchedMyLibraries(libs) {
  return {type: "FETCHED_MY_LIBRARIES", payload: libs}
}

export function fetchingMyLibraries() {
  return (dispatch) => {
    fetch("http://localhost:3001/mylibraries", {
      headers: {
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


// library delete
function myLibraryDeleted(lib) {
  return {type: "DELETE_LIBRARY", payload: lib}
}

export function deleteLibrary(libId) {
  return (dispatch) => {
    fetch(`http://localhost:3001/libraries/${libId}`, {
      method: "DELETE",
      headers: {
        'Authorization' : `Bearer ${localStorage.getItem('jwt')}`
      }
    })
    .then(resp => resp.json())
    .then(lib => {
      dispatch(myLibraryDeleted(lib))
      Swal.fire({
        icon: 'success',
        text: `${lib.title} is successfully deleted!`
      })
    })
  } 
}


export function emptyLibraryList() {
  return {type: "EMPTY_LIBRARY_LIST"}
}

