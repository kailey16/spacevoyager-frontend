import React from "react";
import Media from './Media'

const MediaContainer = (props) => {
  return (
    <div className="MediaContainer">
      {props.media.map(m => <Media key={m.href} media={m} />)}
    </div>
  )
}

export default MediaContainer