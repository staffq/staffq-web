import React from "react";
import { Div } from "../../../styles/upload-cs";
import Input from "../../../components/FormControls/Input";
// import Button from "../../../components/FormControls/Button";

import { useFormik } from "formik";
import * as Yup from "yup";
import Popup from "../../../components/FormControls/Popup";
// import Button from "../../../components/FormControls/Button";
const UploadCV = () => {
  const [popup, setPopup] = React.useState(false);
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      experience: "",
      linkedin: "",
      number: "",
      location: "",
      file: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      lastName: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      number: Yup.string().max(10, "").required("Required"),
      experience: Yup.string().required("Required"),
      linkedin: Yup.string().required("Required"),
      file: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      console.log(values, "helo");
    },
  });
  return (
    <Div>
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
      <form onSubmit={formik.handleSubmit}>
        <div className="container top">
          <div className="row mt-4">
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
              <label> First Name*</label>
              <Input
                width="100%"
                name="firstName"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.firstName}
                required
              />
              <label className=" not-show">Last Name*</label>
              <Input
                width="100%"
                className=" not-show"
                name="lastName"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.lastName}
                required
              />

              <label>Email address* </label>
              <Input
                width="100%"
                name="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              {formik.touched.lastName && formik.errors.lastName ? (
                <div>{formik.errors.lastName}</div>
              ) : null}
              <label>Current location*</label>
              <Input
                width="100%"
                name="linkedin"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.linkedin}
                required
              />
              <label>LinkedIn / Portfolio</label>
              <Input width="100%" />
              <p className="attachement hiden">Attachment</p>
              <p className="updated hiden">Updated resume*</p>
              <div className="input-group mb-3 hiden">
                <input
                  type="file"
                  className="form-control"
                  placeholder=""
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                  width="100%"
                  name="file"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.file}
                  required
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
            </div>
            <div className="col-lg-5 col-sm-12">
              <label className="hiden">Last Name*</label>
              <Input
                width="100%"
                className="hiden"
                name="lastName"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.lastName}
                required
              />
              <label>Mobile number*</label>
              <Input
                width="100%"
                name="number"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.number}
                required
              />
              <label>Work experience*</label>
              <Input
                width="100%"
                name="experience"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.experience}
                required
              />
              <p className="attachement not-show">Attachment</p>
              <p className="updated not-show">Updated resume*</p>
              <div className="input-group mb-3 not-show">
                <input
                  type="file"
                  className="form-control"
                  placeholder=""
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                  width="100%"
                  name="file"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.file}
                  required
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
            </div>
            <div className="button">
              <div className="row">
                <div className="col-lg-1"></div>
                <div className="col-lg-2">
                  <button
                    className="btn btnn"
                    type="submit"
                    onSubmit={formik.handleSubmit}
                  >
                    submit
                  </button>
                </div>
                <div className="col-lg-6"></div>
              </div>
            </div>

            <div className="col-lg-1"></div>
          </div>
        </div>
      </form>
      <Popup show={popup} onHide={() => setPopup(false)} />
    </Div>
  );
};

export default UploadCV;
