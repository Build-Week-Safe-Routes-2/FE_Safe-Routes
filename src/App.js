import React from "react";
import "./App.css";

import SignUpForm from "./components/SignUp/SignUp";
import SigninForm from './components/Signin/SigninForm'
import Map from './components/Map/Map';
function App() {
  return (
    <div className="App">
     {/* <SigninForm /> */}
			{/* <SignUpForm /> */}
			<Map />
    </div>
  );
}

export default App;
