import React from "react";
import WeatherCard from './WeatherCard'
import { LoadingSpinnerComponent } from '../LoadingPage'

const WeatherContainer = (props) => {
  const sol_keys = props.info["sol_keys"]

  return (
    <div className="WeatherContainer">
      {sol_keys ? sol_keys.slice(0,6).map(sol => <WeatherCard key={sol} sol={sol} weather={props.info[sol]} />) : null}
      <LoadingSpinnerComponent />
    </div>
  )
}

export default WeatherContainer 