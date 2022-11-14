import React from "react";

/************ Import components **********************************/
import Banner from "../components/Banner";
import About from "./HomePage/About";
import Find from "./HomePage/Find";
import OurPartner from "./HomePage/OurPartner";

// // import FindThejob from "./Find";

// import Find from "./HomePage/Find-jpo";
//
import Service from "./HomePage/Service";
import Slick from "./HomePage/Slider";
// // import Slider from "./HomePage/Slider/Slick";
import  Profile  from "./HomePage/Profile"
// // import WorkPage from "./Work";
// // import Work from "./Work";

const index = () => {
  return (
    <div className="container-fluid pe-0 p-0">
      <Banner />
      <OurPartner />
      <Service />
           <Profile/> 
      <About/>
    
      <Slick />
      <Find/>
  
      {/* <About />
      <Slick />
      // <Find></Find> */}
      {/* <FindThejob/> */}
      {/* <WorkPage/> */}
      {/* <Head></Head> */}
    </div>
  );
};

export default index;
