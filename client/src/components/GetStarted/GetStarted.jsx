import React from "react";
import "./GetStarted.css";

const GetStarted = () => {
  return (
    <div id="get-started" className="g-wrapper">
      <div className="paddings innerWidth g-container">
        <div className="flexColCenter inner-container">
          <span className="primaryText">Start Your Journey with Namaste Estates</span>
          <span className="secondaryText">
            Subscribe to receive exclusive property deals and discover the perfect home for you.
            <br />
            Begin your real estate journey with Namaste Estates.
          </span>
          <button className="button">
            <a href="mailto:info@namasteestate.com">Get Started</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
