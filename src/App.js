import React from "react";
import "./App.css";

import SignUpForm from "./components/SignUp/SignUp";
import SigninForm from "./components/Signin/SigninForm";
import Map from "./components/GoogleMaps/Map";
const token = "AIzaSyCCdxVw0N2ydpKJ_yOm3VQgQzpq4rtSgBE";

function App() {
  return (
    <div className="App">
      <h1>Safe Routes</h1>
      <div style={{ width: "100vw", height: "100vh" }}>
        <Map
          googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${token}`}
          loadingElement={<div style={{ height: "100%" }} />}
          containerElement={<div style={{ height: "100%" }} />}
          mapElement={<div style={{ height: "100%" }} />}
        />
      </div>
      {/* <SigninForm /> */}
      {/* <SignUpForm /> */}
    </div>
  );
}

export default App;
