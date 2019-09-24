import React from "react";
import styled from "styled-components";

const Marker = styled.div`
  width: 15px;
  height: 15px;
  background: red;
  border-radius: 100%;
`;

const MapMarker = props => {
  const { name } = props;
  return (
    <div>
      <Marker
        onClick={() => {
          console.log(name);
        }}
      ></Marker>
    </div>
  );
};

export default MapMarker;
