import React from "react";
import Head from "next/head";
import { Worked, Header, Image, SmallHeader } from "../../../styles/contract";
import { useFormik } from "formik";
import * as yup from "yup";
import StillNotSure from "../../ServicePage/StilNotSure"
import styled from "styled-components";

export const ErrorText = styled.div`
  color: red;

  font-size: 10px;

  padding-bottom: 5px;

  font-weight: 600;
`;
const OffshoreRecruitment = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      // experience: "",
      // linkedin: "",
      // number: "",
      // location: "",
      // files: "",
      ln: "",
      // fn: "",
    },
    validationSchema: yup.object({
      firstName: yup.string()
        // .max(15, "Must be 15 characters or less")
        .required("Required *"),
      lastName: yup.string().required("Required *"),
      email: yup.string().email("Invalid email address").required("Required*"),
      number: yup.string().max(10, "").required("Required*"),
      experience: yup.string().required("Required*"),
      linkedin: yup.string().required("Required*"),
      files: yup.mixed().required("Required*"),
      ln: yup.mixed().required("Required*"),
      fn: yup.mixed().required("Required*"),
      location: yup.mixed().required("Required*"),
    }),
    onSubmit: (values) => {
      console.log(values, "heloooooooo");
      setPopup(true);
      // formik.handleReset();
    },
  });
  return (
    <Worked>
                  <Head>
      <title>off Shore Recruitment    </title>
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
        content="
        Get highly curated IT remote workers for hire from the best staffing
         agency in India. Hire qualified workers on contract from StaffQ."
      />
      <meta
        name="description"
        content="
        Get highly curated IT remote workers for hire from the best 
        staffing agency in India. Hire qualified workers on contract from StaffQ."
      />
      <meta name="keywords" content="off Shore Recruitment    " />

      <link
        rel="canonical"
        href="https://www.staffq.in/onshore-recruitment"
      />

      <link rel="alternate" href="https://www.staffq.in/" hreflang="en-in" />

      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="website" />
      <meta
        property="og:title"
        content="
        Get highly curated IT remote workers for hire from the best 
        staffing agency in India. Hire qualified workers on contract from StaffQ."
      />
      <meta
        property="og:description"
        content="
        Get highly curated IT remote workers for hire from the best staffing agency in 
        India. Hire qualified workers on contract from StaffQ."
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
      {" "}
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
                    <h1>Offshore Recruitmentt</h1>
                    <p>
                      At staffq Search, we understand that companies who wish to
                      save money, time, and effort look for offshore IT staffing
                      solutions. We offer IT staffing solutions that you can
                      depend on!
                    </p>
                  </div>
                </div>
                <div className="col-lg-6 col-sm-12 col-md-6">
                  <div>
                    <div className="image-section">
                      <div className="row">
                        <div className="col-lg-2"></div>
                        <div className="col-lg-10">
                          <img
                            src="assets/images/off-shore.img.png"
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
                <p className="h2">Offshore Recruitment</p>
                <p>
                  At staffq Search, we understand that companies who wish to
                  save money, time, and effort look for offshore IT staffing
                  solutions. We offer IT staffing solutions that you can depend
                  on!
                </p>
              </div>

              <div>
                <img
                  src="assets/images/off-shore.img.png"
                  className="banner-image"
                  alt="img"
                  width="100%"
                />
              </div>
            </div>
          </SmallHeader>
        </div>
      </div>
      {/* .........................next-section......................... */}
      <div className="hiring-tag" style={{}}>
        <section className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12">
              <h2 className=" Hiring-qualified">
                We help companies to source, screen and communicate with
                candidates
              </h2>
              <img
                src="assets/images/Offshore-Staffing.img.png"
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
                      <h4 className="whats-happening ">Offshore Staffing</h4>
                    </div>
                    <p className="solution-p-tag">
                      It helps North American, European and other international
                      companies build quality remote technical teams cost
                      effectively. We recruit, manage the HR and host these
                      employees out of our office spaces, so that you can grow
                      engineering team quickly and at a lower cost relative to
                      hiring locally. Hire developers within a days, without
                      worrying about office space and overhead.
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
                        <h4 className="whats-happening ">
                          Save costs & maintain control
                        </h4>
                      </div>
                      <p className="solution-p-tag">
                        Lower your cost per engineering hire by at least 50%,
                        with the equivalent quality of engineers that you would
                        find locally. Unlike freelancers or outsourcing
                        companies, your engineers work out of an LSS office,
                        have time and attendance monitored by LSS and are
                        governed by strict confidentiality and IP protection
                        agreements.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* ............................next section................. */}
      <div>
        <section className="Hiring-Process container-fluid">
         
          <div className="container">
            <div className="row About">
              <div className="col-lg-6 col-md-12 col-sm-12">
                <div className="row ">
                  <div className="col-lg-12 col-sm-12 col-md-12">
                    <div>
                      <div className="d-flex">
                        <img
                          src="assets/images/line.svg"
                          className="mt-4"
                          alt="img"
                        />
                        <h4 className="whats-happening ">Why Us?</h4>
                      </div>
                      <p className="solution-p-tag">
                        We assist companies in locating exactly the type of
                        talent they're looking for. We not only provide the best
                        talents to corporate companies but also keep
                        time-efficiency and cost-efficiency our top priority.
                        StaffQ extends solutions to cope with the procedure of
                        searching for offsite IT staff for the varying needs of
                        corporate companies. Our Offsite Staffing Services deals
                        with such situations in the most controlled manner, by
                        sorting out a good and experienced team of candidates.
                        This further helps companies in their crucial projects
                        by balancing time, efficiency, and quality.
                      </p>
                    </div>
                    <div>
                      <div className="d-flex">
                        <img
                          src="assets/images/line.svg"
                          className="mt-4"
                          alt="img"
                        />
                        <h4 className="whats-happening ">We are the best</h4>
                      </div>
                      <p className="solution-p-tag">
                        The benefits of employing StaffQ to provide Your
                        Offshore Staffing Solutions are many. The companies can
                        keep their staff in a profit-making way since the cost
                        of off-shore employees is low and thus the businesses
                        can make more money. Businesses are able to increase or
                        decrease the size of their offshore team with no issues
                        as long as these projects are within the timeframes
                        specified by the company.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12">
                <div>
                  <img
                    src="assets/images/We-are-the-best.img.png"
                    className="hand-img "
                    width="100%"
                    alt="img"
                  />
                  <br></br>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* ................next................... */}
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
      {/* ....medium....... */}
   
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
                  <p className="img-p-tag">Requirement
  Discussion</p>
              </div>
              <div className="col-md-4 col-sm-12">
              <img
                        src="assets/images/contract.img.png"
                        className="round-img"
                        alt="img"
                      />
                      <p className="img-p-tag">Internal
