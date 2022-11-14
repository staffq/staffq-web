import React from "react";
import { useState } from "react";
import {
  H1,
  Button,
  Background,
  Image,
  BannerText,
  P,
  BannerContent,
  Icons,
  BannerPage,
  Smbanner,
  Medium,
} from "./style";
// import "./HoverableComponent.css";
// import Input from "../FormControls/Input";
import { BsArrowRight } from "react-icons/bs";
const Index = () => {
  return (
    <div>
      <div className="container-fluid">
        <BannerPage>
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12 p-0">
              <BannerText>
                <H1>
                  We simplify the way to find <br></br>
                  and manage workforce.{" "}
                </H1>
                <P className="">
                  StaffQ Consultancy is known for its IT and Non-IT recruiter’s{" "}
                  <br></br>
                  suppliers to all the recruitment companies various Domain.
                </P>

                <Button>
                  Find Your Job{" "}
                  {/* <span className="hover-arrow ">
                    {" "}
                    <BsArrowRight />
                  </span> */}
                  <img
                    src="assets/images/Find-your.svg"
                    className="hello"
                  ></img>
                </Button>
              </BannerText>
            </div>
            <div className=" col-lg-6 col-md-12 col-sm-12 p-0 pe-0 container-fluid">
              <div>
                <Background>
                  <Image
                    src="assets/images/Main banner image grp.png"
                    width="100%"
                  ></Image>
                </Background>
              </div>
            </div>
          </div>
        </BannerPage>

        <Medium>
          <div className="row">
            <div className=" col-lg-6 col-md-12 col-sm-12 p-0">
              <div className="smText">
                <h1>We simplify the way to find and manage workforce.</h1>
                <p className="">
                  StaffQ Consultancy is known for its IT and Non-IT recruiter’s{" "}
                  <br></br> suppliers to all the recruitment companies various
                  Domain.
                </p>
                <button className="btn btn-medium">Find Your Job</button>
              </div>
            </div>
            <div className=" col-lg-6 col-md-12 col-sm-12 p-0 mt-4">
              <div className="smimages">
                <img
                  src="assets/images/Main banner image grp.png"
                  width="100%"
                ></img>
              </div>
            </div>
          </div>
        </Medium>

        <Smbanner>
          <div className="row">
            <div className="col-md-12 col-sm-12 p-0">
              <div className="smText">
                <h1>
                  We simplify the way <br></br>to find and manage workforce.
                </h1>
                <p className="">
                  StaffQ Consultancy is known for its IT and <br></br>Non-IT
                  recruiter’s suppliers to all the <br></br>recruitment
                  companies various Domain.
                </p>
                <button className="btn btn-small">Find Your Job</button>
              </div>
            </div>
            <div className="col-md-12 col-sm-12 p-0 mt-4">
              <div className="smimages">
                <img
                  src="assets/images/Main banner image grp.png"
                  width="100%"
                ></img>
              </div>
            </div>
          </div>
        </Smbanner>
      </div>
    </div>
  );
};

export default Index;
