import React from "react";
import "./App.scss";
import Map from "./components/Map/MapView";
import { Route } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import SigninHero from "./components/Signin/Hero/SigninHero";
import SignHero from "./components/SignUp/SignHero/SignHero";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={LandingPage} />
      <Route path="/register" component={SignHero} />
      <Route path="/login" component={SigninHero} />
      <Route path="/routes" component={Map} />
    </div>
  );
}

export default App;
