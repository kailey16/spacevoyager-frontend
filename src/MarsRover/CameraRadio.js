import React from "react";
 

class CameraRadio extends React.Component {
  
  openCamModal = (e) => {
    document.getElementById(`${e.target.parentElement.htmlFor}Modal`).classList.add("active")
  }

  closeCamModal = (e) => {
    document.getElementById(`${e.target.parentElement.htmlFor}Modal`).classList.remove("active")
  }

  render() {

    return (
      <div className="roverCameraRadio">
        <div className="roverRadioTitle animated zoomIn">Explore photos taken by MARS Rover Cameras</div>
        <div className="questionBox animated rotateInDownLeft delay-2s">
          <i id="roverQuestion" className="far fa-question-circle" onClick={this.props.modalOpen}></i><br/>
          What is MARS rover?
        </div>
  
        <div className="radioButtonBox animated zoomIn delay-1s">
          <p className="cameraSort">Rover Cameras : </p>
          
          {/* FHAZ */}
          <input className="cameraRadioOption" type="radio" id="fhaz" name="camera" checked={this.props.camera === "fhaz" ? true : false} onChange={this.props.radioClicked} />
          <label className="radioLabel" htmlFor="fhaz">FHAZ<i className="camQuestion far fa-question-circle" onMouseEnter={this.openCamModal} onMouseOut={this.closeCamModal}></i></label>

          <div id="fhazModal" className="ui tiny modal radioModal">
            <div className="content radioModalContent">
              <p>Front Hazard Avoidance Camera</p>
            </div>
          </div>
  

          {/* RHAZ */}
          <input className="cameraRadioOption" type="radio" id="rhaz" name="camera" checked={this.props.camera === "rhaz" ? true : false} onChange={this.props.radioClicked} />
          <label className="radioLabel" htmlFor="rhaz">RHAZ<i className="camQuestion far fa-question-circle" onMouseEnter={this.openCamModal} onMouseOut={this.closeCamModal}></i></label>

          <div id="rhazModal" className="ui tiny modal radioModal">
            <div className="content radioModalContent">
              <p>Rear Hazard Avoidance Camera</p>
            </div>
          </div>
          

          {/* MAST */}
          <input className="cameraRadioOption" type="radio" id="mast" name="camera" checked={this.props.camera === "mast" ? true : false} onChange={this.props.radioClicked} />
          <label className="radioLabel" htmlFor="mast">MAST<i className="camQuestion far fa-question-circle" onMouseEnter={this.openCamModal} onMouseOut={this.closeCamModal}></i></label>

          <div id="mastModal" className="ui tiny modal radioModal">
            <div className="content radioModalContent">
              <p>Mast Camera : takes color images and color video footage of the Martian terrain</p>
            </div>
          </div>
  

          {/* CHEMCAM */}
          <input className="cameraRadioOption" type="radio" id="chemcam" name="camera" checked={this.props.camera === "chemcam" ? true : false} onChange={this.props.radioClicked} />
          <label className="radioLabel" htmlFor="chemcam">CHEMCAM<i className="camQuestion far fa-question-circle" onMouseEnter={this.openCamModal} onMouseOut={this.closeCamModal}></i></label>

          <div id="chemcamModal" className="ui tiny modal radioModal">
            <div className="content radioModalContent">
              <p>Chemistry and Camera Complex : analyzes the chemical composition of rocks and soil</p>
            </div>
          </div>
  

          {/* NAVCAM */}
          <input className="cameraRadioOption" type="radio" id="navcam" name="camera" checked={this.props.camera === "navcam" ? true : false} onChange={this.props.radioClicked} />
          <label className="radioLabel" htmlFor="navcam">NAVCAM<i className="camQuestion far fa-question-circle" onMouseEnter={this.openCamModal} onMouseOut={this.closeCamModal}></i></label>

          <div id="navcamModal" className="ui tiny modal radioModal">
            <div className="content radioModalContent">
              <p>Navigation Camera</p>
            </div>
          </div>


          {/* SHOWALL button */}
          <input className="ui button" type="submit" id="showall" name="showall" onClick={this.props.showallClicked} value="ShowALL" />
  
        </div>
      </div>
    )
  }
}


export default CameraRadio