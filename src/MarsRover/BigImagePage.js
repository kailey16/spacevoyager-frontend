import React from "react";

const BigImagePage = (props) => {

  return (
  <div className="imgShowContainer">
    <button id="backToGalleryButton" className="ui button" onClick={() => props.bigImageShow("")}>Back to Gallery</button><br></br>
    <img className="imgShow" src={props.showImgUrl} alt="big rendering" />
  </div>
  )

}

export default BigImagePage