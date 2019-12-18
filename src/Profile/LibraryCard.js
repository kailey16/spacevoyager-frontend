import React from "react";
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { deleteLibrary } from '../redux/actions-library'


class LibraryCard extends React.Component {

  deleteLibrary = () => {
    this.props.deleteLibrary(this.props.lib.id)
  }

  render() {
    return (
      <div className="LibraryCard">
        <i id="libraryDeleteButton" className="close icon" onClick={this.deleteLibrary}></i>
        <Link to={`/library/${this.props.lib.id}`}>
          <i id="libraryIcon" className="rocket icon"></i>
        </Link>
        <p>{this.props.lib.title}</p>
        <p>{this.props.lib.description}</p>
      </div>
    )
  }

}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteLibrary: (libId) => dispatch(deleteLibrary(libId))
  }
}

export default connect(null, mapDispatchToProps)(LibraryCard)