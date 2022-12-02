import React from "react";
import Link from "next/link";

import { AboutBg, Medium } from "../../../styles/about-style";

const About = () => {
  return (
    <>
      <AboutBg>
        <div className="container-fluid">
          <div className="About-section">
            <h2 className="">Why People Choose StaffQ?</h2>
            <p className="about-p-tag">
              {" "}
              We have found that the best way to get them is with up front
              research – of your company, competitors,<br></br> target market
              and customer psychographics
            </p>
          </div>
          <div className="container">
            <div className="row mt-5">
              <div className="col-lg-5 col-md-12 col-sm-12 medium-one">
                <div className="aboutImage">
                  <img src="assets/images/about-img.webp" width="100%" alt="img" /><br></br>
                  <br></br> 
                </div>
              </div>
              <div className="col-lg-7 col-md-12 col-sm-12 fs-5  medium-two">
                <div>
                  <p className="AboutPtext">
                    StaffQ Consultancy Private Limited is a trusted HR Service
                    provider based in India’s technological hub, Tirupur was set
                    up in the year 2020. Since its inception in 2020, the
                    company is progressing under the guidance of a dynamic
                    leadership team with in-depth industry knowledge including
                    legal, compliance, process, technology in the HR domain and
                    backed by a dedicated team of professionals who have vast
                    experience of working in various reputed industries. We at
                    STAFFQ have achieved several milestones under the expert
                    directions of Mr Manoj Kumar and Mr Soorya Narayanan
                    Directors of the company. Their futuristic approach and
                    strong analytical abilities enable us to cater to the needs
                    of the clients, most efficiently. We have developed an
                    expertise in providing a gamut of services to business
                    organizations for their increasing demands.
                  </p>
                  <Link href="/about-us">
                    <button className="aboutbtn">
                      <span className="about">About Us</span>
                    </button>
                  </Link>
                  <br></br> <br></br>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AboutBg>

      <Medium>
        <div className="container-fluid">
          <div className="About-section">
            <p className="h_two">Why People Choose StaffQ?</p>
            <p>
              {" "}
              We have found that the best way to get them is with up front
              research – of your company, competitors,<br></br> target market
              and customer psychographics
            </p>
          </div>
          <div className="container">
            <div className="aboutImage">
              <img src="assets/images/about-img.webp" width="100%" alt="img" />
              <br></br>
            </div>
            <div>
              <p className="AboutPtext">
                StaffQ Consultancy Private Limited is a trusted HR Service
                provider based in India’s technological hub, Tirupur was set up
                in the year 2020. Since its inception in 2020, the company is
                progressing under the guidance of a dynamic leadership team with
                in-depth industry knowledge including legal, compliance,
                process, technology in the HR domain and backed by a dedicated
                team of professionals who have vast experience of working in
                various reputed industries. We at STAFFQ have achieved several
                milestones under the expert directions of Mr Manoj Kumar and Mr
                Soorya Narayanan Directors of the company. Their futuristic
                approach and strong analytical abilities enable us to cater to
                the needs of the clients, most efficiently. We have developed an
                expertise in providing a gamut of services to business
                organizations for their increasing demands.
              </p>
              <Link href="/about-us">
                <button className="aboutbtn">
                  <span className="about">About Us</span>
                </button>
              </Link>
              <br></br> <br></br>
            </div>
          </div>
        </div>
      </Medium>
    </>
  );
};

export default About;
