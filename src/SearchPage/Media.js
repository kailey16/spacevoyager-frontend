import React from "react";

class Media extends React.Component {

  componentDidMount(){
    fetch(`${this.props.media["href"]}`)
  }

  render() {
    return (
      <div>
        {}
      </div>
    )
  }

}

export default Media