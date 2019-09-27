import React from "react";
import Geocode from "react-geocode";
import axios from "axios";
import './MapSearch.scss'

// Context
import { MapMarkers } from '../../context/MapMarkerContext';

function MapSearch({changeCenter, updateHistory}) {
	const [address, setAddress] = React.useState({ address: ""});
	const {mapMarkers, setMapMarkers} = React.useContext(MapMarkers);
	
  const changeHandler = e => {
    // console.log(e.target.value);
    setAddress({ address: e.target.value });
  };

  const submitHandler = async e => {
		e.preventDefault();
		if(address.address !== "") {
			// Display loading screen to the user
			setMapMarkers({...mapMarkers, isLoading: true})

			// Add the user search to the history menu in the left panel
			updateHistory(address);

			// Get coordinates from a string
			Geocode.setApiKey(`AIzaSyCCdxVw0N2ydpKJ_yOm3VQgQzpq4rtSgBE`);
			Geocode.setLanguage("en");
			const coords = await Geocode.fromAddress(address.address);

			// Change the center view of the map
			changeCenter(coords.results[0].geometry.location);

			// Hit DS API and create unique set of markers
			const payload = coords.results[0].geometry.location
			axios.post("https://saferoads.herokuapp.com/api", payload)
			.then(res => {
				console.log("DATA FROM .THEN", res.data.data)
				setMapMarkers({markers:res.data.data, isLoading: false})
			})
			.catch(err => console.log(err))
			// Context Setter
			setAddress({address: ""});
		}
	};
	
  return (
    <div className="mapSearch__container" >
			<h2 className="mapSearch__header">Search A City Or Address</h2>
			<div className="mapSearch__form-container">
				<form onSubmit={submitHandler} className="mapSearch__form">
					<input
						type="text"
						name="address"
						className="mapSearch__input"
						placeholder="City / Address"
						value={address.address}
						onChange={changeHandler}
					/>
					<button className="mapSearch__button">Submit</button>
				</form>
			</div>
    </div>
  );
}

export default MapSearch;
