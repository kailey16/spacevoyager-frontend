import React from "react";

const RoverInfoModal = (props) => {
  return(
    <div id="roverModal" className="ui basic modal">
      <button id="roverModalButton" class="ui inverted grey basic button" onClick={props.modalClose}>Exit</button>
      
      <div className="roverModalBody">
        <div>
          <p className="roverModalTitle">What is Mars Rover?</p>
          <p>
          A Mars rover is a motor vehicle that travels across the surface of the planet Mars upon arrival. Rovers have several advantages over stationary landers: they examine more territory, they can be directed to interesting features, they can place themselves in sunny positions to weather winter months, and they can advance the knowledge of how to perform very remote robotic vehicle control.
          </p>
        </div>

        <div>
          <img className="roverPic" src={require("../Images/curiosity.jpeg")} alt="curiosity" />
          <div className="roverText">
            <p className="roverModalTitle">Curiostiy</p>
          Part of NASA's Mars Science Laboratory mission, Curiosity is the largest and most capable rover ever sent to Mars. It launched November 26, 2011 and landed on Mars at 10:32 p.m. PDT on Aug. 5, 2012 (1:32 a.m. EDT on Aug. 6, 2012).<br/>
          Curiosity set out to answer the question: Did Mars ever have the right environmental conditions to support small life forms called microbes? Early in its mission, Curiosity's scientific tools found chemical and mineral evidence of past habitable environments on Mars. It continues to explore the rock record from a time when Mars could have been home to microbial life.
          </div>
        </div>

        <div>
          <img className="roverPic" src={require("../Images/spritandopp.png")} alt="sprit and opportunity" />
          <div className="roverText">
            <p className="roverModalTitle">Sprit and Opportunity</p>
          
          Spirit and Opportunity landed on Mars January 3 and January 24, 2004 PST (Jan. 4 and Jan. 25 UTC). Both rovers lived well beyond their planned 90-day missions. Opportunity worked nearly 15 years on Mars and broke the driving record for putting the most miles on the odometer. The twin geologists, Spirit and Opportunity, have both found dramatic evidence that long ago Mars was wetter and conditions at Mars could have sustained microbial life, if any existed. With data from the rovers, mission scientists have reconstructed an ancient past when Mars was awash in water. Spirit and Opportunity each found evidence for past wet conditions that possibly could have supported microbial life.<br/><br/>
          Both rovers exceeded their planned 90-day mission lifetimes by many years. Spirit lasted 20 times longer than its original design until it concluded its mission in 2010. Opportunity has worked on Mars longer than any other robot—nearly 15 years. The rover last communicated with Earth on June 10, 2018, as a planet-wide dust storm blanketed the solar-powered rover’s location on Mars. In 2015, Opportunity broke the record for extraterrestrial travel by driving more than the distance of a marathon, with a total of 28.06 miles (45.16 kilometers).<br/><br/>

          First among the mission's scientific goals was to search for and characterize a wide range of rocks and soils for clues to past water activity on Mars. The rovers were targeted to sites on opposite sides of Mars that looked like they were affected by liquid water in the past. Opportunity landed at Meridiani Planum, a possible former lake in a giant impact crater. Spirit landed at Gusev Crater, a place where mineral deposits suggested that Mars had a wet history.<br/><br/>

          Each rover bounced onto the surface inside a landing craft protected by airbags. When they stopped rolling, the airbags were deflated and the landing craft opened. The rovers rolled out to take panoramic images. These images gave scientists the information they needed to select promising geological targets to tell part of the story of water in Mars' past. Then, the rovers drove to those locations and beyond to perform close-up scientific investigations.
          </div>
        </div>
      </div>
    </div>
  )
}

export default RoverInfoModal