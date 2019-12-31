import React from "react";  

class LatestDayCard extends React.Component {

  openSolModal = () => {
    document.getElementById("solModal").classList.add("active")
  }

  closeSolModal = () => {
    document.getElementById("solModal").classList.remove("active")
  }

  render() {
    if (this.props.latestDayInfo) {
      const { AT, First_UTC } = this.props.latestDayInfo  
      const date = new Date(First_UTC).toDateString()
      return (
        <div className="latestDayCard">
          <div className="latestDayCardTop">
            <p className="ldSol">SOL {this.props.sol} <i id="solQuestionIcon" className="far fa-question-circle" onMouseEnter={this.openSolModal} onMouseOut={this.closeSolModal}></i></p>

            <div id="solModal" className="ui tiny modal">
              <div className="content solModalContent">
                Sol is a Mars solar day, a Martian day. The average duration of sol is 24 hours, 39 minutes and 35.244 seconds, which is equivalent to 1.03 Earth days.
              </div>
            </div>

            <p className="ldDate">{date.split(" ").slice(0,1)} {date.split(" ").slice(1,3).join(" ")} {date.split(" ").slice(-1)}</p>
          </div>


          <div className="latestDayCardBottom">
            <p className="ldContent">{Math.round(AT["mx"])}°C</p>
            <i id="ldThermoIcon" className="thermometer icon"/>
            <p className="ldContent">{Math.round(AT["mn"])}°C</p>
          </div>
        </div>
      )
    } else {return <div></div>}
  }
}

export default LatestDayCard