import React from "react";

// import { useState } from "react";
// import package *********************** //
import Link from "next/link";
// import style...............................//

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
                  StaffQ Consultancy is known for IT and Non-IT recruiters
                  <br></br>
                  suppliers to all the recruitment companies in various Domains.
                </P>

                {/* <Button>
                  Find Your Job{" "}
               
                  <img
                    src="assets/images/Find-your.svg"
                    className="hello"
                  ></img>
                </Button> */}
                <Link href="find-jobs">
                  <button class="btn-black">
                    Find your jobs <span class="arrow arrow-black"></span>
                    {/* <img src="assets/images/Find-your.svg" className=""></img> */}
                  </button>
                </Link>
              </BannerText>
            </div>
            <div className=" col-lg-6 col-md-12 col-sm-12 p-0 pe-0 container-fluid">
              <div>
                <Background>
                  <Image
                    src="assets/images/Main-banner-image-grp.webp"
                    width="100%"
                  ></Image>
                </Background>
              </div>
            </div>
          </div>
          {/* <div className="header">

          <div className="wrapper">
            <div className="statice-txt">
            Build your Digital Dream with us. iam a</div>
            <ul className="dynamic-txts">
              <li><span>youtube</span></li>
              <li><span>visibvle</span></li>
              <li><span>ant</span></li>
              <li><span>not show</span></li>
            </ul>
          </div>
</div> */}
        </BannerPage>

        <Medium>
          <div className="row">
            <div className=" col-lg-6 col-md-12 col-sm-12 p-0">
              <div className="smText">
                <p className=" h_one">
                  {" "}
                  We simplify the way to find and manage workforce.
                </p>
                <p className="">
                  StaffQ Consultancy is known for IT and Non-IT recruiters
                  <br></br>
                  suppliers to all the recruitment companies in various Domains.
                </p>
                <Link href="find-jobs">
                  <button class="btn-black">
                    Find your jobs <span class="arrow arrow-black"></span>
                    {/* <img src="assets/images/Find-your.svg" className=""></img> */}
                  </button>
                </Link>
              </div>
            </div>
            <div className=" col-lg-6 col-md-12 col-sm-12 p-0 mt-4">
              <div className="smimages">
                <img
                  src="assets/images/Main-banner-image-grp.webp"
                  width="100%"
                ></img>
              </div>
            </div>
          </div>
        </Medium>

        <Smbanner className="">
          <div className="row">
            <div className="col-md-12 col-sm-12 p-0">
              <div className="smText container">
                <p className=" h_one">
                  We simplify the way <br></br>to find and manage workforce.
                </p>
                <p className="">
                  StaffQ Consultancy is known for IT and Non-IT recruiters
                  suppliers to all the <br></br>recruitment companies in various
                  Domains.
                </p>
                <Link href="find-jobs">
                <button className="btn btn-small">Find Your Job</button></Link>
              </div>
            </div>
            <div className="col-md-12 col-sm-12 p-0 mt-4">
              <div className="smimages">
                <img
                  src="assets/images/Main-banner-image-grp.webp"
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
