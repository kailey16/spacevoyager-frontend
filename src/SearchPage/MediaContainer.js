import React from "react";
import Media from './Media'  
import BigImagePage from '../MarsRover/BigImagePage'
import { LoadingSpinnerComponent } from '../LoadingPage'


class MediaContainer extends React.Component {

  state = {
    bigImage: false,
    showImgUrl: ""
  } 

  bigImageShow = (imgUrl) => {
    this.setState(pre => {return {bigImage: !pre.bigImage, showImgUrl: imgUrl}})
  }

  render() {
    return (
      <div>
        {this.state.bigImage ?
        <BigImagePage showImgUrl={this.state.showImgUrl} bigImageShow={this.bigImageShow} />
        : <div className="MediaContainer">
        {this.props.media.map(m => <Media key={m.href} media={m} bigImageShow={this.bigImageShow} />)}
        </div>}
        <LoadingSpinnerComponent />
      </div>
    )
  }

}

export default MediaContainer