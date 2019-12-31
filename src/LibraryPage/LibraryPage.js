import React from "react";
import { connect } from 'react-redux';
import { Link, withRouter } from "react-router-dom";
import '../style/Library.css'
import MyItem from './MyItem'
import { deleteLibrary } from '../redux/actions-library'
import BigImagePage from '../MarsRover/BigImagePage'


class LibraryPage extends React.Component {
  state = { 
    itemsOfLib: [],
    bigImage: false,
    showImgUrl: ""
  }

  componentDidMount() {
    const libId = localStorage.getItem('currentLibId')
    if (libId) {
    fetch(`http://localhost:3001/libraries/${libId}`, {
      headers: {
        'Authorization' : `Bearer ${localStorage.getItem('jwt')}`
      }
    })
    .then(resp => resp.json())
    .then(itemsArray => this.setState({itemsOfLib: itemsArray}))
    }
  }

  bigImageShow = (imgUrl) => {
    this.setState(pre => {return {bigImage: !pre.bigImage, showImgUrl: imgUrl}})
  }

  deleteItem = (itemId) => {
    const newArr = this.state.itemsOfLib.filter(item => item.id !== itemId)

    this.setState({itemsOfLib: newArr})
  }

  deleteLibrary = () =>{
    this.props.deleteLibrary(this.props.libObj.id)
  }

  render() {
    return (
      <div>
        {this.props.libObj ? (
        <div className="LibraryPage">
          <div id="libInfoCon">
            <p className="libTitle">{this.props.libObj.title.toUpperCase()}</p>
            <p className="libText">{this.props.libObj.description}</p>
            <Link to={`/profile`}>
              <div id="libDeleteButton" className="ui inverted red button" onClick={this.deleteLibrary}>Delete Library</div>
            </Link>
          </div>
          {this.state.bigImage ?
          <BigImagePage showImgUrl={this.state.showImgUrl} bigImageShow={this.bigImageShow} />
          :
          <div className="LibMediaContainer">
            {this.state.itemsOfLib.map((item, i) => <MyItem key={i} item={item} libId={this.props.libObj.id} deleteItem={this.deleteItem} bigImageShow={this.bigImageShow} />)}
          </div>}
        </div>)
        : null}
      </div>
    )
  }

}

const mapStateToProps = (state, ownProps) => {
  const libId = ownProps.match.params.id

  return {
    libObj: state.myLibraries.find(lib => lib.id.toString() === libId)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteLibrary: (libId) => dispatch(deleteLibrary(libId))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LibraryPage))