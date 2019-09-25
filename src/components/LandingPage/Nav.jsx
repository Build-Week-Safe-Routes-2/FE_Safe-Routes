import React from 'react';
import './Land.scss'


function Nav(props) {
  
    return (
     <div>
        <div className="navWrap">
            <h1 className="navLogo">Safe Routes</h1>
            <div className="navLinks">
                <a href="#">Sign Up</a>
                <a href="#">Login</a>
            </div>
        </div>
      <div className="headerWrap">
          <h2>Mission Title</h2>
      </div> 
     <div className="featureWrap">
        <div className="feature">One</div>
        <div className="feature">Two</div>
        <div className="feature">Three</div>
     </div>
     <footer>
        <div className="footerWrap"></div>


     </footer>


       
       
    </div>
    )
}

export default Nav;