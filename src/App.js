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
import './style/Swal.css'


class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser()
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
        <Route exact path='/login' render={()=>{return this.props.currentUser.id ? <Profile /> : <LoginPage/>}} />
      </div>
    )
  }
}
 
const mapStateToProps = (state) => {
  return { currentUser: state.currentUser}
}

const mapDispatchToProps = (dispatch) => {
  return {
    getCurrentUser: () => dispatch(getCurrentUser())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
