import Swal from 'sweetalert2'

// save item under library
export function saveImgToLibrary(lib, img) {
  return dispatch => {
    fetch("http://localhost:3001/save_items", {
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
    .then(item => {
      console.log(item)
      Swal.fire({
        icon: 'success',
        text: `Successfully saved`
      })
    })
  }
}


// delete item from the library
export function deleteItemFromLib(libId, itemId) {
  return dispatch => {
    fetch("http://localhost:3001/delitemfromlib", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization' : `Bearer ${localStorage.getItem('jwt')}`
      },
      body: JSON.stringify({
        libId: libId,
        itemId: itemId
      })
    })
    .then(resp => resp.json())
    .then(item => {
      console.log(item)
      Swal.fire({
        icon: 'success',
        text: 'Successfully deleted from library!'
      })
    })
  }
}