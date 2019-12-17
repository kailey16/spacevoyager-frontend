import React from "react";
import { Link } from 'react-router-dom'


const LibraryCard = (props) => {

  return (
    <div className="LibraryCard">
      <Link to={`/library/${props.lib.id}`}>
        <i id="libraryIcon" class="rocket icon"></i>
      </Link>
      <p>{props.lib.title}</p>
      <p>{props.lib.description}</p>
    </div>
  )

}

export default LibraryCard