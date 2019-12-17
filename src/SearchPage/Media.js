import React from "react";
import { connect } from 'react-redux';
import { saveImgToLibrary } from '../redux/actions-library'


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

  saveImgUnderLib = (lib) => {
    let img = this.props.media
    this.props.saveImgToLibrary(lib, img)
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
        <button id="libSaveButton" className="ui inverted grey button" onClick={this.openModal}>Save To My Library</button>
        </div>

      {/* modal */}
        <div id={this.modalId()} className="ui mini modal">
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

export default connect(mapStateToProps, mapDispatchToProps)(Media)