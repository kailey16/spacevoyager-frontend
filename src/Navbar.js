import React from "react";
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div id="navbar" className="ui secondary menu">
      <Link id="websitetitle" className="item" to="/">
        SpaceVoyager
      </Link>
      <div className="right menu">
        <Link className="item" to="/marsrover">Mars Rover</Link>
        <Link className="item" to="/searchpage">NASAlib</Link>
        <Link className="item" to="/marsweather">Mars weather</Link>
        <Link className="item" to="/profile">Profile</Link>
        <Link className="item" to="/login">Login</Link>
      </div>
    </div>
  )
}

export default Navbar