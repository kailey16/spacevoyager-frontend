import React from "react";
import { connect } from 'react-redux';
import { Link, withRouter } from "react-router-dom";
import '../style/Library.css'
import MyItem from './MyItem'
import { deleteLibrary } from '../redux/actions-library'
import Swal from 'sweetalert2'


class LibraryPage extends React.Component {

  deleteLibrary = () =>{
    this.props.deleteLibrary(this.props.libObj.id)
    Swal.fire({
      icon: 'success',
      text: `${this.props.libObj.title} is successfully deleted!`,
    })
  }

  render() {
    return (
      <div className="LibraryPage">
        {this.props.libObj ? (
        <div>
          <p className="libTitle">{this.props.libObj.title}</p>
          <p className="libText">{this.props.libObj.description}</p>

          <Link to={`/profile`}>
            <div className="ui button" onClick={this.deleteLibrary}>Delete Library</div>
          </Link>
          
          <div className="MediaContainer">
            {this.props.itemsOfLib.map((item, i) => <MyItem key={i} item={item} libId={this.props.libObj.id}/>)}
          </div>
        </div>)
        : null}
      </div>
    )
  }

}

const mapStateToProps = (state, ownProps) => {
  const libId = ownProps.match.params.id

  return {
    itemsOfLib: state.myItems,
    libObj: state.myLibraries.find(lib => lib.id.toString() === libId)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteLibrary: (libId) => dispatch(deleteLibrary(libId))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LibraryPage))