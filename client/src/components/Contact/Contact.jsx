import React from "react";
import "./Contact.css";
import { MdCall } from "react-icons/md";
import { HiChatBubbleBottomCenter } from "react-icons/hi2";

const Contact = () => {
  return (
    <div id="contact-us" className="c-wrapper">
      <div className="paddings innerWidth flexCenter c-container">
        {/* left side */}
        <div className="flexColStart c-left">
          <span className="orangeText">Contact Namaste Estates</span>
          <span className="primaryText">Connecting with Us Made Easy</span>
          <span className="secondaryText">
            We are here to assist you in finding your dream property. Your
            comfort is our priority, and we believe in making your real estate
            journey seamless.
          </span>

          <div className="flexColStart contactModes">
            {/* Call option */}
            <div className="flexStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <MdCall size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Call</span>
                    <span className="secondaryText">91-9359459707</span>
                  </div>
                </div>
                <div className="flexCenter button">Call now</div>
              </div>
            </div>

            {/* Message option */}
            <div className="flexStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <HiChatBubbleBottomCenter size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Message</span>
                    <span className="secondaryText">Send us a Message</span>
                  </div>
                </div>
                <div className="flexCenter button">Message now</div>
              </div>
            </div>
          </div>
        </div>

        {/* right side */}
        <div className="flexEnd c-right">
          <div className="image-container">
            <img src="./contact.jpg" alt="Namaste Estates Contact" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
