import React from "react";
import ImgContainer from './ImgContainer'
import CameraRadio from './CameraRadio'
import '../style/MarsRover.css'

class MarsRover extends React.Component {
  
  state = {
    fhazrhaz: false,
    mast: false,
    chemcam: false,
    navcam: false
  }

  radioClicked = (e) => {
    const camname = e.target.name
    this.setState({[`${e.target.name}`]: !this.state[camname]})
  }

  render() {
    return (
      <div>
        <CameraRadio fhazrhaz={this.state.fhazrhaz} mast={this.state.mast} chemcam={this.state.chemcam} navcam={this.state.navcam} radioClicked={this.radioClicked} />
        <ImgContainer />
      </div>
    )
  }

}

export default MarsRover