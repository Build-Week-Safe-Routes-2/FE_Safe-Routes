import React from "react";
import "./MapNav.scss";
import { Link } from "react-router-dom";
import Logo from "../LandingPage/Body/img/Group.svg";

const date = new Date();
function MapNav() {
  return (
    <>
      <div className="top-nav">
        <div className="top-nav-logo-container">
          <img src={Logo} alt="logo" />
          <h2>Safe Routes</h2>
        </div>
        <nav className="top-nav-links">
          <Link to="/" className="link-item-top">
            Home
          </Link>
          <Link to="/routes" className="link-item-top">
            Map
          </Link>
          <a href="#" className="link-item-top">
            Crash Statistics
          </a>
        </nav>
      </div>
      <div className="sub-nav-container">
        <div className="left-nav"></div>
        <div className="right-nav">
          <div id="map_-overview">
            <h3>Map Overview | Number of crashes</h3>
          </div>
          <div className="date-container">{date.toString()}</div>
        </div>
      </div>
    </>
  );
}

export default MapNav;
