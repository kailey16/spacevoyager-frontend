import React from "react";

const WeatherCard = (props) => {

  const { AT, First_UTC, Season} = props.weather 
  // HWS, PRE, WD 
  const date = new Date(First_UTC).toDateString() // "Thu Dec 05 2019"

  return (
    <div className="ui fade reveal weatherCard">
      <div className="visible content weatherCardTop">
        <p className="weatherCardSol">SOL {props.sol}</p>
        <p className="weatherCardContent">{date.split(" ").slice(1,3).join(" ")}</p>
        <p className="weatherCardContent">{date.split(" ").slice(-1)}</p>
      </div>
      <div className="hidden content weatherCardBottom">
        <p className="weatherDate">{date.split(" ").slice(0,1)}</p>
        <p className="weathrSeason">{Season}</p>
        <p className="weathrTemp">{Math.round(AT["mx"])}°C</p>
        <i id="thermoIcon" className="thermometer icon"></i>
        <p className="weathrTemp">{Math.round(AT["mn"])}°C</p>
      </div>
    </div>
  )
}

export default WeatherCard