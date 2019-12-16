import React from "react";

const Img = (props) => {
  return (
    <div>
      <img className="roverImg" src={props.photo["img_src"]} alt="roverImg" onClick={() => props.bigImageShow(props.photo["img_src"])} />
    </div>
  )
}

export default Img