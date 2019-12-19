import React from "react";
import { connect } from 'react-redux';
import { saveImgToLibrary } from '../redux/actions-item'


class LibraryModal extends React.Component {

  saveImgUnderLib = (lib) => {
    let img = this.props.photo
    this.props.saveImgToLibrary(lib, img)

    this.props.closeModal()
  }

  render() {
    return (
    <div id={this.props.id} className="ui mini modal">
      <div className="header">
        My Libraries <i id="modalCloseButton" className="close icon" onClick={this.props.closeModal}></i>
      </div>
      <div className="content">
        {this.props.myLibraries.map(lib => <button key={lib.id} className="modalLibTitle ui button" onClick={() => this.saveImgUnderLib(lib)}>{lib.title}</button>)}
      </div>
    </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {myLibraries: state.myLibraries}
}

const mapDispatchToProps = (dispatch) => {
  return {saveImgToLibrary: (lib, img) => dispatch(saveImgToLibrary(lib, img))}
}

export default connect(mapStateToProps, mapDispatchToProps)(LibraryModal)

