import React from "react";
import "../../reset.scss";
import "../../../index.scss";
import "./footer.scss";
import logo from "./assets/Group.svg";
import { Link } from "react-router-dom";
import { FaFacebook, FaGithub, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="footer-wrapper">
        <div className="footer-container">
          <div className="footer-nav-container">
            <nav className="left-nav">
              <Link to="/" className="footer-link">
                About
              </Link>
              <Link to="/" className="footer-link">
                Contact
              </Link>
              <Link to="/" className="footer-link">
                FAQ
              </Link>
              <Link to="/" className="footer-link">
                GitHub
              </Link>
            </nav>
            <nav className="right-nav">
              <Link to="/login" className="footer-link">
                Login
              </Link>
              <Link to="/register" className="footer-link">
                Sign Up
              </Link>
              <Link to="/" className="footer-link">
                Updates
              </Link>
              <Link to="/" className="footer-link">
                Blog
              </Link>
              <Link to="/" className="footer-link">
                Mailing List
              </Link>
            </nav>
          </div>
          <div className="footer-hero">
            <div className="logo-container">
              <img src={logo} alt="logo" />
              <h3>Safe Routes</h3>
            </div>
            <div className="story-container">
              <p>
                Find out where you are going, or where you are. Check the map,
                and plan your route accordingly. You can select any city, state,
                or country and view real-time or historical statistics for that
                area.
              </p>
            </div>
            <div className="footer-links-container">
              <a href="https://www.facebook.com">
                <FaFacebook />
              </a>
              <a href="http://github.com">
                <FaGithub />
              </a>
              <a href="http://twiter.com">
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
