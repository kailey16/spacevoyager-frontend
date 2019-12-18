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
    this.setState({username: "", password: ""})
  }

  render() {
    return (
      <div>
        <p>Welcome back to SpaceVoyager!</p>
        <p>Please sign into your account.</p>
        <form className="ui form" onSubmit={this.handleOnsubmit}>
          <div className="field">
            <label>Username</label>
            <input type="text" name="username" placeholder="Username" onChange={this.inputOnchange} value={this.state.username} />
          </div>
          <div className="field">
            <label>Password</label>
            <input type="password" name="password" placeholder="Password" onChange={this.inputOnchange} value={this.state.password} />
          </div>
          <button className="ui button" type="submit">Sign in</button>
        </form>
        <p>Are you not a member of SpaceVoyager?</p>
        <button className="ui button" onClick={this.props.formSwitch}>Signup</button>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loginRequest: (loginInfo) => dispatch(loginRequest(loginInfo))
  }
}

export default connect(null, mapDispatchToProps)(LoginForm)