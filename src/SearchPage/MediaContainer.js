import React from "react";
import Media from './Media'

const MediaContainer = (props) => {
  return (
    <div>
      {props.media.map(m => <Media media={m} />)}
    </div>
  )
}

export default MediaContainer