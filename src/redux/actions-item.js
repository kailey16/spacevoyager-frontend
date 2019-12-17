// fetch my items
function fetchedMyItems(items) {
  return {type: "FETCHED_MY_ITEMS", payload: items}
}

export function fetchingMyItems() {
  return (dispatch) => {
    fetch("http://localhost:3001/myitems", {
      headers: {
        'Authorization' : `Bearer ${localStorage.getItem('jwt')}`
      }})
    .then(resp => resp.json())
    .then(items => {
      dispatch(fetchedMyItems(items))})
  } 
}