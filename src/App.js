import React from "react";
import "./App.scss";

import SignUpForm from "./components/SignUp/SignUp";
import SigninForm from "./components/Signin/SigninForm";
import Map from "./components/Map/MapView";
import { Route } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import SignHero from "./components/SignUp/SignHero/SignHero";

function App() {
  return (
    <div className="App">
      {/* <SignHero /> */}
      {/* <h1>Safe Routes</h1> */}
      {/* <CenteredTabs /> */}
      <Route exact path="/" component={LandingPage} />
      <Route path="/register" component={SignHero} />
      <Route path="/login" component={SigninForm} />
      <Route path="/routes" component={Map} />
      {/* <Map /> */}
      {/* <Nav /> */}
      {/* <SigninForm /> */}
      {/* <SignUpForm /> */}
    </div>
  );
}

export default App;
