import React from "react";

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
    console.log("submitting form")
    this.setState({libraryName: "", libraryDescription: ""})
  }

  render() {
    return (
      <div>
        <div>Create new library</div>
        <form id="libraryForm" class="ui form" onSubmit={this.handleSubmitForm}>
          <div class="field">
            <label>Library Name</label>
            <input type="text" name="libraryName" placeholder="Library Name" onChange={this.handleOnChange} value={this.state.libraryName} />
          </div>
          <div class="field">
            <label>Description</label>
            <textarea rows="2" placeholder="Description..." name="libraryDescription" onChange={this.handleOnChange} value={this.state.libraryDescription} />
          </div>
          <button class="ui button" type="submit">Submit</button>
        </form>
      </div>
    )
  }

}

export default NewLibraryForm