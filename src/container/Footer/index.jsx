import React from "react";
import { Foot, SmFoot } from "./style";
import Link from "next/link";
// import {IoCall } from "react-icons/Io";
import { GrLocation, GrMail } from "react-icons/gr";

const Footer = () => {
  return (
    <>
      <Foot>
        <div className="mt-5">
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
                      <img src="assets/images/Logo.png" />
                    </div>
                  </div>
                  <div
                    className="col-lg-3 col-md-6 col-sm-12  "
                    style={{ marginTop: "60px" }}
                  >
                    <div>
                      <h5 className="text-white" style={{ fontSize: "24px" }}>
                        Our Services
                      </h5>
                      <div className="footer-one mt-">
                        <Link href="permanent-deployment">
                          <p>Permanent Deployment</p>
                        </Link>

                        <p>Contract to Hire</p>
                        <p>Payroll Services</p>
                        <p>Passthrough services</p>
                        <p>Offshore Recruitment Services</p>
                        <p>Onshore Recruitment Services</p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-lg-3 col-md-6 col-sm-12   foooter-other"
                    style={{ marginTop: "60px" }}
                  >
                    <div>
                      <h5 className="text-white" style={{ fontSize: "24px" }}>
                        Others
                      </h5>
                      <div className="footer-two mt-4">
                        <p>About Us</p>
                        <p>Blogs</p>
                        <p>FAQs</p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-lg-3 col-md-6 col-sm-12  "
                    style={{ marginTop: "60px" }}
                  >
                    <h5 className="text-white" style={{ fontSize: "24px" }}>
                      Contact Us
                    </h5>
                    <div className="mt-4 footer-contactus">
                      <span>
                        <img src="assets/images/location-image.png"></img>

                        <span className="pdding-left text-white">
                          Floor-3A,Sathyam{" "}
                          <span className="towers">Towers,6D</span>
                        </span>
                      </span>
                      <p className="infostaff">
                        {" "}
                        Bharathi Street,Valipalayam, Tiruppur, 641 601
                      </p>

                      {/* <IoCall/> */}

                      <div className="">
                        <img src="assets/images/call-image.svg"></img>
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
                          {" "}
                          info@staffq.org
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
                <p style={{ fontSize: "14px" }} className = "last-line">
                  {" "}
                  @StaffQ Consultancy Pvt. Ltd - All rights reserved 14-11-22 (5pm)
                  
                </p>
              </div>
              <div className="Foter">
                <p className="terms last-line " style={{ fontSize: "14px" }}   >
                  Terms of service
                </p>

                <p style={{ fontSize: "14px" }}  className = "last-line">Privacy policy</p>
              </div>
            </div>
          </div>
        </div>
      </Foot>

      <SmFoot>
        <div className="container mt-5">
          <div className="paddingtwoSide">
            <div>
              <div>
                <h5 className="mt-5 " style={{ paddingTop: "88px" }}>
                  Our Solutions
                </h5>
                <br></br>
                <div style={{ fontSize: "18px" }}>
                  <p>Permanent Deployment</p>
                  <p>Recruitment process outsourcing</p>
                  <p>Contract to Hire</p>
                  <p>Payroll Services</p>
                  <p>Passthrough services</p>
                  <p>Offshore Recruitment Services</p>
                  <p>Onshore Recruitment Services</p>
                </div>
              </div>
            </div>

            <div className="mt-5">
              <h5 style={{ paddingTop: "48px" }}>Careers</h5>
              <br></br>
              <div className="" style={{ fontSize: "18px" }}>
                <p>Permanent recruitment</p>
                <p>Recruitment process outsourcing</p>
                <p>General staffing</p>
                <p>Specialty staffing</p>
                <p>Headhunting</p>
              </div>
            </div>
            <div className="mt-5">
              <h5 className="mt-3" style={{ paddingTop: "40px" }}>
                Contact Us
              </h5>
              <br></br>
              <div style={{ fontSize: "18px" }}>
                <span>
                  <img src="assets/images/location-image.png"></img>

                  <span className="pdding-left text-white">
                    Floor-3A,Sathyam Towers,6D
                  </span>
                </span>
                <p className="pdding-lef">
                  {" "}
                  Bharathi Street,Valipalayam,<br></br> Tiruppur, 641 601
                </p>

                <div className="">
                  <img src="assets/images/call-image.svg"></img>
                  <span style={{ paddingLeft: "9px" }}> +91 9629938033</span>
                  <p style={{ paddingLeft: "33px" }}> +91 421 3552738</p>
                </div>
                <br></br>
                <p>
                  {" "}
                  <GrMail />{" "}
                  <span style={{ paddingLeft: "15px" }}>
                    {" "}
                    info@staffq.org
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
          <p className="text-center " style={{ marginTop: "34px" }}>
            {" "}
            @ StaffQ. All rights reserved 14-11-22 (5pm)
          </p>
          <div className="d-flex  justify-content-spacebetween">
            <p style={{ fontSize: "14px" }}>Privacy policy</p>
            <p style={{ fontSize: "14px" }}>Terms of service</p>
          </div>
        </div>
      </SmFoot>
    </>
  );
};

export default Footer;
