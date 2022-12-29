import React from "react";
// import redux .........
import { useDispatch } from "react-redux";
import { createUploadCVData } from "../../.././redux/actions";
// import package.............
import Head from "next/head";
import Link from "next/link";
import { useFormik } from "formik";
import * as Yup from "yup";
import Popup from "../../../components/FormControls/Popup";
import styled from "styled-components";
// import Components....../
import Input from "../../../components/FormControls/Input";
// import style...............
import { Div, Form } from "../../../styles/upload-cs";
import { useState } from "react";
// import { FileUploader } from "react-drag-drop-files";

import { uploadPdfToS3 } from "../../../utils/files";
import { convertBase64 } from "../../../utils/common";
import { FileUploader } from "react-drag-drop-files";

// const fileTypes = ["JPG", "PNG", "GIF"];

export const ErrorText = styled.div`
  color: red;

  font-size: 10px;

  padding-bottom: 5px;

  font-weight: 600;
`;

const UploadCV = () => {
  const [file, setFile] = useState(null);
  const [UploadPdf, setUploadPdf] = useState("");
  const [textMsg, setTxtMsg] = useState("");
  const dispatch = useDispatch();
  const [popup, setPopup] = React.useState(null);
  const fileTypes = ["PDF"];

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      experience: "",
      link: "",
      mobileNumber: "",
      location: "",
      files: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        // .max(15, "Must be 15 characters or less")
        .required("Required *"),
      lastName: Yup.string().required("Required *"),
      email: Yup.string().email("Invalid email address").required("Required*"),
      mobileNumber: Yup.string().min(10).max(10).required("Required*"),
      experience: Yup.string().required("Required*"),
      link: Yup.string().required("Required*").url(),
      files: Yup.mixed()
        .required("Required*")
        .test(1000, "Uploaded file is too big.", () => textMsg < 250000),
      location: Yup.mixed().required("Required*"),
    }),
    onSubmit: (values) => {
      console.log(values, "heloooooooo");

      dispatch(createUploadCVData(values)).then((params) => {
        if (params) {
          setPopup(true);
          setTimeout(() => setPopup(false), 3000);
        }
      });

      formik.handleReset();
    },
  });

  const handleChange = (file) => {
    setFile(file);
  };

  const handlePdf = (e) => {
    const value = e.target.files[0];
    setTxtMsg(value?.size);
    const fileData = value;
    convertBase64(value).then((res) => {
      console.log(res, "res");
      fileData.base64Data = res;
      fileData.s3Upload = res.replace(/^data:application\/\w+;base64,/, "");
    });
    // if (value?.size < 68000) {
    //   formik.setFieldValue("files", fileData);
    //   // setUploadError(false);
    //   // formik.setFieldValue("files", fileData);
    // }
    //  else {
    //   setUploadError(true);
    // }
    setUploadPdf(fileData);
    return e.target.files[0]?.size;
  };
  const handleUpload = () => {
    console.log(UploadPdf.base64Data, "UploadPdf");
    uploadPdfToS3(
      UploadPdf.base64Data,
      Date.now(),
      "Interested-candidates-resume"
    ).then((res) => {
      console.log(res, "wwwww");
      if (res) {
        console.log("Thank you for submtting");
      }
    });
  };

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
          content=" We specialize in finding the right people for the right job, and our team of experts
           will work with you to find the perfect solution for your needs. Contact us today to get started! "
        />
        <meta
          name="description"
          content="We specialize in finding the right people for the right job, and our team of experts will
           work with you to find the perfect solution for your needs. Contact us today to get started! "
        />
        <meta name="keywords" content="Upload Cv" />

        <link rel="canonical" href="https://www.staffq.in/upload-cv/" />

        <link rel="alternate" href="https://www.staffq.in/" hreflang="en-in" />

        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="We specialize in finding the right people for the right job, and our team of experts
           will work with you to find the perfect solution for your needs. Contact us today to get started! "
        />
        <meta
          property="og:description"
          content="We specialize in finding the right people for the right job, and our team of experts 
          will work with you to find the perfect solution for your needs. Contact us today to get started! "
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
        <div className="container top">
          <div className="row">
            <div className="col-lg-1"></div>
            <div className="col-lg-5">
              <div className="mt-3">
                <ul className="nav">
                  <Link href="/">
                    <li className="nav-item">Home</li>
                  </Link>
                  <li className="nav-item">
                    {" "}
                    <img src="assets/images/icons-right.svg"></img>
                  </li>
                  {/* <li className="nav-item">Upload Cv</li> */}
                  <li className="nav-item">Upload CV</li>
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
          <Form onSubmit={formik.handleSubmit}>
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
                    name="link"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.link}
                  />
                  {formik.touched.link && formik.errors.link ? (
                    <ErrorText>{formik.errors.link}</ErrorText>
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
                  <input
                    width="100%"
                    name="mobileNumber"
                    className="number"
                    maxlength="10"
                    type="number"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.mobileNumber}
                  />
                  {formik.touched.mobileNumber && formik.errors.mobileNumber ? (
                    <ErrorText>{formik.errors.mobileNumber}</ErrorText>
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
              </div>
              <div className="row">
                <div className="col-lg-1"></div>
                <div className="col-lg-5">
                  <div className="">
                    <p className="attachement ">Attachment</p>
                    <p className="updated ">Updated resume*</p>
                    <div className="input-group mb-3 ">
                      <input
                        type="file"
                        // className="form-control  "
                        // aria-label="Recipient's username"
                        // aria-describedby="basic-addon2"
                        width="100%"
                        name="file"
                        types={fileTypes}
                        onChange={(e) => {
                          formik.setFieldValue("files", e.target.value);
                          handlePdf(e);
                          // handleChange(e.target.files);
                        }}
                        onBlur={formik.handleBlur}
                        value={formik.values.files}
                      />
                      {/* <FileUploader
                        multiple={true}
                        handleChange={handleChange}
                        name="file"
                        types={fileTypes}
                      /> */}

                      <div className="input-group-append">
                        <span
                          className="input-group-text bg-dark text-light"
                          id="basic-addon2"
                          onClick={() => handleUpload()}
                        >
                          Upload
                        </span>
                      </div>
                      {file ? null : formik.errors.files}
                      {/* {textMsg > 250000 ? (
                        <span className="pdf-error">
                          *Pdf size is must be in 2 Mb
                        </span>
                      ) : null} */}
                    </div>

                    {/* {formik.touched.files && formik.errors.files ? (
                      <ErrorText>{formik.errors.files}</ErrorText>
                    ) : (
                      <ErrorText>&nbsp;</ErrorText>
                    )} */}
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-1"></div>
                <div className="col-lg-5">
                  {/* <FileUploader className="resume" handleChange={handleChange} name="file" types={fileTypes} /> */}
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
          </Form>
        </div>
      </div>
      {popup ? <Popup onHide={() => setPopup(false)} /> : ""}
    </Div>
  );
};

export default UploadCV;
