import React from "react";
import ImgContainer from './ImgContainer'
import CameraRadio from './CameraRadio'
import RoverInfoModal from './RoverInfoModal'
import '../style/MarsRover.css'
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import { fetchingRoverPhotos,fetchingRoverPhotosWithDate } from '../redux/actions'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";



class MarsRover extends React.Component {
   
  state = {
    showall: true,
    camera: '',
    date: new Date('August 10, 2019')
  }

  componentDidMount() {
    // this.props.fetchingRoverPhotos()
    this.props.fetchingRoverPhotosWithDate(this.state.date)
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

  dateChange = selectedDate => {
    this.setState({ date: selectedDate }, this.props.fetchingRoverPhotosWithDate(selectedDate))
  }

  render() {
    let rendering_photos;
    this.state.showall ? rendering_photos = this.props.photos : rendering_photos = this.props.photos.filter(p => {
      return p["camera"]["name"] === this.state.camera.toUpperCase()
    })

    return (
      <div className="MarsRoverPage">
        <RoverInfoModal modalClose={this.modalClose}/>
        <CameraRadio camera={this.state.camera} radioClicked={this.radioClicked} showallClicked={this.showallClicked} modalOpen={this.modalOpen} dateChange={this.dateChange} date={this.state.date}/>
        <div className="calendar">
          <div>Select a date to see photos taken that day <DatePicker selected={this.state.date} onChange={this.dateChange} /></div>
        </div>
        <ImgContainer photos={rendering_photos}/>
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {photos: state.roverPhotos}
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchingRoverPhotos: () => dispatch(fetchingRoverPhotos()),
    fetchingRoverPhotosWithDate: (date) => dispatch(fetchingRoverPhotosWithDate(date))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MarsRover))