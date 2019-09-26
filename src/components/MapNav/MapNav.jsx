import React from "react";
import Geocode from "react-geocode";
import axios from "axios";

// Context
import { MapMarkers } from '../../context/MapMarkerContext';

function MapNav({changeCenter, updateHistory}) {
	const [address, setAddress] = React.useState({ address: ""});
	const {mapMarkers, setMapMarkers} = React.useContext(MapMarkers);

	// console.log("THIS IS OUR CONTEXT", mapMarkers, setMapMarkers)
	
  const changeHandler = e => {
    // console.log(e.target.value);
    setAddress({ address: e.target.value });
  };

  const submitHandler = async e => {
		e.preventDefault();
		if(address.address !== "") {
			updateHistory(address);
			Geocode.setApiKey(`${process.env.REACT_APP_API_KEY}`);
			Geocode.setLanguage("en");
			const coords = await Geocode.fromAddress(address.address);
			// Send this to axios with auth POST req and send that data back up to the Map Component.
			console.log(coords.results[0].geometry.location);
			// Change the center view of the map
			changeCenter(coords.results[0].geometry.location);
			// Hit DS API
			setMapMarkers(coords.results[0].geometry.location);
			const payload = coords.results[0].geometry.location
			axios.post("http://saferoads.herokuapp.com/api", payload)
			.then(res => console.log(res))
			.catch(err => console.log(err))
			// Context Setter
			setAddress({address: ""});
		}
	};
	
  return (
    <div>
			<h4>Search a City OR <br/> a specific Address</h4>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          name="address"
          value={address.address}
          onChange={changeHandler}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default MapNav;
