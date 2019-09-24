import React from "react";
import "./App.css";

import SignUpForm from "./components/SignUp/SignUp";
import SigninForm from "./components/Signin/SigninForm";
const token = "AIzaSyCCdxVw0N2ydpKJ_yOm3VQgQzpq4rtSgBE";

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
