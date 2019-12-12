import React from 'react';
import { Route } from 'react-router-dom';
// import { Route, withRouter } from 'react-router-dom';
// import { connect } from 'react-redux';
import Navbar from './Navbar'
import Home from './Home/Home'
import MarsRover from './MarsRover/MarsRover'
import SearchPage from './SearchPage/SearchPage'
import MarsWeather from './MarsWeather/MarsWeather'
import Profile from './Profile/Profile'
import LibraryPage from './Profile/LibraryPage'
import LoginPage from './LoginSignup/LoginPage'


class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <Route exact path='/' component={Home} />
        <Route exact path='/marsrover' component={MarsRover} />
        <Route exact path='/searchpage' component={SearchPage} />
        <Route exact path='/marsweather' component={MarsWeather} />
        <Route exact path='/profile' component={Profile} />
        <Route exact path='/library/:id' component={LibraryPage} />
        <Route exact path='/login' component={LoginPage} />
      </div>
    )
  }
}

export default App;
