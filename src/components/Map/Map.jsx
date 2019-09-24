import React from 'react'
import GoogleMapReact from 'google-map-react';



function Map(props) {
    return( 
     <div style={{
         height:'100vh',
         width:'100%',
     }}>
         <GoogleMapReact
              bootstrapURLKeys={{ key: "AIzaSyCCdxVw0N2ydpKJ_yOm3VQgQzpq4rtSgBE" }}
              defaultCenter={props.center}
              defaultZoom={props.zoom}
         >
         </GoogleMapReact>
     </div>
    )

}
 Map.defaultProps = {
     center:{lat: 30.2672, lng: -97.7431 },
     zoom:11,
 }
export default Map;