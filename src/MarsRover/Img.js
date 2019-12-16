import React from "react";

const Img = (props) => {
  return ( 
    <div className="roverImgCard">
      <img className="roverImg" src={props.photo["img_src"]} alt="roverImg" onClick={() => props.bigImageShow(props.photo["img_src"])} />
      <button id="saveToLibButton" className="ui button">Save To My Library</button>
    </div>
  )
}

export default Img