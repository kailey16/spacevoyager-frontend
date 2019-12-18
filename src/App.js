import React from 'react'; 
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Navbar from './Navbar'
import Home from './Home/Home'
import MarsRover from './MarsRover/MarsRover'
import SearchPage from './SearchPage/SearchPage'
import MarsWeather from './MarsWeather/MarsWeather'
import Profile from './Profile/Profile'
import LibraryPage from './LibraryPage/LibraryPage'
import LoginPage from './LoginSignup/LoginPage'
import './style/App.css'
import { getCurrentUser } from './redux/actions'
// import { fetchingMyLibraries } from './redux/actions-library'
// import { fetchingMyItems } from './redux/actions-item'


class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser()
    // this.props.fetchingMyLibraries()
    // this.props.fetchingMyItems()
  }

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

const mapDispatchToProps = (dispatch) => {
  return {
    getCurrentUser: () => dispatch(getCurrentUser())
    // fetchingMyLibraries: () => dispatch(fetchingMyLibraries()),
    // fetchingMyItems: () => dispatch(fetchingMyItems())
  }
}

export default connect(null, mapDispatchToProps)(App);
