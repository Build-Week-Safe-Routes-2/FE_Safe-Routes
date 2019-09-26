import React from "react";
import Hero from "./Hero/Hero";
import Footer from "./Footer/Footer";
import Body from "./Body/Body";
import LowerBody from "./Body/LowerBody";

const LandingPage = () => {
  return (
    //
    //  Components
    //
    <div>
      <Hero />
      <Body />
      <LowerBody />
      <Footer />
    </div>
  );
};

export default LandingPage;
