import React from "react";
import Head from "next/head";

import { Worked, Header, Image, SmallHeader } from "../../../styles/workstyle";
import StillNotSure from "../../ServicePage/StilNotSure"
const PeramanentDeployment = () => {
  return (
    <>
      <Head>
        <title>Permanent Recruitment </title>
        <meta
          property="og:image"
          content="https://www.applogiq.org/assets/images/metaimg.png"
        />
        <meta
          name="linkedin:image"
          content="https://www.applogiq.org/assets/images/metaimg.png"
        />
        <meta
          name="twitter:image"
          content="https://www.applogiq.org/assets/images/metaimg.png"
        />
        <meta
          name="instagram:image"
          content="https://www.applogiq.org/assets/images/metaimg.png"
        />
        <meta
          name="title"
          content="StaffQ is a leading permanent staffing service and solution 
          provider in India, we place the required candidates to the industries filtering their skills"
        />
        <meta
          name="description"
          content="StaffQ is a leading permanent staffing service and solution provider
           in India, we place the required candidates to the industries filtering their skills"
        />
        <meta name="keywords" content="Permanent Recruitment  " />

        <link
          rel="canonical"
          href="https://www.staffq.in/permanent-requirement"
        />

        <link rel="alternate" href="https://www.staffq.in/" hreflang="en-in" />

        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="StaffQ is a leading permanent staffing service and
        solution provider in India, we place the required candidates to the industries filtering their skills"
        />
        <meta
          property="og:description"
          content="StaffQ is a leading permanent staffing service and solution 
          provider in India, we place the required candidates to the industries filtering their skills."
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
      <Worked>
        {/* ........................................header............section................. */}
        <Header>
          <div lassName="header">
            <div className="container-fluid">
              <div className="container">
                <div className="row">
                  <div className="col-lg-6 col-sm-12 col-md-6">
                    <img
                      src="assets/images/banner-param.png"
                      className="ball-image"
                      width="100%"
                      alt="img"
                    />
                    <div className="ball-one-page">
                      <h1>Permanent Recruitment</h1>
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
                  <div className="col-lg-6 col-sm-12 col-md-6">
                    <div>
                      <div className="image-section">
                        <div className="row">
                          <div className="col-lg-3"></div>
                          <div className="col-lg-9">
                            <img
                              src="assets/images/Banner-para-Image.png"
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
            </div>
          </div>
        </Header>
        {/* ...........................sm.............header.................... */}
        <div className="small-header">
          <div className="container-fluid p-0">
            <SmallHeader>
              <div className="container">
                <div className="small-img">
                  <img
                    src="assets/images/banner-param.png"
                    alt="img"
                    width="100%"
                  />
                </div>
                <div className="ball-sm-page">
                  <p className="h2">Permanent Recruitment</p>
                  <p>
                    The chances of getting a better candidate are higher with
                    permanent staffing services. Our expertise lies in being
                    creative, designing effective strategies, and delivering
                    solutions that work. We help organizations hire expert
                    full-time talent across all levels in IT and Non-IT skills.
                  </p>
                </div>

                <div>
                  <img
                    src="assets/images/Banner-para-Image.png"
                    className="banner-image"
                    alt="img"
                    width="100%"
                  />
                </div>
              </div>
            </SmallHeader>
          </div>
        </div>

        {/* ................................next section................................ */}

        <div className="hiring-tag" style={{}}>
          <section className="container">
            <div className="row">
              <div className="col-lg-6 col-md-12 col-sm-12">
                <h2 className=" Hiring-qualified">
                  Hiring qualified people that will positively impact a
                  company's success over time.
                </h2>
                <img
                  src="assets/images/Mission-vision-image.png"
                  width="100%"
                  className="second-code"
                ></img>
              </div>
              <div
                className="col-lg-6 col-md-12 col-sm-12 "
                style={{ paddingLeft: "2rem" }}
              >
                <div className="row">
                  <div className="col-lg-12 col-sm-12 col-md-12">
                    <div>
                      <div className="d-flex">
                        <img
                          src="assets/images/line.svg"
                          className="mt-4"
                          alt="img"
                        />
                        <h4 className="whats-happening ">What’s happening?</h4>
                      </div>
                      <p className="solution-p-tag">
                        It is a matter of great concern today that many
                        establishments are finding it increasingly difficult to
                        find the right candidate for a specific project or task.
                        As a result, their HR departments are compelled to
                        manage with the candidates that are somewhat suitable
                        and available. But in the long run, this kind of
                        adjustment plays havoc with the team performance and
                        projects suffer as a consequence. Deadlines are not met
                        and the work done may be shoddy and incomplete.
                      </p>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-lg-12 col-sm-12 col-md-12">
                      <div>
                        <div className="d-flex">
                          <img
                            src="assets/images/line.svg"
                            className="mt-4"
                            alt="img"
                          />
                          <h4 className="whats-happening ">Situation</h4>
                        </div>
                        <p className="solution-p-tag">
                          By the time they fire such employees after realizing
                          that it was an unwise decision to recruit them, it is
                          too late. They have to stare at heavy losses and
                          further orders are affected. What to do in this
                          situation?
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* ............................................next------section............................. */}

        <div>
          <section className="Hiring-Process container-fluid">
            {/* <div className="container pt-4 text-center">
            <p className="so-what" style={{ fontWeight: "600" }}>
              So what should have been the correct move in the first place?
            </p>
            <p style={{ fontSize: "15px" }}>
              These companies should have approached good agencies that provide
              permanent staffing solutions.
            </p>
          </div> */}
            <div className="container">
              <div className="row About">
                <div className="col-lg-6 col-md-12 col-sm-12">
                  <div className="row ">
                    <div className="col-lg-12 col-sm-12 col-md-12">
                      <div className="solution-header ">
                        <div className="d-flex ">
                          <img
                            src="assets/images/line.svg"
                            className="mt-4"
                            alt="img"
                          />
                          <h2 className="whats-happening  Solution">
                            Solution
                          </h2>
                        </div>
                        <p className="solution-p-tag">
                          StaffQ Consultancy Pvt. ltd . is one such
                          fastest-growing provider of Permanent Staffing
                          Services. It caters to reputed IT and non-IT
                          companies, establishments and firms all over India.
                          StaffQ assists you in selecting the most suitable
                          candidates in any field on a permanent basis. With a
                          dedicated belief of total commitment to the companies
                          for whom StaffQ provides permanent staffing services,
                          it delivers value for money by careful screening of
                          individual profiles. Our database for permanent
                          staffing services includes serious candidates that
                          possess the requisite experience and exposure to do
                          complete justice to the nature of duties assigned.
                          Hence if you need permanent staff for your company,
                          rest assured, Team Plus will fulfill your HR needs and
                          you can enjoy a relaxed and stress-free staffing
                          procedure.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12">
                  <div>
                    <img
                      src="assets/images/Image.png"
                      className="hand-img "
                      width="100%"
                      alt="img"
                    />
                    <br></br>
                    <br></br>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* ................................................next.....................content........... */}
        <div className="container">
          <div className="text-center mt-5">
            <p className="hiring-process">Hiring Process</p>
            <p>
              StaffQ focuses on hiring highly qualified and talented candidates{" "}
              <br></br>
              that are willing to grow with your company over time.{" "}
            </p>
          </div>
        </div>

        {/* .......................................new section............... */}

        <div>
          <div className="medium-small-view">
            <div className="container">
              <div className="row">
                <div className="col-md-4 col-sm-12">
                  <img
                    src="assets/images/under-imgaess.svg"
                    className="round-img"
                    alt="img"
                  />
                  <p className="img-p-tag">Requirement Gathering</p>
                </div>
                <div className="col-md-4 col-sm-12">
                  <img
                    src="assets/images/inteview.img.png"
                    className="round-img"
                    alt="img"
                  />
                  <p className="img-p-tag">Requirement Discussion</p>
                </div>
                <div className="col-md-4 col-sm-12">
                  <img
                    src="assets/images/contract.img.png"
                    className="round-img"
                    alt="img"
                  />
                  <p className="img-p-tag">Contract Signing</p>
                </div>
              </div>

              <div className="row">
                <div className="col-md-4 col-sm-12">
                  <img
                    src="assets/images/rqt.img.png "
                    className="round-img"
                    alt="img"
                  />
                  <p className="img-p-tag">Panel Interview</p>
                </div>
                <div className="col-md-4 col-sm-12">
                  <img
                    src="assets/images/contact-img.png "
                    className="round-img"
                    alt="img"
                  />
                  <p className="img-p-tag"> Candidate Identification</p>
                </div>
                <div className="col-md-4 col-sm-12">
                  <img
                    src="assets/images/get-img.svg "
                    className="round-img"
                    alt="img"
                  />
                  <p className="img-p-tag">Closure</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ..............................................images.................and row.............. */}

        <Image>
          <div className="container">
            <div className="">
              <div>
                <img
                  src="assets/images/images-under-pic.svg"
                  className="under-pic one"
                  alt="img"
                />
              </div>
            </div>
            <div className="two">
              <div className="three">
                <div className="row">
                  <div className="col-lg-3 col-sm-12 ">
                    <div>
                      <img
                        src="assets/images/under-imgaess.svg"
                        className="round-img"
                        alt="img"
                      />
                    </div>
                  </div>
                  <div className="col-lg-1"></div>
                  <div className="col-lg-3 col-sm-12 ">
                    <div>
                      <img
                        src="assets/images/contract.img.png"
                        className="round-img"
                        alt="img"
                      />
                    </div>
                  </div>
                  <div className="col-lg-1"></div>
                  <div className="col-lg-3 col-sm-12 ">
                    <div>
                      <img
                        src="assets/images/inteview.img.png"
                        className="round-img"
                        alt="img"
                      />
                    </div>
                  </div>
                  <div className="col-lg-1"></div>
                </div>
                {/* .............................................second...row */}

                <div className="second-imgaes-content">
                  <div className="row">
                    <div className="col-lg-2">
                      <p>
                        Requirement <br></br>
                        Gathering
                      </p>
                    </div>
                    <div className="col-lg-2 second-imgaes-content">
                      <div className="horizontal">
                        <hr></hr>
                      </div>
                      <div className="uder-cover-img">
                        <img
                          src="assets/images/rqt.img.png "
                          className="round-img"
                          alt="img"
                        />
                        <p className="second-p"> Requirement Discussion</p>
                      </div>
                    </div>
                    <div className="col-lg-2">
                      <p>
                        Contract <br></br>
                        Signing
                      </p>
                    </div>
                    <div className="col-lg-2 second-imgaes-content">
                      <div className="horizontal">
                        <hr></hr>
                      </div>
                      <div className="uder-cover-img">
                        <img
                          src="assets/images/contact-img.png "
                          className="round-img"
                          alt="img"
                        />
                        <p className="second-p"> Candidate Identification</p>
                      </div>
                    </div>
                    <div className="col-lg-2">
                      <p>
                        Panel<br></br>
                        Interview
                      </p>
                    </div>
                    <div className="col-lg-2 second-imgaes-content">
                      <div className="horizontal">
                        <hr></hr>
                      </div>
                      <div className="uder-cover-img last-pic">
                        <img
                          src="assets/images/get-img.svg "
                          className="round-img"
                          alt="img"
                        />
                        <p className="second-p">Closure</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Image>

        <div>
          <div className="small-image-section"></div>
        </div>

        {/* ............................................next......section,,,,,,,,,,,,,, */}

        {/* .......................................................... */}
        <div>
          <section>
            <div className="container-fluid ps-0">
              <div className="row ">
                <div className="col-lg-6 col-sm-12 col-md-12 benefit-image">
                  <img
                    src="assets/images/Mission-.png"
                    className="mission"
                  ></img>
                </div>
                <div
                  className="col-lg-6 col-sm-12 col-md-12 big-screen container "
                  style={{ paddingTop: "1rem" }}
                >
                  <div className="container">
                    <p className="Benefits ">Benefits of Permanent Hiring</p>
                    <div className="null">
                      <img
                        src="assets/images/uper-unterline.svg"
                        width="100%"
                        className="uper-under-line"
                      />
                    </div>

                    <div className="row">
                      <div className="col-lg-1 col-sm-1 col-md-1">
                        <div className="">
                          <img src="assets/images/right-icons.svg"></img>
                        </div>
                      </div>
                      <div className="col-lg-11 col-md-11 col-sm-11">
                        <p className="second-p-tag notview">
                          Excellent technical hiring skills and can easily
                          identify potential <br></br>candidates
                        </p>
                        <p className="small-screen">
                          {" "}
                          Excellent technical hiring skills and can easily
                          identify potential candidates
                        </p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-1 col-sm-1 col-md-1">
                        <div className="">
                          <img src="assets/images/right-icons.svg"></img>
                        </div>
                      </div>
                      <div className="col-lg-11 col-md-11 col-sm-11">
                        <p className="second-p-tag notview">
                          We handle the entire employment process including{" "}
                          resume- screening, <br></br> interview-conduction,
                          background/ reference verification, etc.
                        </p>
                        <p className="small-screen">
                          {" "}
                          We handle the entire employment process including{" "}
                          resume- screening, interview-conduction, background/
                          reference verification, etc
                        </p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-1 col-sm-1 col-md-1">
                        <div className="">
                          <img src="assets/images/right-icons.svg"></img>
                        </div>
                      </div>
                      <div className="col-lg-11 col-md-11 col-sm-11">
                        <p className="second-p-tag notview">
                          We make the on-boarding procedure smooth for
                          companies, by <br></br> providing the selected
                          candidate’s entire documentation file
                        </p>
                        <p className="small-screen">
                          {" "}
                          We make the on-boarding procedure smooth for
                          companies, by providing the selected candidate’s
                          entire documentation file
                        </p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-1 col-sm-1 col-md-1">
                        <div className="">
                          <img src="assets/images/right-icons.svg"></img>
                        </div>
                      </div>
                      <div className="col-lg-11 col-md-11 col-sm-11">
                        <p className="second-p-tag notview">
                          Follow-up of performance feedback of employees is
                          given due<br></br> importance
                        </p>
                        <p className="small-screen">
                          {" "}
                          Follow-up of performance feedback of employees is
                          given due importance
                        </p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-1 col-sm-1 col-md-1">
                        <div className="">
                          <img src="assets/images/right-icons.svg"></img>
                        </div>
                      </div>
                      <div className="col-lg-11 col-md-11 col-sm-11">
                        <p className="second-p-tag notview">
                          Follow-up of performance feedback of employees is
                          given due <br></br>importance
                        </p>
                        <p className="small-screen">
                          {" "}
                          Follow-up of performance feedback of employees is
                          given due importance
                        </p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-1 col-sm-1 col-md-1">
                        <div className="">
                          <img src="assets/images/right-icons.svg"></img>
                        </div>
                      </div>
                      <div className="col-lg-11 col-md-11 col-sm-11">
                        <p className="second-p-tag notview">
                          As candidates are qualified and reliable, there is a
                          higher probability of retention <br></br> of such
                          employees within the company and this is beneficialin
                          the long run{" "}
                        </p>
                        <p className="small-screen">
                          {" "}
                          As candidates are qualified and reliable, there is a
                          higher probability of retention of such employees
                          within the company and this is beneficial in the long
                          run{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 not-show ">
                  <div className="container">
                    <p className="Benefits ms-5 ">
                      Benefits of Permanent Hiring
                    </p>
                    <div className="null">
                      <img
                        src="assets/images/uper-unterline.svg"
                        width="100%"
                        className="uper-under-line"
                      />
                    </div>
                    <span>
                      <img src="assets/images/right-icons.svg"></img>
                    </span>
                    <span>
                      Excellent technical hiring skills and can easily identify
                      potential candidates
                    </span>
                    <p></p>
                    <br></br>
                    <span>
                      <img src="assets/images/right-icons.svg"></img>
                    </span>
                    <span>
                      We handle the entire employment process including resume-
                      screening, interview-conduction, background/ reference
                      verification, etc.
                    </span>
                    <br></br> <br></br>
                    <span>
                      <img src="assets/images/right-icons.svg"></img>
                    </span>
                    <span>
                      We make the on-boarding procedure smooth for companies, by
                      providing the selected candidate’s entire documentation
                      file
                    </span>
                    <br></br> <br></br>
                    <span>
                      <img src="assets/images/right-icons.svg"></img>
                    </span>
                    <span>
                      Follow-up of performance feedback of employees is given
                      due importance
                    </span>
                    <br></br> <br></br>
                    <span>
                      <img src="assets/images/right-icons.svg"></img>
                    </span>
                    <span>
                      Follow-up of performance feedback of employees is given
                      due importance
                    </span>
                    <br></br> <br></br>
                    <span>
                      <img src="assets/images/right-icons.svg"></img>
                    </span>
                    <span>
                      As candidates are qualified and reliable, there is a
                      higher probability of retention of such employees within
                      the company and this is beneficial in the long run
                    </span>
                    <br></br>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* .........................form...................section.............................. */}
        <StillNotSure />
      </Worked>
      <div></div>
    </>
  );
};

export default PeramanentDeployment;
