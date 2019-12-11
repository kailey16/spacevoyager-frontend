import React from "react";
import Img from './Img'
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import { fetchingRoverPhotos } from '../redux/actions'


class ImgContainer extends React.Component {
  
  componentDidMount() {
    this.props.fetchingRoverPhotos()
  }
  
  render() {
    return (
      <div>
        {this.props.photos.map(photo => <Img photo={photo}/>)}
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ImgContainer))