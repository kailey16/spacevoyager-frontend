import React from "react";


const CameraRadio = (props) => {
  
  return (
    <div>
      <p>Explore photos taken by Mars Rover Cameras</p>
      <div>
        <input type="radio" id="fhaz" name="fhaz" checked={props.fhaz} onClick={props.radioClicked} />
        <label htmlFor="fhazrhaz">FHAZ</label>

        <input type="radio" id="rhaz" name="rhaz" checked={props.rhaz} onClick={props.radioClicked} />
        <label htmlFor="rhaz">RHAZ</label>

        <input type="radio" id="mast" name="mast" checked={props.mast} onClick={props.radioClicked} />
        <label htmlFor="mast">MAST</label>

        <input type="radio" id="chemcam" name="chemcam" checked={props.chemcam} onClick={props.radioClicked} />
        <label htmlFor="chemcam">CHEMCAM</label>

        <input type="radio" id="navcam" name="navcam" checked={props.navcam} onClick={props.radioClicked} />
        <label htmlFor="navcam">NAVCAM</label>

        <input type="submit" id="showall" name="showall" onClick={props.showallClicked} value="showall" />

      </div>
    </div>
  )
}


export default CameraRadio