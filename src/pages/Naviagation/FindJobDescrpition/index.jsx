import Link from "next/link";
import React from "react";
import { Div } from "../../../styles/find-description";
const Finddescription = ({ data }) => {
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
        <div className="container-fluid bg-one">
          <div className="row w-100">
            <div className="col-lg-1"></div>
            <div className="col-lg-5">
              <div className="mt-4">
                <ul className="nav">
                  <li className="nav-item">Home</li>
                  <li className="nav-item">
                    {" "}
                    <img src="assets/images/icons-right.svg"></img>
                  </li>

                  <li className="nav-item">Find jobs</li>
                  <img src="assets/images/icons-right.svg"></img>
                
                  <li className="nav-item ps-3">Job Description</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="row mt-4  find-bottom container">
            <div className="col-lg-1"></div>
            <div className="col-lg-11 sm-upload">
              <p className="frontent text-capitalize">{data?.jobTitle}</p>
              <h4>Description</h4>
              <p>
                {data?.jobSoftSkills}
            
              </p>
              <h5>Technical Skills</h5>
              <p className="technical pt-2">{data?.jobTechnicalSkills}</p>
              {/* <div className="technical">
                
                <li className="pt-2 dots">
                  Advanced knowledge of JavaScript Proficient in JavaScript
                </li>

                <li className="pt-3 dots">
                  Proficient in JavaScript frameworks/libraries like React js is
                  mandator
                </li>
                <li className="mt-2 dots">
                  {" "}
                  Proficient understanding of web markup, including HTML5, CSS3
                  with strong interest in UX
                </li>
                <li className="mt-3 dots">
                  Basic understanding of server-side CSS pre-processing
                  platforms, such as LESS and SASS
                </li>
                <li className="mt-3 dots">
                  Basic understanding of server-side CSS pre-processing
                  platforms, such as LESS and SASS
                </li>
              </div> */}

              <div>
                <h6>Soft Skills</h6>
                <p>
                  {data?.jobTechnicalSkills}
                </p>
                {/* <li className="mt-3 dots">Accuracy and attention to detail</li>
                <li className="mt-3 dots">
                  Good coding skills and curiosity to explore new technologies
                </li>
                <li className="mt-3 dots">
                  They should be methodical in their approach to design
                </li> */}
                <div className="small-btn">
                  <Link
                    href={{
                      pathname: "/cv-apply",
                      query: { cv: data?.jobTitle },
                    }}
                  >
                    <button className="btn btnn">Apply Now</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Div>
    </>
  );
};

export default Finddescription;
