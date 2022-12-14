import React from "react";

// import package *********************** //
import Link from "next/link";

import { GrMail } from "react-icons/gr";

// import style...............................//
import { Foot, SmFoot } from "./style";

const Footer = () => {
  return (
    <>
      <Foot>
        <div className="">
          <div className="container-fluid p-0 ">
            <section>
              <div className="container ">
                <div className="row">
                  <div
                    className="col-lg-3 col-md-6 col-sm-12  "
                    style={{ marginTop: "62px" }}
                  >
                    <div className="logo-footer">
                      {" "}
                      <Link href="/">
                        <img src="assets/images/Logo.png" alt="img" />
                      </Link>
                    </div>
                  </div>
                  <div
                    className="col-lg-3 col-md-6 col-sm-12  "
                    style={{ marginTop: "60px" }}
                  >
                    <div className="">
                      <p
                        className="text-white head p-tag"
                        style={{ fontSize: "24px" }}
                      >
                        Our Services
                      </p>
                      <div className="footer-one ">
                        <Link href="recruitment-process">
                          <span>Recruitment Process Outsourcing</span>
                        </Link>
                        <br></br>
                        <Link href="onshore-recruitment">
                          <span>Onshore Recruitment Services</span>
                        </Link>
                        <br></br>
                        <Link href="offshore-recruitment">
                          <span>Offshore Recruitment Services</span>
                        </Link>
                        <br></br>
                        <Link href="permanent-recruitment">
                          <span className="">Permanent Deployment</span>
                        </Link>
                        <br></br>
                        <Link href="payroll-services">
                          <span> Payroll Services</span>
                        </Link>{" "}
                        <br></br>
                        <Link href="contract-recruitment">
                          <span>Contract to Hire</span>
                        </Link>
                        <br></br>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-lg-3 col-md-6 col-sm-12   foooter-other"
                    style={{ marginTop: "60px" }}
                  >
                    <div className="">
                      <p
                        className="text-white head p-tag"
                        style={{ fontSize: "24px" }}
                      >
                        Others
                      </p>
                      <div className="footer-two ">
                        <Link href="about-us">
                          <span> About Us</span>
                        </Link>
                        <br></br>
                        <span> Blogs</span>
                        <br></br>
                        <span>FAQs</span>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-lg-3 col-md-6 col-sm-12   "
                    style={{ marginTop: "60px" }}
                  >
                    <p
                      className="text-white head p-tag"
                      style={{ fontSize: "24px" }}
                    >
                      Contact Us
                    </p>
                    <div className="mt-4 footer-contactus">
                      <span>
                        <img src="assets/images/location-image.png" alt="img" />

                        <span className="pdding-left ">
                          Floor-3A,Sathyam{" "}
                          <span className="towers">Towers,6D</span>
                        </span>
                      </span>
                      <p className="infostaff">
                        {" "}
                        Bharathi Street,Valipalayam, <br></br>Tiruppur, 641 601
                      </p>

                      {/* <IoCall/> */}

                      <div className="">
                        <img src="assets/images/call-image.svg" alt="img" />
                        <span style={{ paddingLeft: "10px" }}>
                          {" "}
                          +91 9629938033
                        </span>
                        <p className="infostaff">+91 421 3552738 </p>
                      </div>

                      <p>
                        {" "}
                        <GrMail />{" "}
                        <span className="me-3 infostaffq">
                        <a href="mailto:hello.staffq@gmail.com" className="a-tag">
                          {" "}
                          hello@staffq.in</a>
                        </span>{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div className=" container-fluid p-0">
            <div className="under-line"></div>
          </div>
          <div className="container mt-3">
            <div className="footerlast">
              <div>
                <p style={{ fontSize: "14px" }} className="last-line">
                  {" "}
                  2022 StaffQ Consultancy Pvt. Ltd - All rights reserved | Powered by ApplogiQ
                </p>
              </div>
              <div className="Foter">
                <p className="terms last-line " style={{ fontSize: "14px" }}>
                  Terms of service
                </p>

                <p style={{ fontSize: "14px" }} className="last-line">
                  Privacy policy
                </p>
              </div>
            </div>
          </div>
        </div>
      </Foot>

      <SmFoot>
        <div className="container  small-content">
          <div className="paddingtwoSide">
            <div>
              <div>
                <p className="mt-5 head" style={{ paddingTop: "2px" }}>
                  Our Solutions
                </p>
                <br></br>
                <div style={{ fontSize: "18px" }} className="font">
                  <Link href="recruitment-process">
                    <p>Recruitment Process Outsourcing</p>
                  </Link>
                  <Link href="onshore-recruitment">
                    <p>Onshore Recruitment Services</p>
                  </Link>
                  <Link href="offshore-recruitment">
                    <p>Offshore Recruitment Services</p>
                  </Link>

                  <Link href="permanent-recruitment">
                    <p className="">Permanent Deployment</p>
                  </Link>

                  <Link href="payroll-services">
                    <p> Payroll Services</p>
                  </Link>
                  <Link href="contract-recruitment">
                    <p>Contract to Hire</p>
                  </Link>
                </div>
              </div>
            </div>

            <div className="mt-5">
              <p style={{ paddingTop: "48px" }} className="head">
                Careers
              </p>
              <br></br>
              <div className="font" style={{ fontSize: "18px" }}>
                <p>Permanent recruitment</p>
                <p>Recruitment process outsourcing</p>
                <p>General staffing</p>
                <p>Specialty staffing</p>
                <p>Headhunting</p>
              </div>
            </div>
            <div className="mt-5">
              <p className="mt-3 head" style={{ paddingTop: "7px" }}>
                Contact Us
              </p>
              <br></br>
              <div style={{ fontSize: "18px" }} className="font">
                <span>
                  <img src="assets/images/location-image.png" alt="img" />

                  <span className="pdding-left text-white">
                    Floor-3A,Sathyam Towers,6D
                  </span>
                </span>
                <p className="pdding-lef">
                  {" "}
                  Bharathi Street,Valipalayam,<br></br> Tiruppur, 641 601
                </p>

                <div className="">
                  <img src="assets/images/call-image.svg" alt="img" />
                  <span style={{ paddingLeft: "9px" }}> +91 9629938033</span>
                  <p style={{ paddingLeft: "33px" }}> +91 421 3552738</p>
                </div>
                <br></br>
                <p>
                  {" "}
                  <GrMail />{" "}
                  
                  <span style={{ paddingLeft: "15px" }}>
                    <a href="emailto:hello.staffq@gmail.com" className="a-tag">
                    hello@staffq.in</a>
                  </span>{" "}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ..........................................underline code....................... */}

        <div className="container-fluid p-0 ">
          <div className="under-text"></div>
        </div>
        <div className="mt-5">
          <p className="text-center last-line " style={{ marginTop: "2px" }}>
            {" "}
            2022 StaffQ Consultancy Pvt. Ltd - All rights reserved | Powered by ApplogiQ
          </p>
          <div className="d-flex  justify-content-spacebetween">
            <p style={{ fontSize: "14px" }} className="last-line">
              Privacy policy
            </p>
            <p style={{ fontSize: "14px" }} className="last-line">
              Terms of service
            </p>
          </div>
        </div>
      </SmFoot>
    </>
  );
};

export default Footer;
