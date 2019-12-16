import React from "react";
import LoginForm from './LoginForm'
import SignupForm from './SignupForm'

class LoginPage extends React.Component {
  state = {
    signup: false
  }

  formSwitch = () => {
    this.setState(pre => {return {signup: !pre.signup}})
  }

  render() {
    return (
      <div>
        {this.state.signup ? <SignupForm formSwitch={this.formSwitch} /> : <LoginForm formSwitch={this.formSwitch} />}
      </div>
    )
  }

}


export default LoginPage