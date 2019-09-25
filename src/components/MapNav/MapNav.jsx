import React from "react";
import Geocode from "react-geocode";
import axiosWithAuth from "../../utils/axiosWithAuth";

function MapNav() {
  const [address, setAddress] = React.useState({ address: "" });

  const changeHandler = e => {
    // console.log(e.target.value);
    setAddress({ address: e.target.value });
  };

  const submitHandler = async e => {
    e.preventDefault();
		Geocode.setApiKey("AIzaSyCCdxVw0N2ydpKJ_yOm3VQgQzpq4rtSgBE");
    Geocode.setLanguage("en");
		const coords = await Geocode.fromAddress(address.address)
		// Send this to axios with auth POST req and send that data back up to the Map Component.
		console.log(coords.results[0].geometry.location);
	};
	
  return (
    <div>
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
