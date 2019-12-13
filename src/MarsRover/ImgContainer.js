import React from "react";
import Img from './Img'


const ImgContainer = (props) => {
  
    return (
      <div>
        {props.photos.map(photo => <Img key={photo.id} photo={photo}/>)}
      </div>
    )
 
}

export default ImgContainer