import React from "react";
import "./Hero.css";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import SearchBar from "../SearchBar/SearchBar";

const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-container">
        {/* left side */}
        <div className="flexColStart hero-left">
          <div className="hero-title">
            <div className="orange-circle" />
            <motion.h1
              initial={{ y: "2rem", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 2,
                type: "ease-in",
              }}
            >
              Explore <br />
              Your Dream
              <br /> 
            </motion.h1>
          </div>
          <div className="flexColStart secondaryText flexhero-des">
            <span>Discover a variety of homes that perfectly suit you and your family</span>
            <span>Forget the challenges in finding the ideal residence for you in the heart of India</span>
          </div>

          <SearchBar />

         
          <div className="flexCenter stats">
            <div className="flexColCenter stat">
              <span>
                <CountUp start={0} end={12} duration={2} /> <span>+</span>
              </span>
              <span className="secondaryText">Developers</span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp start={140} end={200} duration={4} /> <span>+</span>
              </span>
              <span className="secondaryText">Happy Customer</span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp end={28} /> <span>+</span>
              </span>
              <span className="secondaryText">Contracts</span>
            </div>
          </div>
        </div>

        {/* right side */}
        <div className="flexCenter hero-right">
          <motion.div
            initial={{ x: "7rem", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 2,
              type: "ease-in",
            }}
            className="image-container"
          >
         <img src="./hero-image.png" alt="houses" />
                   </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
