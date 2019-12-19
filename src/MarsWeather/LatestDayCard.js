import React from "react";  

const LatestDayCard = (props) => {

  if (props.latestDayInfo) {
    const { AT, First_UTC, Season} = props.latestDayInfo 
    // HWS, PRE, WD 
    const date = new Date(First_UTC).toDateString()

    return (
      <div className="latestDayCard">
        <p className="ldSol">SOL {props.sol}</p>
        <p className="ldDate">{date.split(" ").slice(0,1)}</p>
        <p className="ldDate">{date.split(" ").slice(1,3).join(" ")} {date.split(" ").slice(-1)}</p>
        <p className="ldContent">{Season}</p>
        <p className="ldContent">{Math.round(AT["mx"])}°C</p>
        <i id="ldThermoIcon" className="thermometer icon"/>
        <p className="ldContent">{Math.round(AT["mn"])}°C</p>
      </div>
    )
  } else {return <div></div>}
}

export default LatestDayCard