import React from "react";
import { connect } from 'react-redux';
import { loginRequest } from '../redux/actions'

class LoginForm extends React.Component {

  state = {
    username: "",
    password: ""
  }

  inputOnchange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleOnsubmit = (e) => {
    e.preventDefault()
    this.props.loginRequest(this.state)
  }

  render() {
    return (
      <form className="ui form" onSubmit={this.handleOnsubmit}>
        <div className="field">
          <label>Username</label>
          <input type="text" name="username" placeholder="Username" onChange={this.inputOnchange} value={this.state.username} />
        </div>
        <div className="field">
          <label>Password</label>
          <input type="password" name="password" placeholder="Password" onChange={this.inputOnchange} value={this.state.password} />
        </div>
        <button className="ui button" type="submit">Submit</button>
      </form>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loginRequest: (loginInfo) => dispatch(loginRequest(loginInfo))
  }
}

export default connect(null, mapDispatchToProps)(LoginForm)