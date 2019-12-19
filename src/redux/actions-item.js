 // save item under library
function createdItem(item) {
  return {type: "ADD_ITEM", payload: item}
}

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
    .then(item => dispatch(createdItem(item)))
  }
}


// delete item from the library
function deletedItem(item) {
  return {type: "DELETE_ITEM", payload: item}
}

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
    .then(item => dispatch(deletedItem(item)))
  }
}