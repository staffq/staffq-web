import React from "react";
import { Div } from "../../../styles/upload-cs";
import Input from "../../../components/FormControls/Input";
// import Button from "../../../components/FormControls/Button";

import { useFormik } from "formik";
import * as Yup from "yup";
// import Button from "../../../components/FormControls/Button";
const UploadCV = () => {
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
    <Div>
      <div className="background">
        <h1 className="find">
          Find The Best Job <br></br>
          For You
        </h1>
      </div>

      <div className="container top">
        <div className="row">
          <div className="col-lg-1"></div>
          <div className="col-lg-5">
          <div className="ul-method container">
          <ul className="nav">
            <li className="nav-item">Home</li>
            <img
              src="assets/images/left-icons.png"
              className="nav-item one"
              alt="img"
            />
            <li className="nav-item two">Upload CV</li>
          </ul>
        </div>
          </div>
        </div>
       
        <div className="row">
          <div className="col-lg-1"></div>
          <div className="col-lg-5">
          <h2>Upload CV</h2>
          <p className="enter">Enter the details below</p>
          </div>
         
        </div>
        <div className="row">
          <div className="col-lg-1"></div>
          <div className="col-lg-5 col-sm-12">
            <label> First Name*</label>
            <Input
              width="100%"
              id="firstName"
              type="text"
              {...formik.getFieldProps("firstName")}
            />
            {formik.touched.firstName && formik.errors.firstName ? (
              <div>{formik.errors.firstName}</div>
            ) : null}
            <label>Email address* </label>
            <Input
              width="100%"
              id="lastName"
              type="text"
              {...formik.getFieldProps("lastName")}
            />
            {formik.touched.lastName && formik.errors.lastName ? (
              <div>{formik.errors.lastName}</div>
            ) : null}
            <label>Current location*</label>
            <Input width="100%" />
            <label>LinkedIn / Portfolio</label>
            <Input width="100%" />
            <p className="attachement">Attachment</p>
            <p className="updated">Updated resume*</p>
            <div class="input-group mb-3">
              <input
                type="file"
                class="form-control"
                placeholder=""
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                width="100%"
              />
              <div class="input-group-append">
                <span
                  class="input-group-text bg-dark text-light"
                  id="basic-addon2"
                >
                  Upload
                </span>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-sm-12">
            <label>Last Name*</label>
            <Input width="100%" />
            <label>Mobile number*</label>
            <Input width="100%" />
            <label>Work experience*</label>
            <Input width="100%" />
          </div>
          <div className="button">
            <div className="row">
              <div className="col-lg-1"></div>
              <div className="col-lg-2">
                <button className="btn btnn" onSubmit={formik.handleSubmit}>
                  submit
                </button>
              </div>
              <div className="col-lg-6"></div>
            </div>
          </div>

          <div className="col-lg-1"></div>
        </div>
      </div>
    </Div>
  );
};

export default UploadCV;