Interview</p>

              </div>
                  </div>

                  <div className="row">
                    <div className="col-md-4 col-sm-12">
                    <img
                          src="assets/images/rqt.img.png "
                          className="round-img"
                          alt="img"
                        />
                      <p className="img-p-tag">Client
Interview</p>
                    </div>
                    <div className="col-md-4 col-sm-12">
                    <img
                          src="assets/images/contact-img.png "
                          className="round-img"
                          alt="img"
                        />
                        <p className="img-p-tag"> Visa
Finalization</p>
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
      {/* .....next....... */}
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
                      Internal<br></br>
                     Interview
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
                      <p className="second-p">Client Interview</p>
                    </div>
                  </div>
                  <div className="col-lg-2">
                    <p>
                      Visa<br></br>
                      Finalization
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
      {/* ..............next................... */}
      <div>
        <section>
          <div className="container-fluid ps-0">
            <div className="row ">
              <div className="col-lg-6 col-sm-12 col-md-12 benefit-image">
                <img
                  src="assets/images/offshoe-benifits.img.png"
                  className="mission"
                ></img>
              </div>
              <div
                className="col-lg-6 col-sm-12 col-md-12 big-screen "
                style={{ paddingTop: "5rem" }}
              >
                <div className="container">
                  <p className="Benefits ">Benefits of Offshore Staffing</p>
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
                      <p className="second-p-tag notview">Business growth</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-1 col-sm-1 col-md-1">
                      <div className="">
                        <img src="assets/images/right-icons.svg"></img>
                      </div>
                    </div>
                    <div className="col-lg-11 col-md-11 col-sm-11">
                      <p className="second-p-tag notview">Reduced costs</p>
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
                        Access to skilled resources
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
                        Time zone advantage
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
                        Control from miles away
                      </p>
                      <p className="small-screen"> </p>
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
                        Greater marketing opportunity
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
                        {" "}
                        Availability in different locations
                      </p>
                      <p className="small-screen"> </p>
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
                        {" "}
                        Opportunity to focus on complex tasks
                      </p>
                      <p className="small-screen"> </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 not-show ">
                <div className="container">
                  <p className="Benefits ms-5 ">
                    Benefits of Contract Staffing
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
                  <span>Business growth</span>
                  
                  <br></br>
                  <span>
                    <img src="assets/images/right-icons.svg"></img>
                  </span>
                  <span>Reduced costs</span>
                  <br></br> 
                  <span>
                    <img src="assets/images/right-icons.svg"></img>
                  </span>
                  <span>Access to skilled resources</span>
                  <br></br> 
                  <span>
                    <img src="assets/images/right-icons.svg"></img>
                  </span>
                  <span>Time zone advantage</span>
                  <br></br> 
                  <span>
                    <img src="assets/images/right-icons.svg"></img>
                  </span>
                  <span>Control from miles away</span>
                  <br></br> 
                  <span>
                    <img src="assets/images/right-icons.svg"></img>
                  </span>
                  <span>Greater marketing opportunity</span>
                  <br></br>
                  <span>
                    <img src="assets/images/right-icons.svg"></img>
                  </span>
                  <span>Availability in different locations</span>
                  <br></br>
                  <span>
                    <img src="assets/images/right-icons.svg"></img>
                  </span>
                  <span>Opportunity to focus on complex tasks</span>
                  <br></br>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* .......form........ */}
      <StillNotSure />
    </Worked>
  );
};

export default OffshoreRecruitment;
