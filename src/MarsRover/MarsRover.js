import React from "react";
import ImgContainer from './ImgContainer'
import CameraRadio from './CameraRadio'
import RoverInfoModal from './RoverInfoModal'
import '../style/MarsRover.css'
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import { fetchingRoverPhotos } from '../redux/actions' 


class MarsRover extends React.Component {
   
  state = {
    showall: true,
    camera: ''
  }

  componentDidMount() {
    this.props.fetchingRoverPhotos()
  }

  radioClicked = (e) => {
    const camname = e.target.id
    this.setState({camera: camname, showall: false})
  }

  showallClicked = () => {
    this.setState({ showall: true, camera: ''})
  }

  modalOpen = () => {
    document.getElementById("roverModal").classList.add("active")
  }

  modalClose = () => {
    document.getElementById("roverModal").classList.remove("active")
  }

  render() {
    let rendering_photos;
    this.state.showall ? rendering_photos = this.props.photos : rendering_photos = this.props.photos.filter(p => {
      return p["camera"]["name"] === this.state.camera.toUpperCase()
    })

    return (
      <div className="MarsRoverPage">
        <RoverInfoModal modalClose={this.modalClose}/>
        <CameraRadio camera={this.state.camera} radioClicked={this.radioClicked} showallClicked={this.showallClicked} modalOpen={this.modalOpen}/><br></br>
        <ImgContainer photos={rendering_photos}/>
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {photos: state.roverPhotos}
}

const mapDispatchToProps = (dispatch) => {
  return {fetchingRoverPhotos: () => dispatch(fetchingRoverPhotos())}
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MarsRover))