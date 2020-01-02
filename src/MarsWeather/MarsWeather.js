import React from "react";
import WeatherContainer from './WeatherContainer'
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import { fetchingWeatherInfo } from '../redux/actions'
import LatestDayCard from './LatestDayCard'
import '../style/MarsWeather.css'
import MarsWeatherInfo from './MarsWeatherInfo'
import WeatherInfoModal from './WeatherInfoModal'
 

class MarsWeather extends React.Component {

  componentDidMount() {
    this.props.fetchingWeatherInfo()
  }

  infoModalOpen = () => {
    document.getElementById("weatherModal").classList.add("active")
  }

  infoModalClose = () => {
    document.getElementById("weatherModal").classList.remove("active")
  }

  render() {
    const sol_keys = this.props.info["sol_keys"]
    const latestDayInfo = sol_keys ? this.props.info[sol_keys[sol_keys.length -1]] : null
    const lastSol = sol_keys ? sol_keys[6] : null

    return ( 
      <div className="MarsWeatherPage">
        <MarsWeatherInfo infoModalOpen={this.infoModalOpen} />
        <LatestDayCard sol={lastSol} latestDayInfo={latestDayInfo}/>
        <div className="seasonCon animated fadeInRight">
          Current season in Mars is <span className="season">{latestDayInfo ? latestDayInfo.Season : null}</span>
        </div>
        <WeatherContainer info={this.props.info} />
        <WeatherInfoModal infoModalClose={this.infoModalClose} />
      </div> 
    )
  } 

}

const mapStateToProps = (state) => {
  return {info: state.marsWeather}
}

const mapDispatchToProps = (dispatch) => {
  return {fetchingWeatherInfo: () => dispatch(fetchingWeatherInfo())}
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MarsWeather))