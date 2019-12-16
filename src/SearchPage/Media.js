import React from "react";

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
          if(splittedurl[splittedurl.length-1] === "mp4") { return true} else {return false}
        })
        return this.setState({media_url: mp4Url})
      } else {return this.setState({media_url: data[0]})}
    })
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
        <button id="libSaveButton" className="ui inverted grey button">Save To My Library</button>
        </div>
      </div>
    )
  }

}

export default Media