import React from "react";
import "./App.scss";

import SignUpForm from "./components/SignUp/SignUp";
import SigninForm from "./components/Signin/SigninForm";
import Map from "./components/Map/MapView";

function App() {
  return (
    <div className="App">
      <h1>Safe Routes</h1>
      {/* <Map /> */}
      <SigninForm />
      {/* <SignUpForm /> */}
    </div>
  );
}

export default App;
