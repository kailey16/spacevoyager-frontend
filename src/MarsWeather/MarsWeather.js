import React from "react";
import WeatherContainer from './WeatherContainer'
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import { fetchingWeatherInfo } from '../redux/actions'
import LatestDayCard from './LatestDayCard'

class MarsWeather extends React.Component {

  componentDidMount() {
    this.props.fetchingWeatherInfo()
  }

  render() {
    const sol_keys = this.props.info["sol_keys"]
    const latestDayInfo = sol_keys ? this.props.info[sol_keys[sol_keys.length -1]] : null

    return (
      <div>
        <WeatherContainer info={this.props.info} />
        <LatestDayCard latestDayInfo={latestDayInfo}/>
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