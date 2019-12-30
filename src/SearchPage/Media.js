import React from "react";
import LibraryModal from '../MarsRover/LibraryModal'


class Media extends React.Component {
  state = {
    media_url: ""
  }

  componentDidMount(){
    fetch(`${this.props.media["href"]}`)
    .then(res => res.json())
    .then(data => {
      if (this.props.media["data"][0]["media_type"] === "video") {
        let mp4Url = data.find(url => {
          let splittedurl = url.split(".")
          return splittedurl[splittedurl.length-1] === "mp4" ? true : false
        })
        return this.setState({media_url: mp4Url})
      } else {return this.setState({media_url: data[0]})}
    })
  }

  openModal = () => {
    document.getElementById(this.modalId()).classList.add("active")
  }

  closeModal = () => {
    document.getElementById(this.modalId()).classList.remove("active")
  }

  modalId = () => {
    return `modal-${this.props.media["data"][0]["nasa_id"].replace(/\s/g,"")}`
  }

  render() {
    return (
      <div >
        <div className="mediaCard">
          <div className="mediaTitle">{this.props.media["data"][0]["title"]}</div>
        {this.props.media["data"][0]["media_type"] === "video" ? 
        (<div>
        <video className="mediaVedio" controls src={this.state.media_url} />
        </div>)
        : (<div>
        <img className="mediaImage" alt="libraryMedia" src={this.state.media_url} onClick={() => this.props.bigImageShow(this.state.media_url)}/>
        </div>)
        }
        <div className="mediaDescription">{this.props.media["data"][0]["description"]}</div>
        <button id="libSaveButton" className="ui inverted grey basic button" onClick={this.openModal}>Save To My Library</button>
        </div>

        <LibraryModal id={this.modalId()} closeModal={this.closeModal} photo={this.props.media}/>
      </div>
    )
  }

}


export default Media