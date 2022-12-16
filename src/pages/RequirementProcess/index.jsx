import React from "react";
import Head from "next/head";
import { useFormik } from "formik";
import * as yup from "yup";
import styled from "styled-components";
import { Worked, Header, Image, SmallHeader } from "../../styles/rpo";
export const ErrorText = styled.div`
  color: red;

  font-size: 10px;

  padding-bottom: 5px;

  font-weight: 600;
`;
const RequirementProcess = () => {
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
      firstName: yup
        .string()
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
    <div>
      <Head>
        <title>recruitment process outsourcing </title>
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
          content="Looking for an effective and holistic RPO solution? We offer 
        end-to-end talent supply chain optimisation through a diagnosis-led approach"
        />
        <meta
          name="description"
          content="Looking for an effective and holistic RPO solution? We offer
         end-to-end talent supply chain optimisation through a diagnosis-led approach"
        />
        <meta name="keywords" content="recruitment process outsourcing   " />

        <link
          rel="canonical"
          href="https://www.staffq.in/requirement-process"
        />

        <link rel="alternate" href="https://www.staffq.in/" hreflang="en-in" />

        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Looking for an effective and holistic RPO solution?
         We offer end-to-end talent supply chain optimisation through a diagnosis-led approach"
        />
        <meta
          property="og:description"
          content="Looking for an effective and holistic RPO solution? We offer 
        end-to-end talent supply chain optimisation through a diagnosis-led approach"
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
      </Head>

      <Worked>
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
                      <span className="header-h-one">
                        Recruitment Process<br></br> Outsourcing
                      </span>
                      {/* <br></br>
                      <span className="header-h-one"></span> */}{" "}
                      <p className="first-p-tag">
                        Our recruitment process outsourcing (RPO) is all about
                        finding the right people to realize your organization's
                        full potential. Our approach is simple — we listen,
                        understand your needs and build a talent acquisition
                        model that can adapt and evolve with your business
                      </p>
                      <p className="second-p-tag">
                        Our recruitment process outsourcing (RPO) is all about
                        finding the right people to realize your organization's
                        <br></br>
                        full potential. Our approach is simple — we listen,
                        understand your needs and build a talent acquisition
                        model that can adapt and evolve with your business
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
                              src="assets/images/require-img.png"
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
                  <h2>Recruitment Process Outsourcing</h2>
                  <p>
                    Our recruitment process outsourcing (RPO) is all about
                    finding the right people to realize your organization's full
                    potential. Our approach is simple — we listen, understand
                    your needs and build a talent acquisition model that can
                    adapt and evolve with your business
                  </p>
                </div>

                <div>
                  <img
                    src="assets/images/require-img.png"
                    className="banner-image"
                    alt="img"
                    width="100%"
                  />
                </div>
              </div>
            </SmallHeader>
          </div>
        </div>
        {/* ...........................next.................. */}
        <div className="hiring-tag" style={{}}>
          <section className="container">
            <div className="row">
              <div className="col-lg-6 col-md-12 col-sm-12">
                <h2 className=" Hiring-qualified">
                  We help companies to source, screen and communicate with
                  candidates
                </h2>
                <img
                  src="assets/images/require-head.png"
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
                        StaffQ is a market leader in delivering the most
                        competitive and balanced recruitment process outsourcing
                        for organizations globally. There are so many
                        recruitment outsourcing companies in the market, but you
                        need to select the best one.
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
                          StaffQ is one of the best RPO agencies which allows
                          companies to obtain a world-class recruitment task.
                          Our RPO team works within your human resource
                          management structure. An all-inclusive HR solution can
                          manage the complete recruitment cycle for your
                          professional-scale staff, or you can selectively use
                          our expertise wherever you need it most
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        {/* ..................next-----section.... */}
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
                          <h2 className="whats-happening  Solution">
                            Solution
                          </h2>
                        </div>

                        <li className="solution-p-tag">
                          It fragmented the work and task to be distributed
                          among different expertise helping the employer company
                          to concentrate on its core capabilities
                        </li>
                        <li className="solution-p-tag">
                          in StaffQ RPO services offer an expertise, service by
                          choosing the right personnel at the right place. Our
                          RPO team helps the employer for not only sourcing the
                          talented employees, but also they put the right person
                          in the right place.
                        </li>
                        <li className="solution-p-tag">
                          {" "}
                          An organization that launches a new product or
                          acquires a new division, it requires to add hundreds
                          of employees on an impossible schedule. Lift up and
                          deploying an in-house HR team may be impossible in the
                          time available. StaffQ provides RPO as a
                          cost-effective solution - which then comes down
                          smoothly when the project is complete
                        </li>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12">
                  <div>
                    <img
                      src="assets/images/rquire-body.png"
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
        {/* ....... */}
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
                  <p className="img-p-tag">Requirement Planning</p>
                </div>
                <div className="col-md-4 col-sm-12">
                  <img
                    src="assets/images/contract.img.png"
                    className="round-img"
                    alt="img"
                  />
                  <p className="img-p-tag">Plan Derivation</p>
                </div>
              </div>

              <div className="row">
                <div className="col-md-4 col-sm-12">
                  <img
                    src="assets/images/rqt.img.png "
                    className="round-img"
                    alt="img"
                  />
                  <p className="img-p-tag">Choice Of Actions</p>
                </div>
                <div className="col-md-4 col-sm-12">
                  <img
                    src="assets/images/contact-img.png "
                    className="round-img"
                    alt="img"
                  />
                  <p className="img-p-tag"> Finalization Of Contract</p>
                </div>
                <div className="col-md-4 col-sm-12">
                  <img
                    src="assets/images/get-img.svg "
                    className="round-img"
                    alt="img"
                  />
                  <p className="img-p-tag">Implimentation</p>
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
                        Plan <br></br>
                        Derivation
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
                        <p className="second-p">Choice Of Actions</p>
                      </div>
                    </div>
                    <div className="col-lg-2">
                      <p>
                        Finalization <br></br>
                        Of Contract
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
                        <p className="second-p">Implimentation</p>
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
                    src="assets/images/require-footer.png"
                    className="mission"
                  ></img>
                </div>
                <div
                  className="col-lg-4 col-sm-12 col-md-12 big-screen "
                  style={{ paddingTop: "3rem" }}
                >
                  <div className="container">
                    <p className="Benefits ">Benefits of RPO</p>
                    <div className="null">
                      <img
                        src="assets/images/uper-unterline.svg"
                        width="100%"
                        className="uper-under-one"
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
                          Avoiding cost, improving ROI - a balanced recruitment
                          supply chain removes unnecessary costs, optimising
                          return on investment.
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
                          Best practice processes - implementation of Best in
                          Class processes helps ensure the attraction and
                          retention of the best talent in the market in the most
                          effective and efficient manner
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
                          Greater focus on strategic issues - an outsourced
                          service allows HR professionals and line managers to
                          focus on strategic issues, by greatly reducing their
                          administrative burden
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
                          Brand building - enhanced competitiveness through
                          improved brand management and the delivery of greater
                          brand awareness across key target recruitment groups.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2"></div>
                <div className="col-lg-6 col-md-6 col-sm-12 not-show ">
                  <div className="container">
                    <p className="Benefits ms-5 ">Benefits of RPO</p>
                    <div className="null">
                      <img
                        src="assets/images/uper-unterline.svg"
                        width="100%"
                        className="uper-under-one"
                      />
                    </div>
                    <span>
                      <img src="assets/images/right-icons.svg"></img>
                    </span>
                    <span>
                      Avoiding cost, improving ROI - a balanced recruitment
                      supply chain removes unnecessary costs, optimising return
                      on investment.{" "}
                    </span>
                    <p></p>
                    <br></br>
                    <span>
                      <img src="assets/images/right-icons.svg"></img>
                    </span>
                    <span>
                      Best practice processes - implementation of Best in Class
                      processes helps ensure the attraction and retention of the
                      best talent in the market in the most effective and
                      efficient manner
                    </span>
                    <br></br> <br></br>
                    <span>
                      <img src="assets/images/right-icons.svg"></img>
                    </span>
                    <span>
                      Greater focus on strategic issues - an outsourced service
                      allows HR professionals and line managers to focus on
                      strategic issues, by greatly reducing their administrative
                      burden
                    </span>
                    <br></br> <br></br>
                    <span>
                      <img src="assets/images/right-icons.svg"></img>
                    </span>
                    <span>
                      Brand building - enhanced competitiveness through improved
                      brand management and the delivery of greater brand
                      awareness across key target recruitment groups.{" "}
                    </span>
                    <br></br> <br></br>
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
                  details. Connect with us.
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
                    <input
                      type="text"
                      className="form-control"
                      name="email"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.email}
                    />
                    {formik.touched.email && formik.errors.email ? (
                      <ErrorText>{formik.errors.email}</ErrorText>
                    ) : (
                      <ErrorText>&nbsp;</ErrorText>
                    )}
                  </div>
                  <div className="d-flex justify-content-end">
                    <button className="submited" onClick={formik.handleSubmit}>
                      Submit
                    </button>
                  </div>
                  <br></br>
                  <br></br>
                </form>
              </div>
            </section>
          </div>
        </div>
      </Worked>
    </div>
  );
};

export default RequirementProcess;
