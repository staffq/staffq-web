import React from "react";
import { Div } from "./style";
const Popup = () => {
  return (
    <>
      <Div>
        <div className="popup">
          <div className="card">
            <img
              src="assets/images/tick.png"
              width="100%"
              className="tick-img"
            />
            <div className="">
              <div className="card-head">
                <h3>Your resume has been submitted successfully.</h3>
              </div>
              <div>
                <p className="card-text">
                  You are being redirected to home page
                </p>
              </div>
            </div>
          </div>
        </div>
      </Div>
    </>
  );
};

export default Popup;
