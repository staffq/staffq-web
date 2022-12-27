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
              We seek to help a job seekers to find a job, and find a qualified
              candidate <br></br> for an open position for a company.
            </p>
          </div>
        </div>
        {/* ________________________________________________Content Page...................... */}

        <div className="container-fluid ">
          <div className="wrapper layout-row">
            <div className="sticky-one">
              <div className="row">
                <div className="col-lg-5 col-md-12  ">
                  <div className="ProFileBg  posstion">
                    <div className="profileText ">
                      <div className="row ">
                        <div className="col-lg-2"></div>
                        <div className="col-lg-10">
                          <p className="we-aim ">
                            We aim to match employee skills with necessary tasks
                            in the most effective ways
                          </p>
                          <div className="VectorImage">
                            <img src="assets/images/Effective.svg" alt="img" />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-2"></div>
                        <div className="col-lg-10">
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

                <div className="col-lg-7  col-sm-12 second-colum">
                  <div className="dis-play border-one profile-screen">
                    <div className="two">
                      <div className="one">
                        <sub href="">
                          <span className="ProfileScreening">
                            Profile Screening & Shortlisting{" "}
                          </span>
                        </sub>
                        <br></br>
                        <div className="clor">
                          <span>
                            We review tons of applications against our minimum
                            criteria,{" "}
                          </span>
                          <span>
                            their professional journey,and holistic background
                            checks.
                          </span>
                        </div>
                      </div>
                      <img
                        src="assets/images/Profile-Screening.svg"
                        className="img-one tw"
                        alt="img"
                      />
                    </div>
                  </div>
                  <img
                    src="assets/images/ring.svg "
                    className="wave"
                    alt="img"
                  />
                  <div className="second-hover ">
                    <div className="waves-two">
                      <div className="three ">
                        <img
                          src="assets/images/Language-img.svg"
                          className="img-one"
                          alt="img"
                        />
                        <div className="four">
                          <a>
                            {" "}
                            <span className="ProfileScreening">
                              Language Proficiency
                            </span>
                          </a>
                          {/* <h5></h5> */}
                          <div className="clor">
                            <span>
                              AI-powered communication assessment tests a
                              candidate's reading,{" "}
                            </span>
                            <br></br>
                            <span>
                              writing, pronunciation, clarity, fluency and speed
                              of speech.
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="display border-one wave-three">
                    <div className="two twwo">
                      {/* <div className="apptitude"> */}
                      <div className="one">
                        <sub>
                          {" "}
                          <span className="ProfileScreening" style={{}}>
                            Aptitude Evaluation
                          </span>
                        </sub>
                        <br></br>
                        <div className="clor">
                          <span>
                            We conduct a scientifically designed aptitude test
                            to
                          </span>
                          <span>
                            {" "}
                            check their reasoning and problem-solving ability.
                          </span>
                        </div>
                      </div>

                      {/* </div> */}
                      <img
                        src="assets/images/apptitude-img.svg"
                        className="img-one"
                        alt="img"
                      />
                    </div>
                  </div>
                  <div className="second-hover ">
                    <div className="wave-four">
                      <div className="three ">
                        <img
                          src="assets/images/Technical-img.svg"
                          className="img-one img-four"
                          alt="img"
                        />
                        <div className="four">
                          <a>
                            {" "}
                            <span className="ProfileScreening">
                              Technical Assessment
                            </span>
                          </a>
                          <br></br>
                          <div className="clor">
                            <span>
                              We have curated one of most advanced technical
                              assessments to vet talent's
                            </span>{" "}
                            <br></br>
                            <span>
                              {" "}
                              capabilities, these are role-based tests which
                              filters top 10% talents.
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="view">
                    {/* .................................three..................... */}

                    {/* .................................................four................. */}

                    {/* .................five...................... */}
                    <div className="display wave-five">
                      <div className="two twwo">
                        <div className="one">
                          <label>
                            <span className="ProfileScreening" style={{}}>
                              Panel Interview
                            </span>
                          </label>
                          <br></br>
                          <div className="clor">
                            <span>
                              Our Talent Acquisition experts conduct the final
                              video interview understanding{" "}
                            </span>

                            <span>
                              the candidate's preferences and expectations to do
                              the right matchmaking.
                            </span>
                          </div>
                        </div>
                        <img
                          src="assets/images/Panel-Interview.svg"
                          className="img-one"
                          alt="img"
                        />
                      </div>
                    </div>

                    {/* ...........................................six................................. */}
                    <div className="second-hover ">
                      <div className="wave-six">
                        <div className="three ">
                          <img
                            src="assets/images/get-img.svg"
                            className="img-one"
                            alt="img"
                          />
                          <div className="four">
                            <a>
                              {" "}
                              <span className="ProfileScreening">
                                Get Selected
                              </span>
                            </a>

                            <p>
                              Get selected at top companies international
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
                      <div className="mt-5">
                        <img src="assets/images/Icon.png"></img>
                      </div>
                      <div className="">
                        {/* <a></a> */}
                        <a>
                          {" "}
                          <span>Profile Screening & Shortlisting</span>
                        </a>

                        <p className="small-p-tag">
                          We review tons of applications against our minimum
                          criteria, their professional journey,and holistic
                          background checks.
                        </p>
                      </div>
                    </div>
                    <div className="">
                      <div className="mt-5">
                        <img
                          src="assets/images/Language-img.svg"
                          className="img-one"
                        ></img>
                      </div>
                      <div className="">
                        <a>
                          {" "}
                          <span>Language Proficiency</span>
                        </a>

                        <p className="small-p-tag">
                          AI-powered communication assessment tests a
                          candidate's reading, writing, pronunciation, clarity,
                          fluency and speed of speech.
                        </p>
                      </div>
                    </div>
                    <div className="">
                      <div className="mt-5">
                        <img
                          src="assets/images/apptitude-img.svg"
                          className="img-one"
                        ></img>
                      </div>
                      <div className="">
                        <a>
                          {" "}
                          <span>Aptitude Evaluation</span>
                        </a>

                        <p className="small-p-tag">
                          We conduct a scientifically designed aptitude test to
                          check their reasoning and problem-solving ability.
                        </p>
                      </div>
                    </div>
                    <div className="">
                      <div className="mt-5">
                        <img
                          src="assets/images/Technical-img.svg"
                          className="img-one img-four"
                        ></img>
                      </div>
                      <div className="">
                        <a>
                          {" "}
                          <span>Technical Assessment</span>
                        </a>

                        <p className="small-p-tag">
                          We have curated one of most advanced technical
                          assessments to vet talent's capabilities, these are role-based tests which
                              filters top 10% talents
                        </p>
                      </div>
                    </div>
                    <div className="">
                      <div className="mt-5">
                        <img
                          src="assets/images/Panel-Interview.svg"
                          className="img-one"
                        ></img>
                      </div>
                      <div className="">
                        <a>
                          {" "}
                          <span>Panel Interview</span>
                        </a>

                        <p className="small-p-tag">
                          Our Talent Acquisition experts conduct the final video
                          interview understandingthe candidate's preferences and
                          expectations to do the right matchmaking.h.
                        </p>
                      </div>
                    </div>
                    <div className="">
                      <div className="mt-5">
                        <img
                          src="assets/images/get-img.svg"
                          className="img-one"
                        ></img>
                      </div>
                      <div className="">
                        <a>
                          {" "}
                          <span>Get Selected</span>
                        </a>

                        <p className="small-p-tag">
                          Get selected at top companies international standards
                          around the world.
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
            <p className="h-four">Services we offer</p>
            <p className="how-to-work-p-tag">
              We seek to help a job seekers to  find a job, and find a qualified
              candidate <br></br> for an open position for a company
            </p>
          </div>
          <div className="ProFileBg  posstion">
            <div className="profileText ">
              <div className="row ">
                <div className="col-lg-3"></div>
                <div className="col-lg-9">
                  <p className="we-aim ">
                    We aim to match employee <br></br>skills with necessary
                    tasks <br></br>
                    in the most effective ways
                  </p>
                  <div className="VectorImage">
                    <img src="assets/images/Effective.svg" alt="img" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-3"></div>
                <div className="col-lg-9">
                  <p className="P-tag ">
                    Effective staffing involves understanding company needs,
                    such as when it's most important to save money and when it's
                    most important to do the best job possible.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container small-center">
          <div className="">
            <div>
              <img src="assets/images/Icon.png" alt="img" />
            </div>
            <div className="">
              <p className="h-four"> Profile Screening & Shortlisting </p>
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
                alt="img"
              />
            </div>
            <div className="">
              <p className="h-four">Language Proficiency</p>
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
                alt="img"
              />
            </div>
            <div className="">
              <p className="h-four"> Aptitude Evaluation</p>
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
                alt="img"
              />
            </div>
            <div className="">
              <p className="h-four">Technical Assessment</p>
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
                alt="img"
              />
            </div>
            <div className="">
              <p className="h-four">Panel Interview</p>
              <p className="small-p-tag">
                Our Talent Acquisition experts conduct the final video interview
                understanding the candidate's preferences and expectations to do
                the right matchmaking.
              </p>
            </div>
          </div>
          <div className="">
            <div>
              <img
                src="assets/images/get-img.svg"
                className="img-one"
                alt="img"
              />
            </div>
            <div className="">
              <p className="h-four">Get Selected</p>
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
