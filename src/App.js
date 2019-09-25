import React from "react";
import "./App.scss";

import SignUpForm from "./components/SignUp/SignUp";
import SigninForm from "./components/Signin/SigninForm";
import Map from "./components/Map/MapView";
// import Nav from "./components/LandingPage/Nav";
// import CenteredTabs from "./components/Lander/Landing";
import { Route } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";

function App() {
  return (
    <div className="App">
      {/* <LandingPage /> */}
      {/* <h1>Safe Routes</h1> */}
      {/* <CenteredTabs /> */}
      <Route exact path="/" component={LandingPage} />
      <Route path="/register" component={SignUpForm} />
      <Route path="/routes" component={Map} />
      {/* <Map /> */}
      {/* <Nav /> */}
      {/* <SigninForm /> */}
      {/* <SignUpForm /> */}
    </div>
  );
}

export default App;
