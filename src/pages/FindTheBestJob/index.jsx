import Link from "next/link";
import React from "react";
import Head from "next/head";
import Input from "../../components/FormControls/Input";

import { getjobpostionData } from "../../redux/actions/";
import { useDispatch, useSelector } from "react-redux";
import { Find, SmallFind } from "../../styles/findthejob-style";
import { useEffect } from "react";

import { useState } from "react";

const FindJob = () => {
  const dispatch = useDispatch();
  const jobdata = useSelector((state) => state?.jobs?.jobData);
  // const [search,setSeach] = useState("");
  console.log(jobdata, 400);
  useEffect(() => {
    dispatch(getjobpostionData());
  }, []);

  // const handleSearch = (e) => {
  //   const data = e.target.value;
  //   setSeach(data)

  //   const url=`https://api.myjson.com/bins/e69i9/?i=${value}&q=${value2}`;

  // }
  const [value, setValue] = useState("");
  const [searched, setSearched] = useState("");
  console.log(value, "value", searched, "searched");

 const handleSearch = () => {

    dispatch(
      getjobpostionData({
        search: value,
      })
    );
  };
  useEffect(() => {
    handleSearch();
  }, []);
  return (
    <Find>
      <Head>
        <title>Find Jobs</title>
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
          content=" ALooking for a job or a new career? StaffQ can help! We work with great companies and can help take your career to the next level. "
        />
        <meta
          name="description"
          content="Looking for a job or a new career? StaffQ can help! We work with great companies and can help take your career to the next level. "
        />
        <meta name="keywords" content="Find Jobs" />

        <link rel="canonical" href="https://www.staffq.in/find-jobs" />

        <link rel="alternate" href="https://www.staffq.in/" hreflang="en-in" />

        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="ALooking for a job or a new career? StaffQ can help! We work with great companies and can help take your career to the next level.  "
        />
        <meta
          property="og:description"
          content="Looking for a job or a new career? StaffQ can help! We work with great companies and can help take your career to the next level. "
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
      <div className="container-fluid bg-colour">
        <div className="container">
          {/* ..........................small..content......... */}
          <div className="pt-3">
            <ul className="nav">
              <Link href="/">
                <li className="nav-item">Home</li>
              </Link>
       
              <li className="nav-item">
                {" "}
                <img src="assets/images/icons-right.svg"></img>
              </li>
              {/* <li className="nav-item">Upload Cv</li> */}
              <li className="nav-item">Find jobs</li>
            </ul>
          </div>
          {/* ................... */}

          {/* ..............................sm.............Form.......................... */}
          <form>
            <div className="row mt-4">
              {/* <div className="col-lg-"></div> */}
              <div className="col-lg-5">
                <Input
                  icon
                  placeholder="Job Title or Keyword"
                  className="ps-5"
                  onChange={(e) => setValue(e.target.value)}
                />
              </div>
              <div className="col-lg-5">
                <div className="form-group ">
                  <div>
                    <select
                      className="input-option ps-4 "
                      placeholder="Location"
                    >
                      <option value="">Industry</option>
                      <option value="">It consulting</option>
                      <option value="">Creative services</option>
                    </select>{" "}
                  </div>
                </div>
              </div>
              <div className="col-lg-2 d-flex justify-content-end">
                <span className="btn btnnn" onClick={handleSearch}>
                  Search
                </span>
              </div>
            </div>
          </form>

          <div className="showing-results">
            <div>
              <p>
                Showing results of <span>{jobdata?.noRecords}</span>{" "}
              </p>
            </div>
            <div>
              <div>
                <select className="location ps-4" placeholder="Location">
                  <option value="location">Location</option>
                  <option value="location">Us</option>
                  <option value="">TamilNadu</option>
                  <option value="">Kerala</option>
                </select>{" "}
              </div>
            </div>
          </div>

          <div className="row  mt-3">
            {jobdata?.records?.length &&
              jobdata?.records.map((cardHead, index) => {
                return (
                  <div className="col-lg-3 col-md-6 col-sm-12 mb-4" key={index}>
                    <div>
                      <div className="Card container ">
                        <p className="mt-3 design">{cardHead?.jobTitle}</p>
                        <button className="fulltime  ">
                          {" "}
                          {cardHead?.jobType}
                        </button>
                        <button className="remote">
                          {cardHead?.jobTimingType}{" "}
                        </button>
                        <div className="Display mt-1">
                          <img
                            src="assets/images/locate.svg"
                            className="one"
                            width="16px"
                          />
                          <p className="btnn">{cardHead?.jobLocation}</p>

                          <img
                            src="assets/images/note.svg"
                            className="one"
                            style={{ marginLeft: "22px" }}
                            width="16px"
                          />
                          <p className="btnn">20 sept 2022</p>
                        </div>
                        <p className="cart-text">{cardHead?.jobDescription}</p>
                        <Link href={{pathname:"/find-description", query:{find:JSON.stringify(cardHead)}}}>
                        <button className=" btnone" >Explore Job</button></Link>
                       
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
          <div>
            <div className="text-center next-button">
              <button className="btn perivious">
                {" "}
                <img src="assets/images/arrow-left.svg"></img> Previous{" "}
              </button>
              <button className="btn perivious second-button">
                {" "}
                Next <img src="assets/images/arrow-right (1).svg"></img>{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid bg-one">
        <div className="row">
          {/* <div className="col-lg-"></div> */}
          <div className="col-lg-5">
            <div className="image-left">
              <img
                src="assets/images/Manrings.png"
                width="100%"
                className=""
                alt="img"
              />
            </div>
          </div>

          <div className="col-lg-1 third-col">
            <div>
              <span>
                {" "}
                <img
                  src="assets/images/profilearoow.svg"
                  className="arow"
                  alt="img"
                />
              </span>
            </div>
          </div>
          <div className="col-lg-5 second-col">
            <div>
              <p className="find-crt">
                Couldn’t Find The Correct <br></br> Job?
              </p>
              <p className="upload-p-tag">
                Upload your resume here. We I’ll take a look and find you the
                right Job.
              </p>
              <Link href="upload-cv">
                <button className=" upload">
                  <img
                    src="assets/images/directbox-send.svg"
                    className="Directbox"
                    alt="img"
                  />
                  <span className="upload-button"> Upload</span>
                </button>
              </Link>
            </div>
          </div>
          <div className="col-lg-1"></div>
        </div>
      </div>
      <SmallFind>
        <div className="container-fluid p-0 pe-0 ">
          <div className="top">
            <div className="row container">
              <div className="col-lg-12 col-md-12 col-sm-12 mt-5 ">
                <div className="Smallsctext">
                  <h2 className="">
                    Upload your resume here. We I’ll take a look and find you
                    the right Job.
                  </h2>
                  <p className="text-light findsm-text"></p>
                </div>
                <button className="mt-3 upload  Smallbox  ">
                  <img
                    src="assets/images/directbox-send.svg"
                    className="Directbox"
                    alt="img"
                  />
                  <span className="upload-button"> Upload</span>
                </button>
              </div>
              <div className="col-lg-12 col-md-12 col-sm-12">
                <div className="find-images">
                  <img
                    src="assets/images/Manrings.png"
                    width="100%"
                    alt="img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </SmallFind>
      {/* <form onSubmit={formik.handleSubmit}>
        <label htmlFor="firstName">First Name</label>
        <input
          id="firstName"
          type="text"
          {...formik.getFieldProps("firstName")}
        />
        {formik.touched.firstName && formik.errors.firstName ? (
          <div>{formik.errors.firstName}</div>
        ) : null}

        <label htmlFor="lastName">Last Name</label>
        <input
          id="lastName"
          type="text"
          {...formik.getFieldProps("lastName")}
        />
        {formik.touched.lastName && formik.errors.lastName ? (
          <div>{formik.errors.lastName}</div>
        ) : null}

        <label htmlFor="email">Email Address</label>
        <input id="email" type="email" {...formik.getFieldProps("email")} />
        {formik.touched.email && formik.errors.email ? (
          <div>{formik.errors.email}</div>
        ) : null}

        <button type="submit">Submit</button>
      </form> */}
    </Find>
  );
};

export default FindJob;
