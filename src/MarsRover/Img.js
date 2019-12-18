import React from "react";
import { connect } from 'react-redux';
import { saveImgToLibrary } from '../redux/actions-item'

class Img extends React.Component {

  openModal = () => {
    document.querySelector(`#libListModal-${this.props.photo.id}`).classList.add("active")
  }

  closeModal = () => {
    document.querySelector(`#libListModal-${this.props.photo.id}`).classList.remove("active")
  }

  saveImgUnderLib = (lib) => {
    let img = this.props.photo
    this.props.saveImgToLibrary(lib, img)
  }

  render() {
    return ( 
      <div className="roverImgCard">
        <img className="roverImg" src={this.props.photo["img_src"]} alt="roverImg" onClick={() => this.props.bigImageShow(this.props.photo["img_src"])} />
        <button id="saveToLibButton" className="ui button" onClick={this.openModal}>Save To My Library</button>
        
    {/* modal */}
      <div id={`libListModal-${this.props.photo.id}`} className="ui mini modal">
        <div className="header">
          My Libraries <i id="modalCloseButton" className="close icon" onClick={this.closeModal}></i>
        </div>
        <div className="content">
          {this.props.myLibraries.map(lib => <div key={lib.id} className="modalLibTitle" onClick={() => this.saveImgUnderLib(lib)}>{lib.title}</div>)}
        </div>
      </div>

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {myLibraries: state.myLibraries}
}

const mapDispatchToProps = (dispatch) => {
  return {saveImgToLibrary: (lib, img) => dispatch(saveImgToLibrary(lib, img))}
}

export default connect(mapStateToProps, mapDispatchToProps)(Img)