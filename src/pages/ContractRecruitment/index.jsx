import React from "react";
// import { Div , Header, SmallHeader } from '../../styles/ContractRecruitment'
import Head from "next/head";
import { Worked, Header, Image, SmallHeader } from "../../styles/contract";
import { useFormik } from "formik";
import * as yup from "yup";
import styled from "styled-components";

export const ErrorText = styled.div`
  color: red;

  font-size: 10px;

  padding-bottom: 5px;

  font-weight: 600;
`;
const ContractRecruitment = () => {
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
      <title>Contract Recruitment  </title>
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
        content="SatffQ is leading contract staffing & payroll outsourcing
         services in India offers contract jobs for the right candidate. Enquire for temporary staffing services now!"
      />
      <meta
        name="description"
        content="SatffQ is leading contract staffing & payroll outsourcing 
        services in India offers contract jobs for the right candidate. Enquire for temporary staffing services now!"
      />
      <meta name="keywords" content="Contract Recruitment   " />

      <link
        rel="canonical"
        href="https://www.staffq.in/contract-recruitment"
      />

      <link rel="alternate" href="https://www.staffq.in/" hreflang="en-in" />

      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="website" />
      <meta
        property="og:title"
        content="SatffQ is leading contract staffing & payroll outsourcing 
        services in India offers contract jobs for the right candidate. Enquire for temporary staffing services now!"
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
                    <h1>Contract Recruitment</h1>
                    <p>
                      StaffQ is a contract staffing agency that helps
                      enterprises and businesses by providing temporary staffing
                      solutions. We help businesses to build a competent and
                      effective workforce so they can focus on their core goals.
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
                            src="assets/images/contract-Image.png"
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
                <p className="h2">Contract Recruitment</p>
                <p>
                  StaffQ is a contract staffing agency that helps enterprises
                  and businesses by providing temporary staffing solutions. We
                  help businesses to build a competent and effective workforce
                  so they can focus on their core goals.
                </p>
              </div>

              <div>
                <img
                  src="assets/images/contract-Image.png"
                  className="banner-image"
                  alt="img"
                  width="100%"
                />
              </div>
            </div>
          </SmallHeader>
        </div>
      </div>

      {/* .................................next ......section................. */}

      <div>
        <div className="hiring-tag" style={{}}>
          <section className="container">
            <div className="row">
              <div className="col-lg-6 col-md-12 col-sm-12">
                <h2 className=" Hiring-qualified">
                  We help companies to source, screen and communicate with
                  candidates
                </h2>
                <img
                  src="assets/images/solution-why.img.png"
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
                        Across the nation, big and small companies are stumbling
                        to handle increased government directives and
                        unpredictable market requirements. You may not want to
                        recruit permanent workers on a full-time basis, whenever
                        things are unpredictable. You desire the adaptability of
                        agile, on-demand employees who are qualified to manage
                        your business processes just the way you want.
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
                          We have a verified, time-tested hiring procedure that
                          permits us to hire just the right applicants for your
                          organization. We have efficient networks everywhere in
                          the nation which gives us access to a large number of
                          applicants.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      {/* ...........next--section............... */}

      <div>
        <section className="Hiring-Process container-fluid">
     
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
                        <h2 className="whats-happening  Solution">Solution</h2>
                      </div>
                      <p className="solution-p-tag">
                        StaffQ offers dependable contract staffing solutions
                        that provide you the chance to enhance the strength of
                        your staff without recruiting them permanently, helps
                        overloaded workers during crucial times, and keeps work
                        continuing. We have one of the excellent Job placement
                        agencies in India, providing permanent service,
                        price-effective, and orderly Human Resource
                        administration services to companies that may not have
                        the essential support or inclination to accomplish these
                        labour-intensive duties. When you are recruiting us as
                        your contract staffing agent, we would work just like
                        your organization’s own human resource office. Depending
                        on the requirements of your latest business cycle, our
                        contract staffing services will allow your company to
                        staff up or down.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12">
                <div>
                  <img
                    src="assets/images/why-chose.img.png"
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

      {/* ..............................next--section..................................... */}

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
                      <p className="img-p-tag">Contract 
  Signing</p>

              </div>
                  </div>

                  <div className="row">
                    <div className="col-md-4 col-sm-12">
                    <img
                          src="assets/images/rqt.img.png "
                          className="round-img"
                          alt="img"
                        />
                      <p className="img-p-tag">Panel
  Interview</p>
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
                      <p  className="second-p"> Requirement Discussion</p>
                    </div>
                  </div>
                  <div className="col-lg-2">
                    <p>
                      Internal Interview <br></br>
                      
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
                      <p  className="second-p">Client Interview</p>
                    </div>
                  </div>
                  <div className="col-lg-2">
                    <p>
                      Contracrt<br></br>
                      Signing
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
                      <p  className="second-p">Closure</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Image>
      {/* ........................next.................... */}
      <div>
        <section>
          <div className="container-fluid ps-0">
            <div className="row ">
              <div className="col-lg-6 col-sm-12 col-md-12 benefit-image">
                <img
                  src="assets/images/second-paranm.img.png"
                  className="mission"
                ></img>
              </div>
              <div
                className="col-lg-6 col-sm-12 col-md-12 big-screen "
                style={{ }}
              >
                <div className="container">
                  <p className="Benefits ">Benefits of Contract Staffing</p>
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
                        Contract staffing services are cost-effective
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
                        Contract staffing services limit the Business Liability
                        and Risk
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
                        Access to specialized skills
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
                        Access to a larger talent pool
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
                        Fulfill short term business needs
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
                        Take some responsibility off the HR department
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
                        Escaping the ACA requirementss
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
                        Prevent laying off employees
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
                  <span>Contract staffing services are cost-effective</span>
                  
                  <br></br>
                  <span>
                    <img src="assets/images/right-icons.svg"></img>
                  </span>
                  <span>
                    Contract staffing services limit the Business Liability and
                    Risk
                  </span>
                  <br></br> 
                  <span>
                    <img src="assets/images/right-icons.svg"></img>
                  </span>
                  <span>Access to a larger talent pool</span>
                  <br></br> 
                  <span>
                    <img src="assets/images/right-icons.svg"></img>
                  </span>
                  <span>Access to specialized skills</span>
                  <br></br> 
                  <span>
                    <img src="assets/images/right-icons.svg"></img>
                  </span>
                  <span>Access to a larger talent pool</span>
                  <br></br> 
                  <span>
                    <img src="assets/images/right-icons.svg"></img>
                  </span>
                  <span>Fulfill short term business needs</span>
                  <br></br>
                  <span>
                    <img src="assets/images/right-icons.svg"></img>
                  </span>
                  <span>Take some responsibility off the HR department</span>
                  <br></br>
                  <span>
                    <img src="assets/images/right-icons.svg"></img>
                  </span>
                  <span>Prevent laying off employees</span>
                  <br></br>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* .......form........ */}
      <div className="form-section">
        <div className="container mt-5">
          <section>
            <div className="text-center">
              <p className="still-not-sure">Still not Sure? Let’s Talk</p>
              <p className=" Our-team">
                Our team of experts will connect with you with more elaberate
                details.<br></br>
                Connect with us.
              </p>
              <p className="Our-team-one">
                Our team of experts will connect with you with more elaberate
                details.
                Connect with us.
              </p>
            </div>
            <div className="form container">
            <form>
                  <div className="form-group mt-2">
                    <label for="exampleInputEmail1">Name*</label>
                    <br></br>
                    <input
                     
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      name="firstName"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.firstName}
                    />
                       {formik.touched.firstName && formik.errors.firstName ? (
                      <ErrorText>{formik.errors.firstName}</ErrorText>
                    ) : (
                      <ErrorText>&nbsp;</ErrorText>
                    )}{" "}
                  </div>
                  <div className="form-group ">
                    <label for="exampleInputEmail1">Phone Number*</label>
                    <input
                       type="number"
                       name="ln"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.ln}
                      required
                    />
                        {formik.touched.ln && formik.errors.ln ? (
                      <ErrorText>{formik.errors.ln}</ErrorText>
                    ) : (
                      <ErrorText>&nbsp;</ErrorText>
                    )}
                    
                  </div>
                  <div className="form-group ">
                    <label for="exampleInputPassword1">Email Address*</label>
                    <input type="text" className="form-control"
                    
                    name="email"
                   
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}/>
                      {formik.touched.email && formik.errors.email ? (
                      <ErrorText>{formik.errors.email}</ErrorText>
                    ) : (
                      <ErrorText>&nbsp;</ErrorText>
                    )}
                  </div>
                  <div className="d-flex justify-content-end">
                    <button className="submited" onClick={formik.handleSubmit}>Submit</button>
                  </div>
                  <br></br>
                  <br></br>
                </form>
            </div>
          </section>
        </div>
      </div>
    </Worked>
  );
};

export default ContractRecruitment;
