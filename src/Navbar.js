import React from "react";
import {Link} from 'react-router-dom'
import { connect } from 'react-redux';
import { logOut } from './redux/actions'

const Navbar = (props) => {
  return (
    <div id="navbar" className="ui secondary menu">
      <Link id="websitetitle" className="item" to="/">
        SpaceVoyager
      </Link>
      <div className="right menu">
        <Link className="item navmenu" to="/marsrover">Mars Rover</Link>
        <Link className="item navmenu" to="/searchpage">NASAlib</Link>
        <Link className="item navmenu" to="/marsweather">Mars weather</Link>
        <Link className="item navmenu" to="/profile">Profile</Link>
        {props.currentUser.username ? <Link className="item navmenu" onClick={props.logOut} to="/">Logout</Link> : <Link className="item navmenu" to="/login">Login</Link>}
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {currentUser: state.currentUser}
}

const mapDispatchToProps = (dispatch) => {
  return {logOut: () => dispatch(logOut())}
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)