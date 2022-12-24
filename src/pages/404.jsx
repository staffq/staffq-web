/**************Import styled components******************************** */
import React from "react";
import { Div } from "../styles/error";
import Link from "next/link";

const _error = () => {
  return (
    <Div>
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-md-6 col-sm-12 one">
            <div className="first-one">
              <h1>ERROR 404 </h1>
              <p>PAGE NOT FOUND</p>
              <Link href="/">
              <button className="btn btn-dark">Back to home</button>
             
            </Link>
             
            </div>
          </div>
          <div className="col-lg-5 col-md-6 col-sm-12 two">
            <div>
              <img src="assets/images/error.png" alt="img" width="100%" />
            </div>
          </div>
        </div>
      </div>
    </Div>
  );
};

export default _error;
