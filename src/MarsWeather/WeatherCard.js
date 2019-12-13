import React from "react";

const WeatherCard = (props) => {

  const { AT, First_UTC, Season} = props.weather 
  // HWS, PRE, WD 
  const date = new Date(First_UTC).toDateString() // "Thu Dec 05 2019"

  return (
    <div className="ui fade reveal weatherCard">
      <div className="visible content weatherCardTop">
        <p>SOL {props.sol}</p>
        <p>{date.split(" ").slice(1,3).join(" ")}</p>
        <p>{date.split(" ").slice(-1)}</p>
      </div>
      <div className="hidden content weatherCardBottom">
        <p>{date.split(" ").slice(0,1)}</p>
        <p>{Season}</p>
        <p>{Math.round(AT["mx"])}°C</p>
        <i class="thermometer icon"></i>
        <p>{Math.round(AT["mn"])}°C</p>
      </div>
    </div>
  )
}

export default WeatherCard