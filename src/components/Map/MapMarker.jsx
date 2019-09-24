import React from "react";
import "./Marker.scss";

const MapMarker = props => {
  const { name, color } = props;
  return (
    <div>
      <div
        className="pin bounce"
        style={{ background: color, pointer: "cursor" }}
        title={name}
      />
      <div className="pulse" />
    </div>
  );
};

export default MapMarker;
