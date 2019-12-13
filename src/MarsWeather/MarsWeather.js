import React from "react";
import WeatherContainer from './WeatherContainer'
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import { fetchingWeatherInfo } from '../redux/actions'

class MarsWeather extends React.Component {

  componentDidMount() {
    this.props.fetchingWeatherInfo()
  }

  render() {
    const sol_keys = this.props.info["sol_keys"]

    return (
      <div>
        MarsWeather
        <WeatherContainer />
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