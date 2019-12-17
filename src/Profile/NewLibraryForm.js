import React from "react";
import { connect } from 'react-redux';
import { createLibrary } from '../redux/actions-library'

class NewLibraryForm extends React.Component {

  state = {
    libraryName: "",
    libraryDescription: ""
  }

  handleOnChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleSubmitForm = (e) => {
    e.preventDefault()
    this.props.createLibrary(this.state)
    this.setState({libraryName: "", libraryDescription: ""})
  }

  render() {
    return (
      <div className="NewLibraryForm">
        <div>Create new library</div>
        <form id="libraryForm" className="ui form" onSubmit={this.handleSubmitForm}>
          <div className="field">
            <label>Library Name</label>
            <input type="text" name="libraryName" placeholder="Library Name" onChange={this.handleOnChange} value={this.state.libraryName} />
          </div>
          <div className="field">
            <label>Description</label>
            <textarea rows="2" placeholder="Description..." name="libraryDescription" onChange={this.handleOnChange} value={this.state.libraryDescription} />
          </div>
          <button className="ui button" type="submit">Submit</button>
        </form>
      </div>
    )
  }

}

const mapDispatchToProps = (dispatch) => {
  return {
    createLibrary: (libInfo) => dispatch(createLibrary(libInfo))
  }
}

export default connect(null, mapDispatchToProps)(NewLibraryForm)