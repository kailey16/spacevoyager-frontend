import React from "react";
import LibraryModal from '../MarsRover/LibraryModal'
import { connect } from 'react-redux';
import Swal from 'sweetalert2'


class Media extends React.Component {
  state = {
    media_url: ""
  }

  componentDidMount(){
    const type = this.props.media["data"][0]["media_type"];

    fetch(`${this.props.media["href"]}`)
    .then(res => res.json())
    .then(data => {
      if (type === "video") {
        let mp4Url = data.find(url => {
          let splittedurl = url.split(".")
          return splittedurl[splittedurl.length-1] === "mp4" ? true : false
        })
        return this.setState({media_url: mp4Url})
      } else if (type === "audio") {
        let mp3Url = data.find(url => {
          let splittedurl = url.split(".")
          return splittedurl[splittedurl.length-1] === "mp3" ? true : false
        })
        return this.setState({media_url: mp3Url})
      } else {
        return this.setState({media_url: data[0]})
      }
    })
  }

  openModal = () => {
    this.props.currentUser.username ?
    (document.getElementById(this.modalId()).classList.add("active"))
    : (Swal.fire({
      icon: 'error',
      text: "Please log in"
    }))
  }

  closeModal = () => {
    document.getElementById(this.modalId()).classList.remove("active")
  }

  modalId = () => {
    return `modal-${this.props.media["data"][0]["nasa_id"].replace(/\s/g,"")}`
  }

  render() {

    const type = this.props.media["data"][0]["media_type"];
    let mediaTag;
    if (type === "video") {
      mediaTag = <div><video className="mediaVedio" controls src={this.state.media_url} /></div>
    } else if (type === "audio") {
      mediaTag = <div className="mediaAudio"><audio className="audioPlayer" controls src={this.state.media_url} type="audio/mp3" /></div>
    } else {
      mediaTag = <div><img className="mediaImage" alt="libraryMedia" src={this.state.media_url} onClick={() => this.props.bigImageShow(this.state.media_url)}/></div>
    }

    return (
      <div >
        <div className="mediaCard">
          <div className="mediaTitle">{this.props.media["data"][0]["title"]}</div>
        {mediaTag}
        <div className="mediaDescription">{this.props.media["data"][0]["description"]}</div>
        <button id="libSaveButton" className="ui inverted grey basic button" onClick={this.openModal}>Save To My Library</button>
        </div>

        <LibraryModal id={this.modalId()} closeModal={this.closeModal} photo={this.props.media}/>
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return { currentUser: state.currentUser}
}

export default connect(mapStateToProps)(Media)
