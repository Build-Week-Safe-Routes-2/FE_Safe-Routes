import React from "react";
import "./App.css";

import SignUpForm from "./components/SignUp/SignUp";
import SigninForm from "./components/Signin/SigninForm";
import Map from "./components/Map/Map";
function App() {
  return (
    <div className="App">
      <h1>Safe Routes</h1>
      <SigninForm />
      {/* <SignUpForm /> */}
    </div>
  );
}

export default App;
