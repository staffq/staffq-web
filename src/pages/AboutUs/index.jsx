import React from "react";
import Head from "next/head";
import {
  Div,
  Header,
  SmallHeader,
  AboutSection,
} from "../../styles/aboutpage-style";
<Head>
  <title>About Us </title>
  <meta
    property="og:title"
    content="About StaffQ Team of HR professionals and SMEs offering complete HR 
    Solutions to impact the rapidly 
    growing Recruitment Industry in India Redefining the Recruitment
     experience of Fortune 500s and Large Enterprises to Startups "
    key="title"
  />
</Head>;
const AboutPage = () => {
  return (
    <div>
      <Div>
        <Header>
          <div className="header container-fluid px-0">
            <div className=" ">
              <div className="">
                <div className="row">
                  <div className="col-lg-6 col-sm-12 col-md-6 container">
                    <div className="ballwave">
                      <img src="assets/images/waves-single.png" />
                    </div>

                    <div className="ball-one-page">
                      <img
                        src="assets/images/single-ball.svg"
                        alt="img"
                        width="50px"
                      />
                      <div>
                      <span>Join the team that’s </span>
                   
                   <span> making the world work</span> 
                   
                 
                   <span>better for everyone</span>{" "}<br></br>
                   <img
                     src="assets/images/single-ball.svg"
                     alt="img"
                     width="50px"
                     className=""
                   />
                      </div>
                   
                      {/* <img
                        src="assets/images/single-ball.svg"
                        alt="img"
                        width="50px"
                      /> */}
                    </div>
                  </div>

                  <div className="col-lg-6 col-sm-12 col-md-6">
                    <div>
                      <div className="image-section">
                        <img
                          src="assets/images/about-Banner-image.svg "
                          width="100%"
                          className="banner-image"
                          alt="img"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Header>

        <SmallHeader className="container-fluid p-0">
          <div lassName="Small-header ">
            <div className="small-waves container">
              {/* <img src="assets/images/Ball-and-wa.svg"/> */}

              <div className="text-center samll-wave-contnet">
                <h1>
                  Join the team that’s <br></br>
                  making the world work <br></br>
                  better for everyone <br></br>
                </h1>
              </div>
            </div>
            <div>
              <img
                src="assets/images/About-us-man.svg"
                width="100%"
                className="banner-image"
                alt="img"
              />
            </div>
          </div>
        </SmallHeader>

        <div className="container FIRST">
          <div className="row">
            <div className="col-lg-6 col-sm-12">
              <div className="img-one">
                <img
                  src="assets/images/Mission-and-vision-image.png"
                  width="100%"
                  alt="img"
                />
              </div>
            </div>
            <div className="col-lg-6 col-sm-12 vision-row">
              <div className="second-content">
                <div className="second-page-h1">
                  <div className="d-flex">
                    <img src="assets/images/line.svg" alt="img" />
                    <h3 className="our-head">Our Mission</h3>
                  </div>

                  <p className="mission-p-tag">
                    To be the leading partner that clients and candidates{" "}
                    <br></br> always choose to connect with.
                  </p>
                </div>
              </div>
              <br></br>
              <div className="second-content">
                <div className="second-page-h1">
                  <div className="d-flex">
                    <img src="assets/images/line.svg" alt="img" />
                    <h3 className="our-head">Our Vision</h3>
                  </div>
                  <p className="mission-p-tag">
                    Our vision is to establish a long-term and strategic
                    <br></br>
                    recruitment partnership with our clients and assist<br></br>{" "}
                    them in transforming today’s difficulties into <br></br>
                    tomorrow’s triumphs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="container text-center mt-5">
            <h4 className="Our-Strategy">Our Strategy</h4>
          </div>
        </div>

        <div className="container" style={{ marginTop: "3rem" }}>
          <div className="row ">
            <div className="col-lg-6 col-sm-12 col-md-12">
              <div className="img-page-one">
                <div className="section-one">
                  <div className=" first-row">
                    <img
                      src="assets/images/img-page-one.svg"
                      className="img-one-one"
                      alt="img"
                    />

                    <h3 className="discover-h-three">1. Discover</h3>
                    <p className="discover-p-tag">
                      We discover the profiles that are a culture and the skill
                      fit for your company <br></br> which make the process
                      easier on proceeding with the profiles <br></br>
                      <br></br>
                    </p>
                  </div>
                </div>
              </div>
              <div className="img-page-one mt-3">
                <div className="section-one">
                  <div className="first-row">
                    <img
                      src="assets/images/Evaluate.svg"
                      className="img-one-one"
                      alt="img"
                    />
                    <h3 className="discover-h-three">3. Evaluate</h3>
                    <p className="discover-p-tag">
                      Since we also have a software expertise we can screen and
                      evaluate the <br></br>technical skills form our end that
                      suites for you and we pass though the evaluation process
                      for you end.<br></br>
                      <br></br>
                    </p>
                  </div>
                </div>
              </div>

              <div className="section-two mt-5 evalute-image">
                <img src="assets/images/second-elipse.svg" alt="img" />
              </div>
            </div>

            {/* .................................................second row.................. */}

            <div className="col-lg-6 col-sm-12 col-md-12 ">
              <div className="section-two  ">
                <div className="container  ">
                  <img
                    src="assets/images/Ball-one.svg"
                    className="row-second-ball"
                    alt="img"
                  />
                </div>
                <div className="content-one margin-section">
                  <div className="content-two">
                    <div className="img-page-two">
                      <div className="">
                        <img
                          src="assets/images/analyse.svg"
                          width="93%"
                          alt="img"
                        />
                        <h3 className="discover-h-three">2. Analyse</h3>
                        <p className="discover-p-tag">
                          We are analyze the profile about the history, skillset
                          and the background<br></br> of the candidate which
                          helps us in identifying that fits to your requirement.
                          <br></br>
                          <br></br>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" margin-section-second">
                  <div className="content-one  ">
                    <div className="content-two ">
                      <div className="img-page-two  ">
                        <img
                          src="assets/images/Onboard.svg"
                          width="93%"
                          alt="img"
                        />
                        <h3 className="discover-h-three">4. Onboard</h3>
                        <p className="discover-p-tag">
                          We will not only follow-up we take ownership on
                          onboarding the candidates <br></br> for you that helps
                          both us on an easy going business.<br></br>
                          <br></br>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <AboutSection>
          <div className="container-fluid">
            <div className="About-section">
              <h2 className="">Why People Choose StaffQ?</h2>
              <p className="about-p">
                {" "}
                We have found that the best way to get them is with up front
                research – of your company, competitors,<br></br> target market
                and customer psychographics
              </p>
            </div>
            <div className="container">
              <div className="row mt-5">
                <div className="col-lg-5 col-md-12 col-sm-12">
                  <div className="aboutImage">
                    <img
                      src="assets/images/service.png"
                      width="100%"
                      alt="img"
                    />
                  </div>
                </div>
                <div className="col-lg-7 col-md-12 col-sm-12 fs-5 about-p-center">
                  <div>
                    <p className="AboutPtext">
                      StaffQ Consultancy Private Limited is a trusted HR Service
                      provider based in India’s technological hub, Tirupur was
                      set up in the year 2020. Since its inception in 2020, the
                      company is progressing under the guidance of a dynamic
                      leadership team with in-depth industry knowledge including
                      legal, compliance, process, technology in the HR domain
                      and backed by a dedicated team of professionals who have
                      vast experience of working in various reputed industries.
                      We at STAFFQ have achieved several milestones under the
                      expert directions of Mr Manoj Kumar and Mr Soorya
                      Narayanan Directors of the company. Their futuristic
                      approach and strong analytical abilities enable us to
                      cater to the needs of the clients, most efficiently. We
                      have developed an expertise in providing a gamut of
                      services to business organizations for their increasing
                      demands.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AboutSection>

        <div className="maxium">
          <div className="background-wave-image">
            <img src="assets/images/Images-with-connector.png" />
          </div>
          <div className="container  join-team">
            <div className="">
              <h1 className="join-our">Join Our Team</h1>
              <div className="under-code">
                <img
                  className="code-line"
                  src="assets/images/undec-code-line.svg"
                  alt="img"
                />
              </div>

              <button className="bt">Join Us</button>
            </div>
          </div>
        </div>

        {/* 
        .........................smallll.......scree........... */}

        <div className="container small-join-section">
          <div className="join-teamm">
            <h1 className="join-our">Join Our Team</h1>
            <div className="under-code">
              <img
                className="code-line"
                src="assets/images/undec-code-line.svg"
                alt="img"
              />
            </div>
            <p className="join-p-tag">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              <br></br>
              do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <button className="bt">Join Us</button>
          </div>

          <div className="small-logo-section">
            <div>
              <img src="assets/images/first-logo.svg" alt="logo" />
              <img src="assets/images/second-logo.svg" alt="logo" />
              <img src="assets/images/third-logo.svg" alt="logo" />
              <img src="assets/images/fourth-logo.svg" alt="logo" />
              <img src="assets/images/fifth-logo.svg" alt="logo" />
            </div>
          </div>
        </div>
        {/* ...........................................logo section.............. */}
      </Div>
    </div>
  );
};

export default AboutPage;
