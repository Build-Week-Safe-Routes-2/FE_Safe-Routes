import React from "react";
import "../../reset.scss";
import "../../../index.scss";
import "./HeroStyle.scss"
import "./hero.scss"
import pin from './images/undraw_directions_x53j (2).svg';
import Rectangle from './images/Rectangle.png';
import lightRec from './images/Rectangle (1).png'
import bottomRec from './images/Vector.png'

const Hero = (props) => {
  return (
 <div>
    

  <div className="mainContainer">

  <div className="waveBack">
      <img src={Rectangle} alt="" className="back" />
      <img src={lightRec} alt='' className="back" />
      <img src={bottomRec} alt='' className="backBottom"/>
    </div>
    
    <div className="navWrap">

        <h1>Safe Routes</h1>
     
       <div className="navLinks">
          <a href="#">Sign In</a>
          <a href="#">Login</a>
       </div>
    </div>
    <div className="heroWrap">
      <div className="missionWrap">
         <h2>Planning safety first</h2>
         <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint, esse eum assumenda accusantium cumque illum provident impedit fuga nisi aliquid dolorum id. Iusto aliquam reprehenderit nisi dicta maiores amet earum?</p>
         <button>Start Here</button>
      </div>
       <div className="vectorContainer">
          <img src={pin} alt="map"></img>
       </div>
    </div>
  </div>
   <h1 className="test">Hello</h1>
  </div>
    );
};

export default Hero;
