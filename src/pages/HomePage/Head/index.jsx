import React from "react";
import { Header, Second, SecondCard, Form } from "../../../styles/head-style";
import { GrMail } from "react-icons/gr";
const Head = () => {
  return (
    <div>
      <div>
        <Header>
          <div>
            <div className="header container-fluid">
              <div className="container">
                <div className="row">
                  <div className="col-lg-6 col-sm-12 col-md-12">
                    <img
                      src="assets/images/group-ball.svg"
                      className="ball-image"
                    ></img>
                    <div className="ball-one-page">
                      <h2>Permanent Recruitment</h2>
                      <p>
                        The chances of getting a better candidate are higher
                        with permanent staffing services. Our expertise lies in
                        being creative, designing <br></br>effective strategies,
                        and delivering solutions that work. We help
                        organizations hire expert full-time talent across all
                        levels in IT and <br></br>Non-IT skills.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6 col-sm-12 col-md-12">
                    <div>
                      <div className="image-section">
                        <div className="row">
                          <div className="col-lg-3"></div>
                          <div className="col-lg-9">
                            <img
                              src="assets/images/Banner-Image.svg"
                              width="100%"
                              className="banner-image"
                            ></img>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Header>
      </div>

      <Second>
        <div className="container" width="0">
          <div className="border-images">
            <img src="assets/images/border-images.svg " width="92%"></img>
          </div>

          <div className="display-flex">
            <div>
              <img src="assets/images/apptitude-img.svg" className="one"></img>
            </div>
            <div>
              <img src="assets/images/apptitude-img.svg" className="two"></img>
            </div>
            <div>
              {" "}
              <img
                src="assets/images/apptitude-img.svg"
                className="three"
              ></img>
            </div>
          </div>
          <div>
            <h2>Requirment Gathering</h2>
            <h2>Requirment Gathering</h2>
            <h2>Requirment Gathering</h2>
          </div>
        </div>

        <div>
          <div className="container-fluid p-0">
            <div className="let-one">
              <div className="container text-center pt-5 p-5">
                <h4>Let’s Connect For Your Growth</h4>
                <p className="pt-2">
                  We appreciate your interest in our services. Please leave us
                  few details about your business requirements to help us serve
                  better. This information will help us to route your request to
                  the concerned person and you would hear from us promptly.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ........................form section.............................. */}

        {/* ........................footer.....section.................. */}
        <div>
          <div className="container">
            <h5 className="Our-branches text-center">Our Branches</h5>
          </div>
          {/* <div className="mt-5">
            <h5 className="mt-3" style={{ paddingTop: "40px" }}>Contact Us</h5>
            <br></br>
            <div style={{fontSize: "18px" }}>
            <span>
              <img src="assets/images/location-image.png"></img>

              <span className="pdding-left text-white">
                Floor-3A,Sathyam Towers,6D
              </span>
            </span>
            <p className="pdding-lef"> Bharathi Street,Valipalayam,<br></br> Tiruppur, 641 601</p>
            


            <div className="">
              <img src="assets/images/call-image.svg"></img>
              <span style={{ paddingLeft: "9px" }}> +91 9629938033</span>
             <p style={{ paddingLeft: "33px" }}> +91 421 3552738</p>
            </div>
            <br></br>
            <p>
              {" "}
              <GrMail /> <span  style={{ paddingLeft: "15px" }}> info@staffq.org</span>{" "}
            </p>
          </div>
          </div> */}

          <div className="container">
            <div className="row  ">
              <div className="col-lg-4 col-sm-12 col-md-12">
             
                <div>
                  <div className="display">
                    <div>
                      <img src="assets/images/map.svg" className="map-image"></img>
                    </div>
                    <div className="display-two">
                      <h5>India</h5>
                      <h6>Tiruppur</h6>
                    </div>
                  </div>
                </div>
                <div className="row pt-2">
                  <div className="col-lg-1 col-md-1 col-sm-1">
                    <img src="assets/images/location-image.png"></img>
                  </div>
                  <div className="col-lg-11 col-md-11 col-sm-11">
                    Floor-3A,Sathyam Towers,6D <br></br> Bharathi
                    Street,Valipalayam,<br></br>
                    Tiruppur, 641 601
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-lg-1 col-md-1 col-sm-1">
                    <img src="assets/images/call-image.svg"></img>
                  </div>
                  <div className="col-lg-11 col-md-11 col-sm-11">
                    +91 9629938033<br></br>
                    +91 421 3552738
                  </div>
                </div>

                <div className="row mt-4">
                  <div className="col-lg-1 col-md-1 col-sm-1">
                    <GrMail />
                  </div>
                  <div className="col-lg-11 col-md-11 col-sm-11">
                    info@staffq.org
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-12 col-md-12">
                <div>
                  <div className="display">
                    <div>
                      <img src="assets/images/map.svg" className="map-image"></img>
                    </div>
                    <div className="display-two">
                      <h5>Canada</h5>
                      <h6>Ontario</h6>
                    </div>
                  </div>
                </div>
                <div className="row pt-2">
                  <div className="col-lg-1 col-md-1 col-sm-1">
                    <img src="assets/images/location-image.png"></img>
                  </div>
                  <div className="col-lg-11 col-md-11 col-sm-11">
                    111302, Granrock Crea,<br></br> Mississauaga Ontario{" "}
                    <br></br> L5V OEI
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-lg-1 col-md-1 col-sm-1">
                    <img src="assets/images/call-image.svg"></img>
                  </div>
                  <div className="col-lg-11 col-md-11 col-sm-11">
                    +91 9629938033<br></br>
                    +91 421 3552738
                  </div>
                </div>

                <div className="row mt-4">
                  <div className="col-lg-1 col-md-1 col-sm-1">
                    <GrMail />
                  </div>
                  <div className="col-lg-11 col-md-11 col-sm-11">
                    info@staffq.org
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-12 col-md-12">
                <div>
                  <div className="display">
                    <div>
                      <img src="assets/images/map.svg" className="map-image"></img>
                    </div>
                    <div className="display-two">
                      <h5>United Kingdom</h5>
                      <h6>Southampton</h6>
                    </div>
                  </div>
                </div>
                <div className="row pt-2">
                  <div className="col-lg-1 col-md-1 col-sm-1">
                    <img src="assets/images/location-image.png"></img>
                  </div>
                  <div className="col-lg-11 col-md-11 col-sm-11">
                    127, OMDURMAN ROAD, <br></br>Southampton <br></br> S014 7DW
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-lg-1 col-md-1 col-sm-1">
                    <img src="assets/images/call-image.svg"></img>
                  </div>
                  <div className="col-lg-11 col-md-11 col-sm-11">
                    +91 9629938033<br></br>
                    +91 421 3552738
                  </div>
                </div>

                <div className="row mt-4">
                  <div className="col-lg-1 col-md-1 col-sm-1">
                    <GrMail />
                  </div>
                  <div className="col-lg-11 col-md-11 col-sm-11">
                    info@staffq.org
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Second>
     

      {/* .....................................Form----page............................. */}
      <Form>
        <div>
          <div className="container">
            <h4>Let’s Talk</h4>
            <p>FIll out this form and we’ll get back to you.</p>
            <div>
              <div className="row">
                <div className="col-lg-6 col-md-12 col-sm-12">
                  <div className="form-group ">
                    <label for="exampleInputPassword1">Name*</label>
                    <input
                      type="text"
                      className="form-control input-filed"
                      placeholder="Eg: John Krisinski"
                    />
                  </div>
                  <div className="form-group ">
                    <label for="exampleInputPassword1">Phone*</label>
                    <input
                      type="text"
                      className="form-control input-filed"
                      placeholder="98765-43210"
                    />
                  </div>
                  <div className="form-group ">
                    <label for="exampleInputPassword1">State*</label>
                    <input
                      type="text"
                      className="form-control input-filed "
                      placeholder="Select"/>
                      
                    
                  
                    
                      
                  </div>
                </div>

                <div className="col-lg-6 col-md-12 col-sm-12">
                  <div className="form-group ">
                    <label for="exampleInputPassword1">Email Address*</label>
                    <input
                      type="text"
                      className="form-control input-filed"
                      placeholder="Eg: Johnkrisinski@email.com"
                    />
                  </div>
                  <div className="form-group ">
                    <label for="exampleInputPassword1">Country*</label>
                    <input
                      type="text"
                      className="form-control input-filed"
                      placeholder="Select"
                    />
                  </div>
                  <div className="form-group ">
                    <label for="exampleInputPassword1">City*</label>
                    <input
                      type="text"
                      className="form-control input-filed"
                      placeholder="city"
                    />
                  </div>
                </div>
              </div>

              {/* ...............................text--filed.................. */}

              <div className="row">
                <div className="col-lg-12 col-sm-12 col-sm-12">
                  <div className="form-group ">
                    <label for="exampleInputPassword1">Your Requirement*</label>
                    <input
                      type="textarea"
                      className="form-control text"
                      placeholder="city"
                    />
                  </div>
                  <div className="submit-btn">
                    <button className="btn button-submit  ">submit</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default Head;
