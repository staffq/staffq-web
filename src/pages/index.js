import React from "react";

/************ Import components **********************************/
import Banner from "../components/Banner";
import HomePage from "./HomePage";



const index = () => {
  return (
    <div className="container-fluid pe-0 p-0">
      <Banner />
      <HomePage/>
    
    </div>
  );
};

export default index;
