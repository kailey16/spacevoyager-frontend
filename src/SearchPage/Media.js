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
      <div>
        {this.props.media["data"][0]["media_type"] === "video" ? (
        <video className="searchedMedia" controls src={this.state.media_url} />
        ) : <img className="searchedMedia" alt="libraryMedia" src={this.state.media_url} />}
      </div>
    )
  }

}

export default Media