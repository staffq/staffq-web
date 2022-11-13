import React from "react";
import { ContacttStyle, Form, Second } from "../../styles/contact-style.js";
import { GrMail } from "react-icons/gr";
import Input from "../../components/FormControls/Input/index.jsx";
const contact = () => {
  return (
    <div>
      <ContacttStyle>
        <Second>
          <div>
            <div className="container-fluid p-0">
              <div className="let-one">
                <div className="container text-center pt-5 p-5">
                  <h4>Let’s Connect For Your Growth</h4>
                  <p className="pt-2">
                    We appreciate your interest in our services. Please leave us
                    few details about your business requirements to help us
                    serve better. This information will help us to route your
                    request to the concerned person and you would hear from us
                    promptly.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ........................form section.............................. */}
          <Form>
            <div>
              <div className="container">
                <div className="text-center">
                  <h4>Let’s Talk</h4>
                  <p>FIll out this form and we’ll get back to you.</p>
                </div>
                <div className=" ">
                  <div className="row">
                    <div className="col-lg-6 col-md-12 col-sm-12">
                      <div></div>
                      <div class="form-group ">
                        <label for="exampleInputPassword1">Name*</label>
                        <Input placeholder="Name" />
                      </div>
                      <div class="form-group ">
                        <label for="exampleInputPassword1">Phone*</label>
                        <Input placeholder="98765-43210" />
                      </div>
                      <div class="form-group ">
                        <label for="exampleInputPassword1">State*</label>
                        <select className="input-option">
                          <option value="">Country</option>
                          <option value="">one</option>
                          <option value="">one</option>
                        </select>
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-12 col-sm-12">
                      <div class="form-group ">
                        <label for="exampleInputPassword1">
                          Email Address*
                        </label>

                        <Input placeholder="Eg: Johnkrisinski@email.com" />
                      </div>
                      <div class="form-group ">
                        <label for="exampleInputPassword1">country*</label>

                        <select className="input-option ">
                          <option value="country*">Country</option>
                          <option value="">one</option>
                          <option value="">one</option>
                        </select>
                      </div>
                      <div class="form-group ">
                        <label for="exampleInputPassword1">City*</label>

                        <Input placeholder="Select" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* ...............................text--filed.................. */}
                <div className="justify-content-center">
                  <div className="row ">
                    <div className="col-lg-12 col-sm-12 col-sm-12">
                      <div class="form-group ">
                        <label for="exampleInputPassword1">
                          Your Requirement*
                        </label>
                        <input
                          type="textarea"
                          class="form-control text"
                          placeholder="city"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="submit-btn">
                    <button className="btn button-submit  ">submit</button>
                  </div>
                </div>
              </div>
            </div>
          </Form>

          <div>
            <div className="container">
              <div className="row  ">
                <div className="col-lg-4 col-sm-12 col-md-12">
                  <div>
                    <div className="display">
                      <div>
                        <img
                          src="assets/images/map.svg"
                          className="map-image"
                        />
                      </div>
                      <div className="display-two">
                        <h5>India</h5>
                        <h6>Tiruppur</h6>
                      </div>
                    </div>
                  </div>
                  <div className="row pt-2">
                    <div className="col-lg-1 col-md-1 col-sm-1">
                      <img src="assets/images/Loaction.svg" />
                    </div>
                    <div className="col-lg-11 col-md-11 col-sm-11">
                      Floor-3A,Sathyam Towers,6D <br></br> Bharathi
                      Street,Valipalayam,<br></br>
                      Tiruppur, 641 601
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-lg-1 col-md-1 col-sm-1">
                      <img src="assets/images/call-image.svg" />
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
                        <img
                          src="assets/images/map.svg"
                          className="map-image"
                        />
                      </div>
                      <div className="display-two">
                        <h5>Canada</h5>
                        <h6>Ontario</h6>
                      </div>
                    </div>
                  </div>
                  <div className="row pt-2">
                    <div className="col-lg-1 col-md-1 col-sm-1">
                      <img src="assets/images/Loaction.svg" />
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
                        <img
                          src="assets/images/map.svg"
                          className="map-image"
                        />
                      </div>
                      <div className="display-two">
                        <h5>United Kingdom</h5>
                        <h6>Southampton</h6>
                      </div>
                    </div>
                  </div>
                  <div className="row pt-2">
                    <div className="col-lg-1 col-md-1 col-sm-1">
                      <img src="assets/images/Loaction.svg" />
                    </div>
                    <div className="col-lg-11 col-md-11 col-sm-11">
                      127, OMDURMAN ROAD, <br></br>Southampton <br></br> S014
                      7DW
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
      </ContacttStyle>
    </div>
  );
};

export default contact;
