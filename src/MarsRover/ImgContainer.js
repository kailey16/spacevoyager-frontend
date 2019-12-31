import React from "react";
import Img from './Img'
import BigImagePage from './BigImagePage'
import { LoadingSpinnerComponent } from '../LoadingPage'


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
          : (
            this.props.photos.message ? 
            <div className="noPictureMessage">
              <i class="fas fa-user-astronaut nopicIcon"></i><br/>
              There is no photos on this day</div> :
            <div className="ImgContainer">
            {
              this.props.photos.map(photo => <Img key={photo.id} photo={photo} bigImageShow={this.bigImageShow}/>)
            }
            </div>
            )
        }
        <LoadingSpinnerComponent />
      </div>
    )
  }
 
}

export default ImgContainer