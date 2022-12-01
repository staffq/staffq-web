import React from "react";

import { useFormik } from "formik";
import * as Yup from "yup";
import { Find } from "../../styles/findthejob-style";

const FindJob = () => {
  const cardData = [
    {
      header: "UX Designer",
    },
    {
      header: "Front End Developer",
    },
    {
      header: "Visual Designer",
    },
    {
      header: "Motion Designer",
    },
    {
      header: "UX Designer",
    },
    {
      header: "Front End Developer",
    },
    {
      header: "Visual Designer",
    },
    {
      header: "Motion Designer",
    },
    {
      header: "UX Designer",
    },
    {
      header: "Front End Developer",
    },
    {
      header: "Visual Designer",
    },
    {
      header: "Motion Designer",
    },
    {
      header: "UX Designer",
    },
    {
      header: "Front End Developer",
    },
    {
      header: "Visual Designer",
    },
    {
      header: "Motion Designer",
    },
  ];
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      lastName: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <Find>
      <div className="container-fluid p-0">
        <div className="Findbg">
          <div className="HEADER">
            <h1>
              Find The Best Job <br></br> For You
            </h1>
          </div>
        </div>
      </div>
      <div className="container">
        {/* ..........................small..content......... */}
        <div>
          <ul className="nav">
            <li className="nav-item">Home</li>
            <li className="nav-item">
              {" "}
              <img src="assets/images/icons-right.svg"></img>
            </li>
            <li className="nav-item">Upload Cv</li>
            <li className="nav-item">Job Description</li>
          </ul>
        </div>
        {/* ................... */}
        <h5>Upload Cv</h5>
        <p className="p-tag">Enter the details below</p>
        <h5>Front End Developer</h5>
        <h6>Description</h6>
        <p>
          You should be a master in combining the art of design with the art of
          programming. Responsibilities will include translation of the UI/UX
          design wireframes to actual code that will produce visual elements of
          the application. You will be working with the product team designing
          and developing of the product.
        </p>
        <h5>Technical Skills</h5>
        <li>Advanced knowledge of JavaScript Proficient in JavaScript</li>
        <li>
          Proficient in JavaScript frameworks/libraries like React js is
          mandator
        </li>
        <li>
          {" "}
          Proficient understanding of web markup, including HTML5, CSS3 with
          strong interest in UX
        </li>
        <li>
          Basic understanding of server-side CSS pre-processing platforms, such
          as LESS and SASS
        </li>
        <li>
          Basic understanding of server-side CSS pre-processing platforms, such
          as LESS and SASS
        </li>
        <div className="soft-skils">
          <h6 className="">Soft Skills</h6>
          <li>Accuracy and attention to detail</li>
          <li>Good coding skills and curiosity to explore new technologies</li>
          <li>They should be methodical in their approach to design</li>
        </div>
{/* ..............................sm.............Form.......................... */}
<div >
  <div></div>
</div>


        <div className="row container mt-3">
          {cardData?.map((cardHead, index) => {
            return (
              <div className="col-lg-3 col-md-6 col-sm-12 mb-3" key={index}>
                <div>
                  <div className="Card container ">
                    <h6 className="mt-3 design">{cardHead?.header}</h6>
                    <button className="fulltime  ">full time</button>
                    <button className="remote"> Remote </button>
                    <div className="Display mt-1">
                      <img
                        src="assets/images/locate.svg"
                        className="one"
                        width="16px"
                      />
                      <p className="btnn">Chennai</p>

                      <img
                        src="assets/images/note.svg"
                        className="one"
                        style={{ marginLeft: "22px" }}
                        width="16px"
                      />
                      <p className="btnn">20 sept 2022</p>
                    </div>
                    <p className="cart-text">
                      To work closely with the design and backend team to build
                      and develop web applications for our forward-thinking
                      products.
                    </p>
                    <button className=" btnone">Explore Job</button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div>
          <div className="text-center">
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
      <form onSubmit={formik.handleSubmit}>
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
      </form>
    </Find>
  );
};

export default FindJob;
