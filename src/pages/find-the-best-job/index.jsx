import React from "react";
import Input from "../../components/FormControls/Input";
// import { Icon } from "../../components/FormControls/Input/style";
// import { useFormik } from "formik";
// import * as Yup from "yup";
import { Find, SmallFind } from "../../styles/findthejob-style";

const FindJob = () => {
  const cardData = [
    {
      header: "UX Designer",
      text: "To work closely with the design and backend team to build and develop web applications for our forward-thinking products",
    },
    {
      header: "Front End Developer",
      text: "To work closely with the design and backend team to build and develop web applications for our forward-thinking products",
    },
    {
      header: "Visual Designer",
      text: "To work closely with the design and backend team to build and develop web applications for our forward-thinking products",
    },
    {
      header: "Motion Designer",
      text: "To work closely with the design and backend team to build and develop web applications for our forward-thinking products",
    },
    {
      header: "UX Designer",
      text: "To work closely with the design and backend team to build and develop web applications for our forward-thinking products",
    },
    {
      header: "Front End Developer",
      text: "To work closely with the design and backend team to build and develop web applications for our forward-thinking products",
    },
    {
      header: "Visual Designer",
      text: "To work closely with the design and backend team to build and develop web applications for our forward-thinking products",
    },
    {
      header: "Motion Designer",
      text: "To work closely with the design and backend team to build and develop web applications for our forward-thinking products",
    },
    {
      header: "UX Designer",
      text: "To work closely with the design and backend team to build and develop web applications for our forward-thinking products",
    },
    {
      header: "Front End Developer",
      text: "To work closely with the design and backend team to build and develop web applications for our forward-thinking products",
    },
    {
      header: "Visual Designer",
      text: "To work closely with the design and backend team to build and develop web applications for our forward-thinking products",
    },
    {
      header: "Motion Designer",
      text: "To work closely with the design and backend team to build and develop web applications for our forward-thinking products",
    },
    {
      header: "UX Designer",
      text: "To work closely with the design and backend team to build and develop web applications for our forward-thinking products",
    },
    {
      header: "Front End Developer",
      text: "To work closely with the design and backend team to build and develop web applications for our forward-thinking products",
    },
    {
      header: "Visual Designer",
      text: "To work closely with the design and backend team to build and develop web applications for our forward-thinking products",
    },
    {
      header: "Motion Designer",
      text: "To work closely with the design and backend team to build and develop web applications for our forward-thinking products",
    },
  ];
  // const formik = useFormik({
  //   initialValues: {
  //     firstName: "",
  //     lastName: "",
  //     email: "",
  //   },
  //   validationSchema: Yup.object({
  //     firstName: Yup.string()
  //       .max(15, "Must be 15 characters or less")
  //       .required("Required"),
  //     lastName: Yup.string()
  //       .max(20, "Must be 20 characters or less")
  //       .required("Required"),
  //     email: Yup.string().email("Invalid email address").required("Required"),
  //   }),
  //   onSubmit: (values) => {
  //     alert(JSON.stringify(values, null, 2));
  //   },
  // });
  return (
    <Find>
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
      <div className="container">
        {/* ..........................small..content......... */}
        <div className="mt-3">
          <ul className="nav">
            <li className="nav-item">Home</li>
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
              <Input icon placeholder="Job Title or Keyword" className="ps-5" />
            </div>
            <div className="col-lg-5">
              <div className="form-group ">
                <div>
                  <select
                    className="input-option ps-4 "
                    placeholder="Location "
                  >
                    <option value="">Industry</option>
                    <option value="">TamilNadu</option>
                    <option value="">Kerala</option>
                  </select>{" "}
                </div>
              </div>
            </div>
            <div className="col-lg-2">
              <button className="btn btnnn">submit</button>
            </div>
          </div>
        </form>

        <div className="showing-results">
          <div>
            <p>
              Showing results of <span>1523</span>{" "}
            </p>
          </div>
          <div>
            <div>
              <select className="location ps-4" placeholder="Location">
                <option value="">Location</option>
                <option value="">TamilNadu</option>
                <option value="">Kerala</option>
              </select>{" "}
            </div>
          </div>
        </div>

        <div className="row  mt-3">
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
                    <p className="cart-text">{cardHead?.text}</p>
                    <button className=" btnone">Explore Job</button>
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
              <button className=" upload">
                <img
                  src="assets/images/directbox-send.svg"
                  className="Directbox"
                  alt="img"
                />
                <span className="upload-button"> Upload</span>
              </button>
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
