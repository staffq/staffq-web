import React from "react";
import { Div } from "../../../styles/upload-cs";
import Input from "../../../components/FormControls/Input";
// import Button from "../../../components/FormControls/Button";
import Head from "next/head";
import { useFormik } from "formik";
import * as Yup from "yup";
import Popup from "../../../components/FormControls/Popup";
import styled from "styled-components";


export const ErrorText = styled.div`
  color: red;

  font-size: 10px;

  padding-bottom: 5px;

  font-weight: 600;
`;

const Cvapply = () => {
  const [popup, setPopup] = React.useState(null);
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      experience: "",
      linkedin: "",
      number: "",
      location: "",
      files: "",
      ln: "",
      fn: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        // .max(15, "Must be 15 characters or less")
        .required("Required *"),
      lastName: Yup.string().required("Required *"),
      email: Yup.string().email("Invalid email address").required("Required*"),
      number: Yup.string().max(10, "").required("Required*"),
      experience: Yup.string().required("Required*"),
      linkedin: Yup.string().required("Required*"),
      files: Yup.mixed().required("Required*"),
      ln: Yup.mixed().required("Required*"),
      fn: Yup.mixed().required("Required*"),
      location: Yup.mixed().required("Required*"),
    }),
    onSubmit: (values) => {
      console.log(values, "heloooooooo");
      setPopup(true);
      // formik.handleReset();
    },
  });
  return (
    <Div>
      <Head>
        <title>Upload Cv</title>
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
          content=" We specialize in finding the right people for the right job, and our team of experts will work with you to find the perfect solution for your needs. Contact us today to get started! "
        />
        <meta
          name="description"
          content="We specialize in finding the right people for the right job, and our team of experts will work with you to find the perfect solution for your needs. Contact us today to get started! "
        />
        <meta name="keywords" content="Upload Cv" />

        <link rel="canonical" href="https://www.staffq.in/upload-cv/" />

        <link rel="alternate" href="https://www.staffq.in/" hreflang="en-in" />

        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="We specialize in finding the right people for the right job, and our team of experts will work with you to find the perfect solution for your needs. Contact us today to get started! "
        />
        <meta
          property="og:description"
          content="We specialize in finding the right people for the right job, and our team of experts will work with you to find the perfect solution for your needs. Contact us today to get started! "
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
      ;
      <div className="container-fluid p-0 background">
        <div className="bg-img">
          <img src="assets/images/Banner-find-box.jpg" width="100%" />
        </div>
        <div className="find-text">
          <h1>
            Find The Best Job <br></br>
            For You
          </h1>
        </div>
      </div>
      <div className="container-fluid bg-one">
        <form onSubmit={formik.handleSubmit}>
          <div className="container top">
            <div className="row">
              <div className="col-lg-1"></div>
              <div className="col-lg-5">
                <div className="mt-3">
                  <ul className="nav">
                    <li className="nav-item">Home</li>
                    <li className="nav-item">
                      {" "}
                      <img src="assets/images/icons-right.svg"></img>
                    </li>
                    {/* <li className="nav-item">Upload Cv</li> */}
                    <li className="nav-item">Find Jobs</li>
                    <li className="nav-item">Jobs Description</li>
                    <li className="nav-item">
                      {" "}
                      <img src="assets/images/icons-right.svg"></img>
                    </li>
                    <li className="nav-item">Apply Now</li>
                    <li className="nav-item">
                      {" "}
                      <img src="assets/images/icons-right.svg"></img>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="row mt-5">
              <div className="col-lg-1"></div>
              <div className="col-lg-5 sm-upload">
                <h2>Upload CV</h2>
                <p className="enter">Enter the details below</p>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-1"></div>
              <div className="col-lg-5 col-sm-12">
                <div>
                  <label> First Name*</label>
                  <Input
                    width="100%"
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

                <div className=" not-show">
                  <label className=" not-show">Last Name*</label>
                  <Input
                    width="100%"
                    name="ln"
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
                <div>
                  <label>Email address* </label>
                  <Input
                    width="100%"
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

                <div>
                  <label>Current location*</label>
                  <Input
                    width="100%"
                    name="location"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.location}
                  />
                  {formik.touched.location && formik.errors.location ? (
                    <ErrorText>{formik.errors.location}</ErrorText>
                  ) : (
                    <ErrorText>&nbsp;</ErrorText>
                  )}
                </div>
                <div>
                  <label>LinkedIn / Portfolio</label>
                  <Input
                    width="100%"
                    name="linkedin"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.linkedin}
                  />
                  {formik.touched.linkedin && formik.errors.linkedin ? (
                    <ErrorText>{formik.errors.linkedin}</ErrorText>
                  ) : (
                    <ErrorText>&nbsp;</ErrorText>
                  )}
                </div>
                <div className="hiden">
                  <p className="attachement hiden">Attachment</p>
                  <p className="updated ">Updated resume*</p>
                  <div className="input-group mb-3 hiden">
                    <input
                      type="file"
                      className="form-control"
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon2"
                      width="100%"
                      name="files"
                      onChange={(e) => {
                        formik.handleChange;
                        formik.setFieldValue("files", e);
                      }}
                      onBlur={formik.handleBlur}
                      // value={formik.values.file}
                    />

                    <div className="input-group-append">
                      <span
                        className="input-group-text bg-dark text-light"
                        id="basic-addon2"
                      >
                        Upload
                      </span>
                    </div>
                  </div>
                  {formik.touched.files && formik.errors.files ? (
                    <ErrorText>{formik.errors.files}</ErrorText>
                  ) : (
                    <ErrorText>&nbsp;</ErrorText>
                  )}
                </div>
              </div>
              <div className="col-lg-5 col-sm-12">
                <div className="hiden">
                  <label>Last Name*</label>
                  <Input
                    width="100%"
                    className="hiden"
                    name="lastName"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.lastName}
                    required
                  />
                  {formik.touched.lastName && formik.errors.lastName ? (
                    <ErrorText>{formik.errors.lastName}</ErrorText>
                  ) : (
                    <ErrorText>&nbsp;</ErrorText>
                  )}
                </div>
                <div>
                  <label>Mobile number*</label>
                  <Input
                    width="100%"
                    name="number"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.number}
                  />
                  {formik.touched.number && formik.errors.number ? (
                    <ErrorText>{formik.errors.number}</ErrorText>
                  ) : (
                    <ErrorText>&nbsp;</ErrorText>
                  )}
                </div>
                <div>
                  <label>Work experience*</label>
                  <Input
                    width="100%"
                    name="experience"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.experience}
                  />{" "}
                  {formik.touched.experience && formik.errors.experience ? (
                    <ErrorText>{formik.errors.experience}</ErrorText>
                  ) : (
                    <ErrorText>&nbsp;</ErrorText>
                  )}
                </div>
                <p className="attachement not-show">Attachment</p>
                <p className="updated not-show">Updated resume*</p>
                <div className="input-group mb-3 not-show">
                  <div>
                    <input
                      type="file"
                      className="form-control"
                      placeholder=""
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon2"
                      width="100%"
                      name="fn"
                      onChange={(e) => {
                        formik.handleChange;
                        formik.setFieldValue("files", e);
                      }}
                      onBlur={formik.handleBlur}
                      required
                    />
                    {formik.touched.fn && formik.errors.fn ? (
                      <ErrorText>{formik.errors.fn}</ErrorText>
                    ) : (
                      <ErrorText>&nbsp;</ErrorText>
                    )}
                  </div>
                  <div className="input-group-append">
                    <span
                      className="input-group-text bg-dark text-light"
                      id="basic-addon2"
                    >
                      Upload
                    </span>
                  </div>
                </div>
              </div>
              <div className="button">
                <div className="row">
                  <div className="col-lg-1"></div>
                  <div className="col-lg-2">
                    <button
                      className="btn btnn"
                      type="submit"
                      onClick={formik.handleSubmit}
                    >
                      Submit
                    </button>
                  </div>
                  <div className="col-lg-6"></div>
                </div>
              </div>

              <div className="col-lg-1"></div>
            </div>
          </div>
        </form>
      </div>
      {popup ? <Popup onHide={() => setPopup(false)} /> : ""}
    </Div>
  );
};

export default Cvapply;
