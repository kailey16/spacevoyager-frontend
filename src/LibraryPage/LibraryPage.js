import React from "react";
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import '../style/Library.css'
import MyItem from './MyItem'
import { deleteLibrary } from '../redux/actions-library'


class LibraryPage extends React.Component {

  deleteLibrary = () => {
    this.props.deleteLibrary(this.props.lib.id)
  }

  render() {
    return (
      <div>
        {this.props.libObj ? (
        <div>
          <p>{this.props.libObj.title}</p>
          <p>{this.props.libObj.description}</p>
          <div className="ui button" onClick={this.deleteLibrary}>Delete Library</div>
          <div className="itemContainer">
            {this.props.itemsOfLib.map(item => <MyItem key={item.id} item={item}/>)}
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
    itemsOfLib: state.myItems.filter(item => state.myItems[0].library_id.toString() === libId),
    libObj: state.myLibraries.find(lib => lib.id.toString() === libId)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteLibrary: (libId) => dispatch(deleteLibrary(libId))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LibraryPage))