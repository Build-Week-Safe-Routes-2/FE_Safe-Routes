<<<<<<< HEAD
import React from 'react';
import Map from './Map';


function MapMarker(){
    return (
        <div>
            <h1>h</h1>


        </div>
    )




}
 
export default MapMarker;
=======
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
>>>>>>> bf59c75377aacfed59bc80edd2d1b2d7965f995a
