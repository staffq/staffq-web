import React from "react";
import { Worked } from "../../styles/workstyle";
import { useFormik } from "formik";
import * as yup from "yup";
import styled from "styled-components";
import { useDispatch} from "react-redux";
import { createContactData } from "../../redux/actions/userAction.js";
export const ErrorText = styled.div`
  color: red;

  font-size: 10px;

  padding-bottom: 5px;

  font-weight: 600;
`;
const StillNotSure = () => {
  const dispatch=useDispatch();
  const formik = useFormik({
    initialValues: {
      name: "",
      //   lastName: "",
      email: "",
      // experience: "",
      // linkedin: "",
      // number: "",
      // location: "",
      // files: "",
      phoneNumber: "",
      // fn: "",
    },
    validationSchema: yup.object({
      name: yup
        .string()
        // .max(15, "Must be 15 characters or less")
        .required("Required *"),
      // lastName: yup.string().required("Required *"),
        email: yup.string().email("Invalid email address").required("Required*"),
      //   number: yup.string().max(10, "").required("Required*"),
      //   experience: yup.string().required("Required*"),
      //   linkedin: yup.string().required("Required*"),
      //   files: yup.mixed().required("Required*"),
      phoneNumber: yup.string().max(10).required("Required*"),
      //   fn: yup.mixed().required("Required*"),
      //   location: yup.mixed().required("Required*"),
    }),
    onSubmit: (values) => {
      console.log(values, "heloooooooo");
      dispatch(createContactData(values))
    
      formik.handleReset();
    },
  });
  return (
    <Worked>
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
              <form onSubmit={formik.handleSubmit}>
                <div className="form-group mt-2">
                  <label for="exampleInputEmail1">Name*</label>
                  <br></br>
                  <input
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    name="name"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.name}
                  />
                  {formik.touched.name && formik.errors.name ? (
                    <ErrorText>{formik.errors.name}</ErrorText>
                  ) : (
                    <ErrorText>&nbsp;</ErrorText>
                  )}{" "}
                </div>
                <div className="form-group ">
                  <label for="exampleInputEmail1">Phone Number*</label>
                  <input
                    type="number"
                    name="phoneNumber"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.phoneNumber}
                    required
                  />
                  {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
                    <ErrorText>{formik.errors.phoneNumber}</ErrorText>
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
                  <button className="submited" type="submit" onClick={formik.handleSubmit}>
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
  );
};

export default StillNotSure;
