import React from "react";


const CameraRadio = (props) => {
  
  return (
    <div>
      <p>Explore photos taken by Mars Rover Cameras</p>
      <div>
        <input type="radio" id="fhazrhaz" name="fhazrhaz" checked={props.fhazrhaz} onClick={props.radioClicked} />
        <label htmlFor="fhazrhaz">FHAZ/RHAZ</label>

        <input type="radio" id="mast" name="mast" checked={props.mast} onClick={props.radioClicked} />
        <label htmlFor="mast">MAST</label>

        <input type="radio" id="chemcam" name="chemcam" checked={props.chemcam} onClick={props.radioClicked} />
        <label htmlFor="chemcam">CHEMCAM</label>

        <input type="radio" id="navcam" name="navcam" checked={props.navcam} onClick={props.radioClicked} />
        <label htmlFor="navcam">NAVCAM</label>
      </div>
    </div>
  )
}


export default CameraRadio