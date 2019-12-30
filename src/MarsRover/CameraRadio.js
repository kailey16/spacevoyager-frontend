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
        <div className="roverRadioTitle">Explore photos taken by MARS Rover Cameras</div>
        <div className="questionBox">
          <i id="roverQuestion" className="far fa-question-circle" onClick={this.props.modalOpen}></i><br/>
          What is MARS rover?
        </div>
  
        <div className="radioButtonBox">
          <p className="cameraSort">Rover Cameras : </p>
          

          {/* FHAZ */}
          <input className="cameraRadioOption" type="radio" id="fhaz" name="fhaz" checked={this.props.fhaz} onClick={this.props.radioClicked} />
          <label htmlFor="fhaz">FHAZ<i className="camQuestion far fa-question-circle" onMouseEnter={this.openCamModal} onMouseOut={this.closeCamModal}></i></label>

          <div id="fhazModal" className="ui tiny modal radioModal">
            <div className="content radioModalContent">
              <p>Front Hazard Avoidance Camera</p>
            </div>
          </div>
  

          {/* RHAZ */}
          <input className="cameraRadioOption" type="radio" id="rhaz" name="rhaz" checked={this.props.rhaz} onClick={this.props.radioClicked} />
          <label htmlFor="rhaz">RHAZ<i className="camQuestion far fa-question-circle" onMouseEnter={this.openCamModal} onMouseOut={this.closeCamModal}></i></label>

          <div id="rhazModal" className="ui tiny modal radioModal">
            <div className="content radioModalContent">
              <p>Rear Hazard Avoidance Camera</p>
            </div>
          </div>
          

          {/* MAST */}
          <input className="cameraRadioOption" type="radio" id="mast" name="mast" checked={this.props.mast} onClick={this.props.radioClicked} />
          <label htmlFor="mast">MAST<i className="camQuestion far fa-question-circle" onMouseEnter={this.openCamModal} onMouseOut={this.closeCamModal}></i></label>

          <div id="mastModal" className="ui tiny modal radioModal">
            <div className="content radioModalContent">
              <p>Mast Camera : takes color images and color video footage of the Martian terrain</p>
            </div>
          </div>
  

          {/* CHEMCAM */}
          <input className="cameraRadioOption" type="radio" id="chemcam" name="chemcam" checked={this.props.chemcam} onClick={this.props.radioClicked} />
          <label htmlFor="chemcam">CHEMCAM<i className="camQuestion far fa-question-circle" onMouseEnter={this.openCamModal} onMouseOut={this.closeCamModal}></i></label>

          <div id="chemcamModal" className="ui tiny modal radioModal">
            <div className="content radioModalContent">
              <p>Chemistry and Camera Complex : analyzes the chemical composition of rocks and soil</p>
            </div>
          </div>
  

          {/* NAVCAM */}
          <input className="cameraRadioOption" type="radio" id="navcam" name="navcam" checked={this.props.navcam} onClick={this.props.radioClicked} />
          <label htmlFor="navcam">NAVCAM<i className="camQuestion far fa-question-circle" onMouseEnter={this.openCamModal} onMouseOut={this.closeCamModal}></i></label>

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