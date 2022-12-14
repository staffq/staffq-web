import React from "react";
import About from "./About";
import Find from "./Find";
import OurPartner from "./OurPartner";
import Service from "./Service";
import Slick from ".//Slider";

import Profile from "./Profile";

const HomePage = () => {
  return (
    <div>
      <OurPartner />
      <Service />
      <Profile />
      <About />
      <Slick />
      <Find />
    </div>
  );
};

export default HomePage;
