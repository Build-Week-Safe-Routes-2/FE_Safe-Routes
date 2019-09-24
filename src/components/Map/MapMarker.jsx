import React from "react";

const MapMarker = props => {
  const { name, lat, lng } = props;
  return (
    <div>
      <h1>{name}</h1>
      <p>{lat}</p>
      <p>{lng}</p>
    </div>
  );
};

export default MapMarker;
