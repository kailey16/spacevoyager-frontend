import React from "react";
import { connect } from 'react-redux';
import { deleteItemFromLib } from '../redux/actions-item'
 

class MyItem extends React.Component {

  state = {
    media_url: ""
  }

  abortController = new AbortController()

  componentDidMount() {
    this.getMediaSrc()
  }

  // componentDidUpdate() {
  //   this.getMediaSrc()
  // }

  // componentWillUnmount() {
  //   this.abortController.abort()
  // }

  getMediaSrc = () => {
    if (this.props.item.category === "nasalibrary") {
      fetch(`${this.props.item.media_url}`, {signal: this.abortController.signal})
      .then(res => res.json())
      .then(data => {
        const type = this.props.item.media_type
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
          let imgUrl = data.find(url => {
            let splittedurl = url.split(".")
            return splittedurl[splittedurl.length-1] === "jpg" ? true : false})
          return this.setState({media_url: imgUrl})
        }
      })
    } else {
      this.setState({media_url: this.props.item.media_url})
    }
  }

  deleteItemClicked = () => {
    const libId = this.props.libId
    const itemId = this.props.item.id
    this.props.deleteItemFromLib(libId, itemId)
    this.props.deleteItem(itemId)
  }

  render() {

    const type = this.props.item.media_type;
    let mediaTag;
    if (type === "video") {
      mediaTag = <div><video className="mediaVedio" controls src={this.state.media_url} /></div>
    } else if (type === "audio") {
      mediaTag = <div className="mediaAudio"><p className="audioFile">Audio File</p><audio className="audioPlayer" controls src={this.state.media_url} type="audio/mp3" /></div>
    } else {
      mediaTag = <div><img className="mediaImage" alt="libraryMedia" src={this.state.media_url} onClick={() => this.props.bigImageShow(this.state.media_url)}/></div>
    }

    return (
      <div>
        <div className="mediaCard">
          <div className="mediaTitle">{this.props.item.title}</div>
          {mediaTag}
          <div className="mediaDescription">{this.props.item.description}</div>
          <button id="deleteItemFromLib" className="ui inverted grey basic button" onClick={this.deleteItemClicked}>Delete from Library</button>
        </div>
      </div>
    )
  }

}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteItemFromLib: (libId, itemId) => dispatch(deleteItemFromLib(libId, itemId))
  }
}

export default connect(null, mapDispatchToProps)(MyItem)