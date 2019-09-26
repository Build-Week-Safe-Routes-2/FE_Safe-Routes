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
              <Link className="footer-link">About</Link>
              <Link className="footer-link">Contact</Link>
              <Link className="footer-link">FAQ</Link>
              <Link className="footer-link">GitHub</Link>
            </nav>
            <nav className="right-nav">
              <Link className="footer-link">Login</Link>
              <Link className="footer-link">Sign Up</Link>
              <Link className="footer-link">Updates</Link>
              <Link className="footer-link">Blog</Link>
              <Link className="footer-link">Mailing List</Link>
            </nav>
          </div>
          <div className="footer-hero">
            <div className="logo-container">
              <img src={logo} />
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
              <a href="#">
                <FaFacebook />
              </a>
              <a href="#">
                <FaGithub />
              </a>
              <a href="#">
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
