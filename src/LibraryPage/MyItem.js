import React from "react";
import { connect } from 'react-redux';
import { deleteItemFromLib } from '../redux/actions-item'


class MyItem extends React.Component {

  state = {
    media_url: ""
  }

  componentDidMount(){
    if (this.props.item.category === "nasalibrary") {
      fetch(`${this.props.item.media_url}`)
      .then(res => res.json())
      .then(data => {
        if (this.props.item.media_type === "video") {
          let mp4Url = data.find(url => {
            let splittedurl = url.split(".")
            return splittedurl[splittedurl.length-1] === "mp4" ? true : false
          })
          return this.setState({media_url: mp4Url})
        } else { return this.setState({media_url: data[0]}) }
      })
    } else {
      this.setState({media_url: this.props.item.media_url})
    }
  }

  deleteItem = () => {
    const libId = this.props.libId
    const itemId = this.props.item.id
    this.props.deleteItemFromLib(libId, itemId)
  }

  render() {
    return (
      <div>
        <div className="mediaCard">
          <div className="mediaTitle">{this.props.item.title}</div>

          {this.props.item.media_type === "video" ? 
          (<div>
          <video className="mediaVedio" controls src={this.state.media_url} />
          </div>)
          : (<div>
          <img className="mediaImage" alt="myItem" src={this.state.media_url}/>
          </div>)
          }
          <div className="mediaDescription">{this.props.item.description}</div>
          <button id="deleteItemFromLib" className="ui inverted grey button" onClick={this.deleteItem}>Delete from Library</button>
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