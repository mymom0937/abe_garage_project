import React from "react";
import introImage from "../../../../assets/images/frt.png";
import "./Introduction.css";

const Introduction = () => {
  return (
    <section className="introduction">
      <div className="content">
        <h2>We are highly skilled mechanics for your car repair</h2>
        <p>
          At our garage, our skilled mechanics deliver top-notch car repair
          services with a commitment to quality and customer satisfaction,
          ensuring your vehicle gets the care it deserves.
          <br />
          Experience excellence with tailored services and advanced diagnostics
          that keep your car running smoothly and safely. Your satisfaction is
          our top priority—trust us to exceed your expectations every visit.
        </p>

        {/* <p>
          Experience excellence with tailored services and advanced diagnostics
          that keep your car running smoothly and safely. Your satisfaction is
          our top priority—trust us to exceed your expectations every visit.
        </p> */}
        
      </div>
      <div className="image">
        <img src={introImage} alt="Mechanic working" />
      </div>
    </section>
  );
};

export default Introduction;
