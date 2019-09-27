import React from "react";
import { Link } from "react-router-dom";
import "../../reset.scss";
import "../../../index.scss";
import "./SignUpHeroStyle.scss";
import Rectangle from "./images/Rectangle.png";
import lightRec from "./images/Rectangle (1).png";
import bottomRec from "./images/Vector.png";
import Sign from "./images/signup.svg";
import Logo from "./images/Group.svg";
import SignUp from "../SignUp";
import Footer from "../../LandingPage/Footer/Footer";

const SignHero = props => {
  return (
    <>
      <div>
        <div className="waveBack">
          <img src={Rectangle} alt="" className="back" />
          <img src={lightRec} alt="" className="backMiddle" />
          <img src={bottomRec} alt="" className="backBottom" />
        </div>
        <div className="mainContainer">
          <div className="navWrap">
            <div className="logo-signup-container">
              <img src={Logo} alt="logo" className="logoPin" />
              <h1>
                <Link to="/">Safe Routes</Link>
              </h1>
            </div>
            <div className="navLinks">
              <Link to="/register">Register</Link>
              <Link to="/login">Login</Link>
            </div>
          </div>
          <div className="heroWrap">
            <div className="missionWrap">
              <SignUp />
            </div>
            <div className="vectorContainer">
              <img src={Sign} alt="map"></img>
            </div>
          </div>
        </div>
      </div>
      <div className="space-hack" />
      <Footer />
    </>
  );
};

export default SignHero;
