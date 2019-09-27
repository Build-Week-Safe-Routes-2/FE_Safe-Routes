import React from "react";
import { Link } from "react-router-dom";
import SigninForm from "../SigninForm";
import Footer from "../../LandingPage/Footer/Footer";
import Rectangle from "./images/Rectangle.png";
import lightRec from "./images/Rectangle (1).png";
import bottomRec from "./images/Vector.png";
import Logo from "./images/Group.svg";
import signIn from "./images/Signin.svg";
import "../../reset.scss";
import "../../../index.scss";
import "./HeroStyle.scss";

const SigninHero = (props) => {
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
            <div className="logo-signin-container">
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
              <SigninForm props={props}/>
            </div>
            <div className="vectorContainer">
              <img src={signIn} alt="map"></img>
            </div>
          </div>
        </div>
      </div>
      <div className="space-hack" />
      <Footer />
    </>
  );
};

export default SigninHero;
