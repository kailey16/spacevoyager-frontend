import React from "react";
import { connect } from 'react-redux';
import LibraryCard from './LibraryCard' 
 
class LibraryContainer extends React.Component {

  render() {
    return (
      <div className="LibraryContainer animated fadeInDownBig delay-1s">
        <p className="libConTitle">My Libraries</p>
        <div className="libraries">
          {this.props.myLibraries.map(lib => <LibraryCard key={lib.id} lib={lib} />)}
        </div>
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {myLibraries: state.myLibraries}
}

export default connect(mapStateToProps)(LibraryContainer)