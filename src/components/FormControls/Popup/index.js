import React from "react";
import { Div } from "./style";
const Popup = ({onHide}) => {
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
            <div className="container">
              <div className="card-head">
                <h3>Your resume has been submitted <br></br>successfully.</h3>
              </div>
              <div>
                <p className="card-text">
                  You are being redirected to home page
                </p>
              </div>
              <button onClick={onHide}>close</button>
            </div>
          </div>
        </div>
      </Div>
    </>
  );
};

export default Popup;
