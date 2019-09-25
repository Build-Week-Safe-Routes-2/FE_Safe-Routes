import React from "react";
import "./App.scss";


import SignUpForm from "./components/SignUp/SignUp";
import SigninForm from "./components/Signin/SigninForm";
import Map from "./components/Map/MapView";
import Nav from './components/LandingPage/Nav'
import CenteredTabs from './components/Lander/Landing'
import {Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h1>Safe Routes</h1>
      <Nav />
      {/* <CenteredTabs />
      <Route exact path="/" component={SignUpForm} />
      <Route path="/register" component={SigninForm} />
      <Route  path="/routes" component={Map} /> */}
      {/* <Map /> */}
      {/* <Nav /> */}
      {/* <SigninForm /> */}
      {/* <SignUpForm /> */}
    </div>
  );
}

export default App;
