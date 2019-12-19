import React from "react";
import { connect } from 'react-redux';
import { signupRequest } from '../redux/actions'

class SignupForm extends React.Component {

  state = {
    username: "",
    password: "",
    email: ""
  }

  inputOnchange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleOnsubmit = (e) => {
    e.preventDefault()
    this.props.signupRequest(this.state)
    this.setState({username: "", password: "", email: ""})
  }

  render() {
    return (
      <div className="LoginPageFormCon">
      <p>Sign up for SpaceVoyager</p>
      <form className="ui form LoginPageForm" onSubmit={this.handleOnsubmit}>
        <div className="field">
          <label>Username</label>
          <input type="text" name="username" placeholder="Username" onChange={this.inputOnchange} value={this.state.username} />
        </div>
        <div className="field">
          <label>Password</label>
          <input type="password" name="password" placeholder="Password" onChange={this.inputOnchange} value={this.state.password} />
        </div>
        <div className="field">
          <label>Email</label>
          <input type="text" name="email" placeholder="Email" onChange={this.inputOnchange} value={this.state.email} />
        </div>
        <button className="ui button" type="submit">Start Exploring Space</button>
      </form>
      <p>or</p>
      <button className="ui button" onClick={this.props.formSwitch}>Go back to Login</button>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signupRequest: (signupInfo) => dispatch(signupRequest(signupInfo))
  }
}

export default connect(null, mapDispatchToProps)(SignupForm)