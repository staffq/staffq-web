import React from "react";
import { Div } from "../../styles/find-description";
const Finddescription = () => {
  return (
    <>
      <Div className="">
        <div className="container-fluid p-0 background">
          <div className="bg-img">
            <img src="assets/images/Banner-find-box.jpg" width="100%" />
          </div>
          <div className="find-text">
            <h1>
              Find The Best Job <br></br>
              For You
            </h1>
          </div>
        </div>
        <div className="row mt-4 container">
          <div className="col-lg-1"></div>
          <div className="col-lg-5">
            <div className="ul-method container">
              <ul className="nav">
                <li className="nav-item">Home</li>
                <img
                  src="assets/images/left-icons.png"
                  className="nav-item one"
                  alt="img"
                />
                <li className="nav-item two">Find Jobs</li>
                <img
                  src="assets/images/left-icons.png"
                  className="nav-item one"
                  alt="img"
                />
                <li className="nav-item one">Job Description</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="row mt-5 container">
          <div className="col-lg-1"></div>
          <div className="col-lg-11 sm-upload">
          <p className="frontent">Front End Developer</p>
        <h4>Description</h4>
        <p>
          You should be a master in combining the art of design with the art of
          programming. Responsibilities will include translation of the UI/UX
          design wireframes to actual code that will produce visual elements of
          the application. You will be working with the product team designing
          and developing of the product.
        </p>
        <h5>Technical Skills</h5>
        <li>Advanced knowledge of JavaScript Proficient in JavaScript</li>
        <li>
          Proficient in JavaScript frameworks/libraries like React js is
          mandator
        </li>
        <li>
          {" "}
          Proficient understanding of web markup, including HTML5, CSS3 with
          strong interest in UX
        </li>
        <li>
          Basic understanding of server-side CSS pre-processing platforms, such
          as LESS and SASS
        </li>
        <li>
          Basic understanding of server-side CSS pre-processing platforms, such
          as LESS and SASS
        </li>
        <div>
          <h6>Soft Skills</h6>
          <li>Accuracy and attention to detail</li>
          <li>Good coding skills and curiosity to explore new technologies</li>
          <li>They should be methodical in their approach to design</li>
        </div>
          </div>
        </div>
      </Div>
    </>
  );
};

export default Finddescription;
