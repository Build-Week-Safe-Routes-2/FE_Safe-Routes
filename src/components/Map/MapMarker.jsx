import React from "react";

const MapMarker = props => {
  const { name } = props;
  return (
    <div>
      <h1>{name}</h1>
    </div>
  );
};

export default MapMarker;
