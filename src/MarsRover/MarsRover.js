import React from "react";
import ImgContainer from './ImgContainer'
import '../style/MarsRover.css'

class MarsRover extends React.Component {

  render() {
    return (
      <div>
        <p>Explore photos taken by Mars Rover Cameras</p>
        <ImgContainer />
      </div>
    )
  }

}

export default MarsRover