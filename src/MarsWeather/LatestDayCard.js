import React from "react";  

const LatestDayCard = (props) => {

  if (props.latestDayInfo) {
    const { AT, First_UTC, Season} = props.latestDayInfo 
    // HWS, PRE, WD 
    const date = new Date(First_UTC).toDateString()

    return (
      <div className="ui card latestDayCard">
        <p>SOL {props.sol}</p>
        <p>{date.split(" ").slice(1,3).join(" ")}</p>
        <p>{date.split(" ").slice(-1)}</p>
        <p>{date.split(" ").slice(0,1)}</p>
        <p>{Season}</p>
        <p>{Math.round(AT["mx"])}°C</p>
        <i class="thermometer icon"/>
        <p>{Math.round(AT["mn"])}°C</p>
      </div>
    )
  } else return <div></div>
}

export default LatestDayCard