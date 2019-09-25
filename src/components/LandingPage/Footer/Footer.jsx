import React from "react";
import "../../reset.scss";
import "../../../index.scss";
import "./footer.scss";
import bus from "./assets/undraw_bus_stop_h370.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-container">
        <div className="footer-hero">
          <div className="logo-container">
            <img />
            <h3>Safe Routes</h3>
          </div>
          <div className="story-container">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos praesentium in dicta at beatae quo ullam, minus
              necessitatibus! Aliquam fugit ipsam a maxime doloremque, sint amet
              incidunt obcaecati animi cum.
            </p>
          </div>
          <div className="footer-links-container">
            <i>a</i>
            <i>b</i>
            <i>c</i>
          </div>
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
        </div>
      </div>
    </div>
  );
};

export default Footer;
