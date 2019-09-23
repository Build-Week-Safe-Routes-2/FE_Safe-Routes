import React from "react";
import "./App.css";

import LoginForm from './components/LoginForm';
import SigninForm from './components/SigninForm'

function App() {
  return (
    <div className="App">
      <h1>Safe Routes</h1>

			{/* <LoginForm/> */}
      <SigninForm />
    </div>
  );
}

export default App;
