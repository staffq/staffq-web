import React from "react";
import Head from "next/head";
import { Div, AboutSection } from "../../styles/aboutpage-style";

import AboutHeader from "../../components/AboutBanner";

const AboutPage = () => {
  return (
    
    <div>

<Head>
        <title>
        About Us 
        </title>
        <meta property="og:image" content="https://www.applogiq.org/assets/images/metaimg.png" />
        <meta name="linkedin:image" content="https://www.applogiq.org/assets/images/metaimg.png" />
        <meta name="twitter:image" content="https://www.applogiq.org/assets/images/metaimg.png" />
        <meta name="instagram:image" content="https://www.applogiq.org/assets/images/metaimg.png" />
        <meta
          name="title"
          content=" About StaffQ Team of HR professionals and SMEs offering complete HR Solutions to impact the rapidly growing Recruitment Industry in India Redefining the
           Recruitment experience of Fortune 500s and Large Enterprises to Startups"
        />
        <meta
          name="description"
          content="About StaffQ Team of HR professionals and SMEs offering complete HR Solutions to impact the rapidly
           growing Recruitment Industry in India Redefining the Recruitment experience of Fortune 500s and Large Enterprises to Startups."
        />
        <meta
          name="keywords"
          content="About Us "
        />

        <link rel="canonical" href="https://www.staffq.in/about-us/" />

        <link
          rel="alternate"
          href="https://www.staffq.in/"
          hreflang="en-in"
        />

        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="About StaffQ Team of HR professionals and SMEs offering complete HR Solutions to impact the rapidly growing Recruitment 
          Industry in India Redefining the Recruitment experience of Fortune 500s and Large Enterprises to Startups "
        />
        <meta
          property="og:description"
          content="About StaffQ Team of HR professionals and SMEs offering complete HR Solutions to impact the rapidly growing
           Recruitment Industry in India Redefining the Recruitment experience of Fortune 500s and Large Enterprises to Startups ."
        />
        <meta
          property="og:image"
          content="https://www.applogiq.org/assets/images/index-og.webp"
        />
        <meta property="og:url" content="https://www.staffq.in" />
        <meta property="og:site_name" content="AppLogiQ" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `{
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "AppLogiQ",
              "image": "https://www.applogiq.org/assets/images/logo.gif",
              "@id": "",
              "url": "https://applogiq.org/",
              "telephone": "9629938033",
              "priceRange": "$$$$$",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Floor-3,Sathyam Towers,6D Bharathi Street,Valipalayam.",
                "addressLocality": "Tiruppur",
                "postalCode": "641 601",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 11.10601020,
                "longitude": 77.34961810
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday"
                ],
                "opens": "09:00",
                "closes": "19:00"
              },
              "sameAs": [
                "https://www.linkedin.com/company/applogiq/",
                "https://www.facebook.com/Applogiq",
                "https://www.instagram.com/applogiq/"
              ] 
            }`
          }}
        />

        <script type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `{
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Applogiq",
              "alternateName": "software company",
              "url": "https://www.applogiq.org/",
              "logo": "https://www.applogiq.org/assets/images/logo.gif",
              "sameAs": [
                "https://www.facebook.com/Applogiq",
                "https://www.linkedin.com/company/applogiq/"
              ]
            }`
          }}
        /> */}


      </Head>
      <Div>
        <AboutHeader />

        <div className="container FIRST">
          <div className="row">
            <div className="col-lg-6 col-sm-12 mt-5">
              <div className="img-one">
                <img
                  src="assets/images/Mission-and-vision-image.png"
                  width="100%"
                  alt="img"
                />
              </div>
            </div>
            <div className="col-lg-5 col-sm-12 vision-row">
              <div className="second-content">
                <div className="second-page-h1">
                  <div className="d-flex">
                    <img src="assets/images/line.svg" alt="img" />
                    <p className="our-head h-three">Our Mission</p>
                  </div>

                  <p className="mission-p-tag">
                    To be the leading partner that clients and candidates{" "}
                    always choose to connect with.
                  </p>
                </div>
              </div>
              <br></br>
              <div className="second-content">
                <div className="second-page-h1">
                  <div className="d-flex">
                    <img src="assets/images/line.svg" alt="img" />
                    <p className="our-head  h-three">Our Vision</p>
                  </div>
                  <p className="mission-p-tag">
                    Our vision is to establish a long-term and strategic
                  
                    recruitment partnership with our clients and assist
                    them in transforming today’s difficulties into 
                    tomorrow’s triumphs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="container text-center mt-5">
            <p className="Our-Strategy">Our Strategy</p>
          </div>
        </div>

        <div className="container dont-show" style={{ marginTop: "3rem" }}>
          <div className="row ">
            <div className="col-lg-6 col-sm-12 col-md-12">
              <div className="img-page-one">
                <div className="section-one">
                  <div className=" first-row">
                    <img
                      src="assets/images/discover.png "
                      className="img-one-one container"
                      alt="img"
                      width='100%'
                    />

                    <p className="discover-h-three">1. Discover</p>
                    <p className="discover-p-tag container">
                      We discover the profiles that are a culture and the skill
                      fit for your company which make the process easier on
                      proceeding with the profiles <br></br>
                      <br></br>
                    </p>
                  </div>
                </div>
              </div>
              <div className="img-page-one mt-3">
                <div className="section-one">
                  <div className="first-row container">
                    <img
                      src="assets/images/evalute.png"
                       className="img-one-one "
                      alt="img"
                    />
                    <p className="discover-h-three">3. Evaluate</p>
                    <p className="discover-p-tag container">
                      Since we also have a software expertise we can screen and
                      evaluate the technical skills form our end that suites for
                      you and we pass though the evaluation process for you end.
                      <br></br>
                      <br></br>
                    </p>
                  </div>
                </div>
              </div>

              <div className="section-two mt-5 evalute-image">
                <img src="assets/images/second-color.png" alt="img" />
              </div>
            </div>

            {/* .................................................second row.................. */}

            <div className="col-lg-6 col-sm-12 col-md-12 ">
              <div className="section-two  ">
                <div className="container  ">
                  <img
                    src="assets/images/color-ball.png"
                    className="row-second-ball"
                    alt="img"
                  />
                </div>
                <div className="content-one margin-section">
                  <div className="content-two">
                    <div className="img-page-two container">
                      <div className="">
                        <img
                          src="assets/images/analyze.png"
                          width="100%"
                          className="img-one-one container"
                          alt="img"
                        />
                        <p className="discover-h-three">2. Analyse</p>
                        <p className="discover-p-tag container">
                          We are analyze the profile about the history, skillset
                          and the background of the candidate which helps us in
                          identifying that fits to your requirement.
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
                      <div className="img-page-two container  ">
                        <img
                          src="assets/images/onboard.png"
                          width="100%"
                          className="img-one-one"
                          alt="img"
                        />
                        <p className="discover-h-three">4. Onboard</p>
                        <p className="discover-p-tag container">
                          We will not only follow-up we take ownership on
                          onboarding the candidates for you that helps both us
                          on an easy going business.<br></br>
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
        {/* .....................small section..........

        
         */}
        <div className="container sm-cell">
          <div className="img-page-one  ">
            <div className="section-one container">
              <div className=" first-row container">
                <img
                  src="assets/images/discover.png"
                  className="img-one-one container"
                  alt="img"
                />

                <p className="discover-h-three">1. Discover</p>
                <p className="discover-p-tag container">
                  We discover the profiles that are a culture and the skill fit
                  for your company which make the process easier on proceeding
                  with the profiles <br></br>
                  <br></br>
                </p>
              </div>
            </div>
          </div>
          <div className="content-one margin-section">
            <div className="content-two">
              <div className="img-page-two container">
                <div className="">
                  <img src="assets/images/analyze.png" width="100%" alt="img" />
                  <p className="discover-h-three">2. Analyse</p>
                  <p className="discover-p-tag container">
                    We are analyze the profile about the history, skillset and
                    the background of the candidate which helps us in
                    identifying that fits to your requirement.
                    <br></br>
                    <br></br>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="img-page-one mt-3">
            <div className="section-one container">
              <div className="first-row container">
                <img
                  src="assets/images/evalute.png"
                  className="img-one-one container"
                  alt="img"
                />
                <p className="discover-h-three">3. Evaluate</p>
                <p className="discover-p-tag container">
                  Since we also have a software expertise we can screen and
                  evaluate the technical skills form our end that suites for you
                  and we pass though the evaluation process for you end.
                  <br></br>
                  <br></br>
                </p>
              </div>
            </div>
          </div>
          <div className=" margin-section-second">
            <div className="content-one  ">
              <div className="content-two ">
                <div className="img-page-two container  ">
                  <img src="assets/images/onboard.png" width="100%" alt="img" />
                  <p className="discover-h-three">4. Onboard</p>
                  <p className="discover-p-tag container">
                    We will not only follow-up we take ownership on onboarding
                    the candidates for you that helps both us on an easy going
                    business.<br></br>
                    <br></br>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ..... */}

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
                    <br></br>
                     <br></br> 
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
            <img src="assets/images/Images--with-connector.png" />
          </div>
          <div className="container  join-team">
            <div className="">
              <p className="join-our">Join Our Team</p>
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
            <p className="join-our">Join Our Team</p>
            <div className="under-code">
              <img
                className="code-line"
                src="assets/images/undec-code-line.svg"
                alt="img"
              />
            </div>
            {/* <p className="join-p-tag">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              <br></br>
              do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p> */}
            <button className="bt">Join Us</button>
          </div>

          <div className="small-logo-section">
            <div>
              <img src="assets/images/frisrt-logo.png" alt="logo" />
              <img src="assets/images/second-logo.png" alt="logo" />
              <img src="assets/images/third-logo.png" alt="logo" />
              <img src="assets/images/fourth-logo.png" alt="logo" />
              <img src="assets/images/fifth-logo.png" alt="logo" />
            </div>
          </div>
        </div>
        {/* ...........................................logo section.............. */}
      </Div>
    </div>
  );
};

export default AboutPage;
