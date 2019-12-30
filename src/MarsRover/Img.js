import React from "react";
import LibraryModal from './LibraryModal'


class Img extends React.Component {

  openModal = () => {
    document.querySelector(`#libListModal-${this.props.photo.id}`).classList.add("active")
  }

  closeModal = () => {
    document.querySelector(`#libListModal-${this.props.photo.id}`).classList.remove("active")
  }

  render() {
    return ( 
      <div className="roverImgCard">
        <img className="roverImg" src={this.props.photo["img_src"]} alt="roverImg" onClick={() => this.props.bigImageShow(this.props.photo["img_src"])} />
        <button id="saveToLibButton" className="ui inverted grey basic button" onClick={this.openModal}>Save To My Library</button>
        
        <LibraryModal id={`libListModal-${this.props.photo.id}`} closeModal={this.closeModal} photo={this.props.photo}/>
      </div>
    )
  }
}

export default Img