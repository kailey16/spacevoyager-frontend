import React from "react";
import Img from './Img'
import BigImagePage from './BigImagePage'


class ImgContainer extends React.Component {
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
        : <div className="ImgContainer">{this.props.photos.map(photo => <Img key={photo.id} photo={photo} bigImageShow={this.bigImageShow}/>)}</div>}
      </div>
    )
  }
 
}

export default ImgContainer