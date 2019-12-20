import React from "react";

const WeatherCard = (props) => {

  const { AT, First_UTC, Season} = props.weather 
  // HWS, PRE, WD 
  const date = new Date(First_UTC).toDateString() // "Thu Dec 05 2019"
 
  return (
    <div className="weatherCard">
      <p className="weatherCardSol">SOL {props.sol}</p>
      <p className="weatherDate">{date.split(" ").slice(0,1)} {date.split(" ").slice(1,3).join(" ")} {date.split(" ").slice(-1)}</p>
      {/* <p className="weatherSeason">{Season}</p> */}
      <p className="weatherTemp">{Math.round(AT["mx"])}°C</p>
      <i id="thermoIcon" className="thermometer icon"/>
      <p className="weatherTemp">{Math.round(AT["mn"])}°C</p>
  </div>
  )
}

export default WeatherCard