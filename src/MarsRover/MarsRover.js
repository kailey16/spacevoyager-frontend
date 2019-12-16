import React from "react";
import ImgContainer from './ImgContainer'
import CameraRadio from './CameraRadio'
import '../style/MarsRover.css'
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import { fetchingRoverPhotos } from '../redux/actions'


class MarsRover extends React.Component {
   
  state = {
    showall: true,
    fhaz: false,
    rhaz: false,
    mast: false,
    chemcam: false,
    navcam: false
  }

  componentDidMount() {
    this.props.fetchingRoverPhotos()
  }

  radioClicked = (e) => {
    const camname = e.target.name
    this.setState({[e.target.name]: !this.state[camname], showall: false})
  }

  showallClicked = () => {
    this.setState({ showall: true, fhaz: false, rhaz: false, mast: false, chemcam: false, navcam: false})
  }

  render() {
    let rendering_photos;
    this.state.showall ? rendering_photos = this.props.photos : rendering_photos = this.props.photos.filter(p => {
      return this.state[p["camera"]["name"].toLowerCase()] === true ? true : false
    })

    return (
      <div className="MarsRoverPage">
        <CameraRadio fhaz={this.state.fhaz} rhaz={this.state.rhaz} mast={this.state.mast} chemcam={this.state.chemcam} navcam={this.state.navcam} radioClicked={this.radioClicked} showallClicked={this.showallClicked} /><br></br>
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