import React from "react";
import { Link } from "react-router-dom";
import "../../reset.scss";
import "../../../index.scss";
import "./HeroStyle.scss";
import "./hero.scss";
import Rectangle from "./images/Rectangle.png";
import lightRec from "./images/Rectangle (1).png";
import bottomRec from "./images/Vector.png";
import Cars from "./images/colorCar.svg";
import Logo from "./images/Group.svg";

const Hero = props => {
  return (
    <div>
      <div className="waveBack">
        <img src={Rectangle} alt="" className="back" />
        <img src={lightRec} alt="" className="backMiddle" />
        <img src={bottomRec} alt="" className="backBottom" />
      </div>
      <div className="mainContainer">
        <div className="navWrap">
          <div className="logo">
            <img src={Logo} alt="logo" className="logoPin" />
            <h1>
              <Link to="/">Safe Routes</Link>
            </h1>
          </div>
          <div className="navLinks">
            <Link to="/register">Sign In</Link>
            <Link to="/login">Login</Link>
          </div>
        </div>
        <div className="heroWrap">
          <div className="missionWrap">
            <h2>Planning safety first</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint,
              esse eum assumenda accusantium cumque illum provident impedit fuga
              nisi aliquid dolorum id. Iusto aliquam reprehenderit nisi dicta
              maiores amet earum?
            </p>
            <Link to="/register">
              <button>Start Here</button>
            </Link>
          </div>
          <div className="vectorContainer">
            <img src={Cars} alt="map"></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
