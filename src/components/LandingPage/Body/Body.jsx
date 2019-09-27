import React from "react";
import "./Body.scss";
import rightPlace from "./img/rightPlace.svg";
import globe from "./img/globe.svg";
import pins from "./img/Group.svg";
import title from "./img/topTitle.svg";

const Body = () => {
  //
  return (
    <>
      <div className="block">
        <h3>Finding a better Route Together</h3>
        <p>
          {" "}
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta
          perferendis nisi nemo suscipit cumque?{" "}
        </p>
        <div className="bodyHeadContainer">
          <img src={title} alt="map" className="mapDark" />
        </div>
        <div className="featureWrap">
          <div className="featureOne">
            <img src={rightPlace} alt="map" className="mapLight" />
          </div>
          <div className="infoRightWrap">
            <div className="infoRight">
              <div className="pinHead">
                <img src={pins} alt="map" className="pins" />
                <h4>Header of some sort</h4>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
                corporis asperiores a molestiae, magni nihil sint delectus earum
                eveniet tempore? Lorem ipsum, dolor sit amet consectetur
                adipisicing elit. Veniam error sit explicabo ipsa, enim quisquam
                accusamus cupiditate a possimus ipsam?
              </p>
            </div>
          </div>
        </div>
        <div className="infoLeftWrap">
          <div className="leftContainer">
            <div className="pinHead2">
              <h4>Header of some sort</h4>
              <img src={pins} alt="map" className="pins2" />
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
              corporis asperiores a molestiae, magni nihil sint delectus earum
              eveniet tempore? Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Veniam error sit explicabo ipsa, enim quisquam
              accusamus cupiditate a possimus ipsam?
            </p>
          </div>
          <img src={globe} alt="map" className="globe" />
        </div>
      </div>
    </>
  );
};

export default Body;
