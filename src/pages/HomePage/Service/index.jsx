import React from "react";
import { ServiceBg, Medium } from "../../../styles/service-style";

import { BsArrowRight } from "react-icons/bs";
import { Card } from "../../../components/Card/style";
const Service = () => {
  return (
    <>
      <ServiceBg className="container-fluid p-0  ">
        <section className="mt-3">
          <div className="container ">
            <div className="row ">
              <div className="col-lg-6 col-md-12 col-sm-12 mt-5">
                <div>
                  <div className="small-center">
                    <h2>Services we offer</h2>
                    <p className="service-p-tag mb-0">
                      StaffQ Consultancy is known for its IT and Non-IT recruits{" "}
                      <br></br>
                      to companies in various Domain.
                    </p>
                    <p className="sm-scrren-p-tag mb-0">
                      Lorem ipsum dolor sit amet, consectetu r adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                  <div className="serviceImage">
                    <img
                      src="assets/images/Woman-picture.png"
                      width="100%"
                      className="service-img-one"
                      alt="img"/>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12 mt-3  ServiceText">
                <div className="service-card-page ">
                  <div className="">
                    <div className="sm-card">
                      <Card
                        width="282px"
                        // backgroundColor="#FFFFFF"
                        border-radius="10px"
                        className="sriram"
                        style={{ paddingBottom: "8px" }}
                      >
                        <h5>Permanent Deployment</h5>
                        <p className="mb-0">
                          {" "}
                          Permanent staffing is attaining <br></br> great 
                          importance in the human ....
                        </p>
                        <span className="learnmore">
                          Learn more{" "}
                          <BsArrowRight className="fs-3  LeftArrow " />
                          <div className="VectorImage">
                            <img src="assets/images/VectorImage.svg"  alt="img"/>
                          </div>
                        </span>
                      </Card>
                    </div>
                  </div>
                  <div className="sm-card">
                    <div className="smcard-ONE">
                      <Card
                        width="282px"
                        style={{ paddingBottom: "8px" }}
                        backgroundColor="#FFFFFF"
                        border-radius="10px"
                        className="sriram"
                      >
                        <h5>Contract to Hire</h5>
                        <p className="mb-0">
                          {" "}
                          StaffQ Consultancy Services<br></br> involves contract-to-hire staffing ...
                        </p>
                        <span className="learnmore">
                          Learn more{" "}
                          <BsArrowRight className="fs-3  LeftArrow " />
                          <div className="VectorImage">
                            <img src="assets/images/VectorImage.svg" alt="img"/>
                          </div>
                        </span>
                      </Card>
                    </div>
                  </div>
                </div>

                <div className="sm-card">
                  <div className="smcard-box">
                    <Card
                      width="282px"
                      style={{ paddingBottom: "8px" }}
                      backgroundColor="#FFFFFF"
                      border-radius="10px"
                      className="sriram"
                    >
                      <h5>Payroll Services</h5>
                      <p className="mb-0">
                        {" "}
                        Payroll outsourcing is the act of <br></br>  delegating payroll administration ...
                      </p>
                      <span className="learnmore">
                        Learn more <BsArrowRight className="fs-3  LeftArrow " />
                        <div className="VectorImage">
                          <img src="assets/images/VectorImage.svg" alt="img"/>
                        </div>
                      </span>
                    </Card>
                  </div>
                </div>
                <div className="service-card-page ">
                  <div className="sm-card">
                    <div className="smcard">
                      <Card
                        width="282px"
                        style={{ paddingBottom: "8px" }}
                        // backgroundColor="#FFFFFF"
                        border-radius="10px"
                        className="sriram"
                      >
                        <h5>Passthrough services </h5>
                        <p className="mb-0">
                          {" "}
                       
                          We take care of the Entire or part <br></br> of recruitment activities...
                        </p>
                        <span className="learnmore">
                          Learn more{" "}
                          <BsArrowRight className="fs-3 LeftArrow " />
                          <div className="VectorImage">
                            <img src="assets/images/VectorImage.svg" alt="img"/>
                          </div>
                        </span>
                      </Card>
                    </div>
                  </div>
                  <div className="sm-card">
                    <div className="smcard-ONE">
                      <Card
                        className="sri"
                        width="282px"
                        style={{ paddingBottom: "8px" }}
                        backgroundColor="#FFFFFF"
                        border-radius="10px"
                      
                      >
                        <h5>Offshore Recruitment</h5>
                        <p className="mb-0">
                          {" "}
                          Onsite recruitment is a process<br></br>of meeting your Specific  bulk ...
                        </p>
                        <span className="learnmore">
                          Learn more{" "}
                          <BsArrowRight className="fs-3  LeftArrow " />
                          <div className="VectorImage">
                            <img src="assets/images/VectorImage.svg" alt="img"/>
                          </div>
                        </span>
                      </Card>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
       
        </section>
      </ServiceBg>

      <Medium>
        <div className="container">
          <div className="mt-5">
            <div className="small-center">
              <h2 className="pt-3">Services we offer</h2>

              <p className="sm-scrren-p-tag mb-0 pt-1">
                Lorem ipsum dolor sit amet, consectetu r adipiscing elit,
                <br></br>
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua.
              </p>
            </div>
            <div className="serviceImage">
            <img
                      src="assets/images/Woman-picture.png"
                      width="100%"
                      className="service-img-one"
                      alt="img"/>
            </div>
            <div>
              <div className="one">
                <Card
                  width="282px"
                  style={{ paddingBottom: "8px" }}
                  backgroundColor="#FFFFFF"
                  border-radius="10px"
                  className="sriram"
                >
                  <h5>Permanent Deployment</h5>
                  <p className="mb-0">
                    {" "}
                    Lorem ipsum dolor sit amet, conse ctetur adipiscing elit,
                    sed do eius
                  </p>
                  <span className="learnmore">
                    Learn more <BsArrowRight className="fs-3  LeftArrow " />
                    <div className="VectorImage">
                      <img src="assets/images/VectorImage.svg"  alt="img"/>
                    </div>
                  </span>
                </Card>
                <Card
                  width="282px"
                  style={{ paddingBottom: "8px" }}
                  backgroundColor="#FFFFFF"
                  border-radius="10px"
                  className="sriram"
                >
                  <h5>Contract to Hire</h5>
                  <p className="mb-0">
                    {" "}
                    Lorem ipsum dolor sit amet, conse ctetur adipiscing elit,
                    sed do eius
                  </p>
                  <span className="learnmore">
                    Learn more <BsArrowRight className="fs-3  LeftArrow " />
                    <div className="VectorImage">
                      <img src="assets/images/VectorImage.svg"  alt="img"/>
                    </div>
                  </span>
                </Card>
              </div>
              <div className="two">
                <Card
                  width="282px"
                  style={{ paddingBottom: "8px" }}
                  backgroundColor="#FFFFFF"
                  border-radius="10px"
                  className="sriram"
                >
                  <h5>Payroll Services</h5>
                  <p className="mb-0">
                    {" "}
                    Lorem ipsum dolor sit amet, conse ctetur adipiscing elit,
                    sed do eius
                  </p>
                  <span className="learnmore">
                    Learn more <BsArrowRight className="fs-3  LeftArrow " />
                    <div className="VectorImage">
                      <img src="assets/images/VectorImage.svg" alt="img"/>
                    </div>
                  </span>
                </Card>
              </div>
              <div className="one">
                <Card
                  width="282px"
                  style={{ paddingBottom: "8px" }}
                  backgroundColor="#FFFFFF"
                  border-radius="10px"
                  className="sriram"
                >
                  <h5>Passthrough services</h5>
                  <p className="mb-0">
                    {" "}
                    Lorem ipsum dolor sit amet, conse ctetur adipiscing elit,
                    sed do eius
                  </p>
                  <span className="learnmore">
                    Learn more <BsArrowRight className="fs-3  LeftArrow " />
                    <div className="VectorImage">
                      <img src="assets/images/VectorImage.svg"  alt="img"/>
                    </div>
                  </span>
                </Card>
                <Card
                  width="282px"
                  style={{ paddingBottom: "8px" }}
                  backgroundColor="#FFFFFF"
                  border-radius="10px"
                  className="sriram"
                >
                  <h5>Offshore Recruitment</h5>
                  <p className="mb-0">
                    {" "}
                    Lorem ipsum dolor sit amet, conse ctetur adipiscing elit,
                    sed do eius
                  </p>
                  <span className="learnmore">
                    Learn more <BsArrowRight className="fs-3  LeftArrow " />
                    <div className="VectorImage">
                      <img src="assets/images/VectorImage.svg"  alt="img"/>
                    </div>
                  </span>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </Medium>
    </>
  );
};

export default Service;
