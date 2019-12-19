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
      
    // <div className="ui fade reveal latestDayCard">
    //   <div className="visible content ldCardTop">
    //     <p className="ldCardSol">SOL {props.sol}</p>
    //     <p className="ldCardContent">{date.split(" ").slice(1,3).join(" ")}</p>
    //     <p className="ldCardContent">{date.split(" ").slice(-1)}</p>
    //   </div>
    //   <div className="hidden content ldCardBottom">
    //     <p className="weatherDate">{date.split(" ").slice(0,1)}</p>
    //     <p className="weathrSeason">{Season}</p>
    //     <p className="weathrTemp">{Math.round(AT["mx"])}°C</p>
    //     <i id="thermoIcon" className="thermometer icon"></i>
    //     <p className="weathrTemp">{Math.round(AT["mn"])}°C</p>
    //   </div>
    // </div>
    )
  } else return <div></div>
}

export default LatestDayCard