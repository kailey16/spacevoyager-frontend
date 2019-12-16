import React from "react";


const CameraRadio = (props) => {
  
  return (
    <div className="roverCameraRadio">
      <p className="roverRadioTitle">Explore photos taken by Mars Rover Cameras</p>
      <div className="radioButtonBox">
        <input className="cameraRadioOption" type="radio" id="fhaz" name="fhaz" checked={props.fhaz} onClick={props.radioClicked} />
        <label htmlFor="fhazrhaz">FHAZ</label>

        <input className="cameraRadioOption" type="radio" id="rhaz" name="rhaz" checked={props.rhaz} onClick={props.radioClicked} />
        <label htmlFor="rhaz">RHAZ</label>

        <input className="cameraRadioOption" type="radio" id="mast" name="mast" checked={props.mast} onClick={props.radioClicked} />
        <label htmlFor="mast">MAST</label>

        <input className="cameraRadioOption" type="radio" id="chemcam" name="chemcam" checked={props.chemcam} onClick={props.radioClicked} />
        <label htmlFor="chemcam">CHEMCAM</label>

        <input className="cameraRadioOption" type="radio" id="navcam" name="navcam" checked={props.navcam} onClick={props.radioClicked} />
        <label htmlFor="navcam">NAVCAM</label>

        <input className="ui button" type="submit" id="showall" name="showall" onClick={props.showallClicked} value="showall" />

      </div>
    </div>
  )
}


export default CameraRadio