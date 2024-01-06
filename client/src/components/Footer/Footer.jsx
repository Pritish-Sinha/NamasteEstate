import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        {/* left side */}
        <div className="flexColStart f-left">
        <img src="./logo2.png" alt="" width={120} />
          <span className="secondaryText">
          Elevating lives through exceptional real estate experiences.          </span>
        </div>
        <div className="flexColStart f-right">
          <span className="primaryText">Our Address</span>
          <span className="secondaryText">Nimbus ParkStreet, Gr.Noida, Uttar Pradesh,India</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
