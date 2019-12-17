import React from "react";

const LibraryCard = (props) => {
  const {title, description} = props.lib
  return (
    <div className="LibraryCard">
      <i id="libraryIcon" class="rocket icon"></i>
      <p>{title}</p>
      <p>{description}</p>
    </div>
  )
}

export default LibraryCard