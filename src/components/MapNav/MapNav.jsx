import React from "react";
import Geocode from "react-geocode";

function MapNav() {
  const [address, setAddress] = React.useState({ address: "" });
  const [locale, setLocale] = React.useState({ lat: "", lng: "" });

  const getLocation = location => {
    Geocode.setApiKey("AIzaSyCCdxVw0N2ydpKJ_yOm3VQgQzpq4rtSgBE");
    Geocode.setLanguage("en");
    Geocode.fromAddress(location).then(
      response => {
        const { lat, lng } = response.results[0].geometry.location;
        setLocale({ lat: lat, lng: lng });
      },
      error => {
        console.error("error in getLocation function", error);
      }
    );
  };

  const changeHandler = e => {
    // console.log(e.target.value);
    setAddress({ address: e.target.value });
  };

  const submitHandler = e => {
    e.preventDefault();
    getLocation(address.address);
    // console.log(address.address);
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
