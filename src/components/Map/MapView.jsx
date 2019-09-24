import React from "react";
import MapNav from "../MapNav/MapNav";
import Map from "./Map";

function MapView() {
  return (
    <div>
      <div>
        <MapNav />
      </div>

      <Map />
    </div>
  );
}

export default MapView;
