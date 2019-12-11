import React from "react";

class Media extends React.Component {
  state = {
    media_url: ""
  }

  componentDidMount(){
    fetch(`${this.props.media["href"]}`)
    .then(res => res.json())
    .then(data => { this.setState({media_url: data[0]})})
  }

  render() {
    return (
      <div>
        {this.props.media["data"][0]["media_type"] === "video" ? null : <img className="imageMedia" alt="libraryMedia" src={this.state.media_url} />}
      </div>
    )
  }

}

export default Media