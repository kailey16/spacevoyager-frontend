import React from "react";

const WeatherInfoModal = (props) => {
  return(
    <div id="weatherModal" className="ui basic modal animated zoomIn">
    <div className="infoModalTop">
      <button id="infoModalButton" className="ui inverted grey basic button" onClick={props.infoModalClose}>Exit</button>
      <p className="infoModalTitle">Climate of MARS</p>
    </div>

    <div className="content">
      <div className="modalPics">
        <div className="modalPic1">
          <img className="pic1" src={require("../Images/marsDuststorm.gif")} alt="mars duststorm" />
          <p>Mars (before/after) global dust storm (July 2018)</p>
        </div>
        <div className="modalPic2">
          <img className="pic2" src={require("../Images/marsatmosphere.jpg")} alt="mars atmosphere" />
          <p>Atmosphere of Mars</p>
        </div>
      </div>
      
      <p className="weatherModalText">Of all the planets in the Solar System, the seasons of Mars are the most Earth-like, due to the similar tilts of the two planets' rotational axes. The lengths of the Martian seasons are about twice those of Earth's because Mars's greater distance from the Sun leads to the Martian year being about two Earth years long. Martian surface temperatures vary from lows of about −143 °C (−225 °F) at the winter polar caps to highs of up to 35 °C (95 °F) in equatorial summer. The wide range in temperatures is due to the thin atmosphere which cannot store much solar heat, the low atmospheric pressure, and the low thermal inertia of Martian soil. The planet is 1.52 times as far from the Sun as Earth, resulting in just 43% of the amount of sunlight.<br></br><br></br>
      If Mars had an Earth-like orbit, its seasons would be similar to Earth's because its axial tilt is similar to Earth's. The comparatively large eccentricity of the Martian orbit has a significant effect. Mars is near perihelion when it is summer in the southern hemisphere and winter in the north, and near aphelion when it is winter in the southern hemisphere and summer in the north. As a result, the seasons in the southern hemisphere are more extreme and the seasons in the northern are milder than would otherwise be the case. The summer temperatures in the south can be warmer than the equivalent summer temperatures in the north by up to 30 °C (54 °F).<br></br><br></br>
      Mars has the largest dust storms in the Solar System, reaching speeds of over 160 km/h (100 mph). These can vary from a storm over a small area, to gigantic storms that cover the entire planet. They tend to occur when Mars is closest to the Sun, and have been shown to increase the global temperature.
      </p>
    </div>
  </div>
  )
}

export default WeatherInfoModal