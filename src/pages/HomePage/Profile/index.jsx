import React from "react";

import { ProfileJs, SmallProfile, Medium } from "../../../styles/profilestyle";
const Profile = () => {
  return (
    <>
      <ProfileJs>
        <div className="container pc-profile">
          <div className="text-center mt-5">
            <h2>How It Works</h2>
            <p className="how-it-work-p-tag">
              We seek to help a job seeker find a job, and find a qualified
              candidate <br></br> for an open position for a company
            </p>
          </div>
        </div>
        {/* ________________________________________________Content Page...................... */}

        <div className="container-fluid ">
          <div className="wrapper layout-row">
            <div className="sticky-one">
              <div className="row">
                <div className="col-lg-6 col-md-12  ">
                  <div className="ProFileBg  posstion">
                    <div className="profileText ">
                      <div className="row ">
                        <div className="col-lg-3"></div>
                        <div className="col-lg-9">
                          <h2 className="we-aim ">
                            We aim to match employee skills with necessary tasks
                            in the most effective ways
                          </h2>
                          <div className="VectorImage">
                            <img src="assets/images/Effective.svg"></img>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-3"></div>
                        <div className="col-lg-9">
                          <p className="P-tag mt-4">
                            Effective staffing involves understanding company
                            needs, such as when it's most important to save
                            money and when it's most important to do the best
                            job possible.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* ....................second row......................... */}

                <div className="col-lg-6  col-sm-12 second-colum">
                  <div className="dis-play border-one profile-screen">
                    <div className="two">
                      <div className="one">
                     
                        <span className="ProfileScreenin">
                          Profile Screening & Shortlisting{" "}
                        </span>

                        <p>
                          We review tons of applications against our minimum
                          criteria,
                          <br></br>
                          their professional journey,and holistic background
                          checks.
                        </p>
                      </div>
                      <img
                        src="assets/images/Profile-Screening.svg"
                        className="img-one"
                      ></img>
                    </div>
                  </div>
                  <img src="assets/images/ring.svg " className="wave" />
                  <div className="second-hover ">
                  <div className="waves-two">
                    <div className="three ">
                      <img
                        src="assets/images/Language-img.svg"
                        className="img-one"
                      ></img>
                      <div className="four">
                        <h5 className="ProfileScreening">
                          Language Proficiency
                        </h5>

                        <p>
                          We review tons of applications against our minimum
                          criteria,
                          <br></br>
                          their professional journey,and holistic background
                          checks.
                        </p>
                      </div>
                    </div>
                  </div>
                  </div>

                  <div className="dis-play border-one wave-three">
                    <div className="two twwo">
                      <div className="one">
                        <h5
                          className="ProfileScreening"
                          style={{ marginLeft: "9rem" }}
                        >
                          Aptitude Evaluation
                        </h5>

                        <p>
                          We conduct a scientifically designed aptitude test to
                          check their reasoning and problem-solving ability.
                        </p>
                      </div>
                      <img
                        src="assets/images/apptitude-img.svg"
                        className="img-one"
                      ></img>
                    </div>
                  </div>
                  <div className="second-hover ">

                  <div className="wave-four">
                    <div className="three ">
                      <img
                        src="assets/images/Technical-img.svg"
                        className="img-one img-four"
                      ></img>
                      <div className="four">
                        <span className="ProfileScreening">
                          Technical Assessment
                        </span>

                        <p>
                          We have curated one of most advanced technical
                          assessments to vet talent's <br></br> capabilities,
                          these are role-based extremely stringent tests which
                          filters <br></br> top 10% talents
                        </p>
                      </div>
                    </div>
                  </div>
                  </div>

                  <div className="view">
                    {/* .................................three..................... */}

                    {/* .................................................four................. */}

                    {/* .................five...................... */}
                    <div className="dis-play wave-five">
                      <div className="two twwo">
                        <div className="one">
                          <h5
                            className="ProfileScreening"
                            style={{ marginLeft: "13rem" }}
                          >
                            Panel Interview
                          </h5>

                          <p>
                            We conduct a scientifically designed aptitude test{" "}
                            to check their reasoning and problem-solving
                            ability.
                          </p>
                        </div>
                        <img
                          src="assets/images/Panel-Interview.svg"
                          className="img-one"
                        ></img>
                      </div>
                    </div>

                    {/* ...........................................six................................. */}
                    <div className="second-hover ">
                    <div className="wave-six">
                      <div className="three ">
                        <img
                          src="assets/images/get-img.svg"
                          className="img-one"
                        ></img>
                        <div className="four">
                          <span className="ProfileScreening">Get Selected</span>

                          <p>
                            Get selected at top companies international<br></br>
                            standards around the world.
                          </p>
                        </div>
                      </div>
                    </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 medium-responsive">
                <div className="container small-center">
          <div className="">
            <div>
              <img src="assets/images/Icon.png"></img>
            </div>
            <div className="">
              <h4> Profile Screening & Shortlisting </h4>
              <p className="small-p-tag">
                We review tons of applications against our minimum criteria,
                their professional journey,and holistic background checks.
              </p>
            </div>
          </div>
          <div className="">
            <div>
              <img
                src="assets/images/Language-img.svg"
                className="img-one"
              ></img>
            </div>
            <div className="">
              <h4>Language Proficiency</h4>
              <p className="small-p-tag">
                AI-powered communication assessment tests a candidate's reading,
                writing, pronunciation, clarity, fluency and speed of speech.
              </p>
            </div>
          </div>
          <div className="">
            <div>
              <img
                src="assets/images/apptitude-img.svg"
                className="img-one"
              ></img>
            </div>
            <div className="">
              <h4> Aptitude Evaluation</h4>
              <p className="small-p-tag">
                We conduct a scientifically designed aptitude test to check
                their reasoning and problem-solving ability.
              </p>
            </div>
          </div>
          <div className="">
            <div>
              <img
                src="assets/images/Technical-img.svg"
                className="img-one img-four"
              ></img>
            </div>
            <div className="">
              <h4>Technical Assessment</h4>
              <p className="small-p-tag">
                We have curated one of most advanced technical assessments to
                vet talent'scapabilities, these are role-based extremely
                stringent tests which filters top 10% talents
              </p>
            </div>
          </div>
          <div className="">
            <div>
              <img
                src="assets/images/Panel-Interview.svg"
                className="img-one"
              ></img>
            </div>
            <div className="">
              <h4>Panel Interview</h4>
              <p className="small-p-tag">
                Our Talent Acquisition experts conduct the final video interview
                understandingthe candidate's preferences and expectations to do
                the right matchmaking.h.
              </p>
            </div>
          </div>
          <div className="">
            <div>
              <img src="assets/images/get-img.svg" className="img-one"></img>
            </div>
            <div className="">
              <h4>Get Selected</h4>
              <p className="small-p-tag">
                Get selected at top companies international standards around the
                world.
              </p>
            </div>
          </div>
        </div>

                </div>

                {/* ...........................small second,,, */}
              </div>
            </div>
          </div>
        </div>
      </ProfileJs>

      {/* ..........................................Small Device .................. */}

      <SmallProfile>
        <div className="container">
          <div className="text-center mt-5 sm-how-to">
            <h2 className="how-it-work">How It Works</h2>
            <p className="how-to-work-p-tag">
              We seek to help a job seeker find a job, and find a qualified
              candidate <br></br> for an open position for a company
            </p>
          </div>
          <div className="ProFileBg  posstion">
                    <div className="profileText ">
                      <div className="row ">

                        <div className="col-lg-3"></div>
                        <div className="col-lg-9">
                          <h2 className="we-aim ">
                            We aim to match employee <br></br>skills with necessary tasks <br></br>
                            in the most effective ways
                          </h2>
                          <div className="VectorImage">
                            <img src="assets/images/Effective.svg"></img>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-3"></div>
                        <div className="col-lg-9">
                          <p className="P-tag ">
                            Effective staffing involves understanding company 
                            needs, such as when it's most important to save 
                            money and when it's most important to do the best
                            job possible.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
        </div>

  

        <div className="container small-center">
          <div className="">
            <div>
              <img src="assets/images/Icon.png"></img>
            </div>
            <div className="">
              <h4> Profile Screening & Shortlisting </h4>
              <p className="small-p-tag">
                We review tons of applications against our minimum criteria,
                their professional journey,and holistic background checks.
              </p>
            </div>
          </div>
          <div className="">
            <div>
              <img
                src="assets/images/Language-img.svg"
                className="img-one"
              ></img>
            </div>
            <div className="">
              <h4>Language Proficiency</h4>
              <p className="small-p-tag">
                AI-powered communication assessment tests a candidate's reading,
                writing, pronunciation, clarity, fluency and speed of speech.
              </p>
            </div>
          </div>
          <div className="">
            <div>
              <img
                src="assets/images/apptitude-img.svg"
                className="img-one"
              ></img>
            </div>
            <div className="">
              <h4> Aptitude Evaluation</h4>
              <p className="small-p-tag">
                We conduct a scientifically designed aptitude test to check
                their reasoning and problem-solving ability.
              </p>
            </div>
          </div>
          <div className="">
            <div>
              <img
                src="assets/images/Technical-img.svg"
                className="img-one img-four"
              ></img>
            </div>
            <div className="">
              <h4>Technical Assessment</h4>
              <p className="small-p-tag">
                We have curated one of most advanced technical assessments to
                vet talent'scapabilities, these are role-based extremely
                stringent tests which filters top 10% talents
              </p>
            </div>
          </div>
          <div className="">
            <div>
              <img
                src="assets/images/Panel-Interview.svg"
                className="img-one"
              ></img>
            </div>
            <div className="">
              <h4>Panel Interview</h4>
              <p className="small-p-tag">
                Our Talent Acquisition experts conduct the final video interview
                understandingthe candidate's preferences and expectations to do
                the right matchmaking.h.
              </p>
            </div>
          </div>
          <div className="">
            <div>
              <img src="assets/images/get-img.svg" className="img-one"></img>
            </div>
            <div className="">
              <h4>Get Selected</h4>
              <p className="small-p-tag">
                Get selected at top companies international standards around the
                world.
              </p>
            </div>
          </div>
        </div>
      </SmallProfile>
    </>
  );
};
export default Profile;
