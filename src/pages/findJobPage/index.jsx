import React from "react";

import { Findjobs, SmallFind } from "../../styles/find-jobs-style";

const findJobPage = () => {
  return (
    <>
      <div className="container">
        <section>
          <Findjobs>
            <div style={{ marginTop: "1%" }}>
              <div className="row">
                <div className="col-lg-5 p-0">
                  <div className="image-left">
                    <img
                      src="assets/images/Man with rings.svg"
                      width="100%"
                      className="find-images-class"
                    ></img>
                  </div>
                </div>

                <div className="col-lg-1">
                  <div>
                    <span>
                      {" "}
                      <img
                        src="assets/images/profilearoow.svg"
                        className="arow"
                      ></img>
                    </span>
                  </div>
                </div>

                <div className="col-lg-6 col-md-5 col-sm-12 mt-5">
                  <div className="FindText">
                    <h4 className="text-light enough-talk">
                      Enough Talk, Let’s Find <br></br>Your Dream
                    </h4>

                    <p className="text-light find-p-tage mt-3">
                      Lorem ipsum dolor sit amet, con sectetur adipiscingelit,
                      sed do e<br></br> iusmod tempor incididunt ut labore et
                      dolore magna aliqua.
                    </p>

                    <button className="mt-3 upload">
                      <img
                        src="assets/images/directbox-send.svg"
                        className="Directbox"
                      ></img>
                      <span className="upload-button"> Upload</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Findjobs>
        </section>
      </div>

      {/* .........................Small Secren ------------ */}
      <SmallFind>
        <div className="container-fluid p-0 pe-0 ">
          <div className="top">
            <div className="row container">
              <div className="col-lg-12 col-md-12 col-sm-12 mt-5 ">
                <div className="Smallsctext">
                  <h2 className="">
                    Enough Talk, Let’s<br></br>Find Your Dream
                  </h2>
                  <p className="text-light findsm-text">
                    Lorem ipsum dolor sit amet, con sectetur adipiscingelit, sed
                    do e iusmod tempor incididunt ut labore et dolore magna
                    aliqua.{" "}
                  </p>
                </div>
                <button className="mt-3 upload  Smallbox">
                  <img
                    src="assets/images/directbox-send.svg"
                    className="Directbox"
                  ></img>
                  <span className="upload-button"> Upload</span>
                </button>
              </div>
              <div className="col-lg-12 col-md-12 col-sm-12">
                <div className="find-images">
                  <img
                    src="assets/images/Man with rings.svg"
                    width="100%"
                  ></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SmallFind>
    </>
  );
};

export default findJobPage;
