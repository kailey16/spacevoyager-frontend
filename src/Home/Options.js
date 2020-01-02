import React from "react";

const Options = () => {
  return (
    <div id="homeOptionCon">
      <p className="opConTitle">What you can do at SpaceVoyager</p>
      <div className="optionsCon">
        <div></div>
        <div id="op1" className="OptionCard animated fadeIn">
          <i className="fas fa-meteor opCardIcon"></i>
          <p className="opCardTitle">NASA Library</p>
          <p className="opCardText">Search media stored in the NASA library</p>
        </div>

        <div id="op2" className="OptionCard animated fadeIn">
          <i className="fas fa-satellite opCardIcon"></i>
          <p className="opCardTitle">Mars Rovers</p>
          <p className="opCardText">Browse photos taken by Mars Rover cameras</p>
        </div>

        <div id="op3" className="OptionCard animated fadeIn">
          <i className="fas fa-globe-europe opCardIcon"></i>
          <p className="opCardTitle"> Mars Weather</p>
          <p className="opCardText">Check out how was the weather in Mars this week!</p>
        </div>
        <div></div>
      </div>
    </div>
  )
}

export default Options