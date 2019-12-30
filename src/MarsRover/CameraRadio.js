import React from "react";
 

const CameraRadio = (props) => {
  
  return (
    <div className="roverCameraRadio">
      <div className="roverRadioTitle">Explore photos taken by MARS Rover Cameras</div>
      <div className="questionBox">
        <i id="roverQuestion" className="far fa-question-circle" onClick={props.modalOpen}></i><br/>
        What is MARS rover?
      </div>
      <div className="radioButtonBox">
        <p className="cameraSort">Rover Cameras : </p>
        <input className="cameraRadioOption" type="radio" id="fhaz" name="fhaz" checked={props.fhaz} onClick={props.radioClicked} />
        <label htmlFor="fhazrhaz">FHAZ<i className="far fa-question-circle" onClick={props.modalOpen}></i></label>

        <input className="cameraRadioOption" type="radio" id="rhaz" name="rhaz" checked={props.rhaz} onClick={props.radioClicked} />
        <label htmlFor="rhaz">RHAZ<i className="far fa-question-circle" onClick={props.modalOpen}></i></label>

        <input className="cameraRadioOption" type="radio" id="mast" name="mast" checked={props.mast} onClick={props.radioClicked} />
        <label htmlFor="mast">MAST<i className="far fa-question-circle" onClick={props.modalOpen}></i></label>

        <input className="cameraRadioOption" type="radio" id="chemcam" name="chemcam" checked={props.chemcam} onClick={props.radioClicked} />
        <label htmlFor="chemcam">CHEMCAM<i className="far fa-question-circle" onClick={props.modalOpen}></i></label>

        <input className="cameraRadioOption" type="radio" id="navcam" name="navcam" checked={props.navcam} onClick={props.radioClicked} />
        <label htmlFor="navcam">NAVCAM<i className="far fa-question-circle" onClick={props.modalOpen}></i></label>

        <input className="ui button" type="submit" id="showall" name="showall" onClick={props.showallClicked} value="ShowALL" />

      </div>
    </div>
  )
}


export default CameraRadio