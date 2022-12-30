/* ************************** Import Packages *************************** **/
import React, { useState, useEffect } from "react";

/* ***************************** Import Next  Packages ******************************** **/
import Link from "next/link";

/* ************************** Import Styles *************************** **/
import {
  Navbar,
  Ul,
  Li,
  Button,
  Div,
  
  NavContent,
  Hover,
  Small,
  Card,
} from "./style";

/* ************************** Import Icons *************************** **/
import { CgMenu } from "react-icons/cg";
import { FiDownload } from "react-icons/fi";

const Header = (props) => {
  const { isShown, handleShow, handleHide } = props;
  const [show, setShow] = useState("About");
  const [navcolor, setNavColor] = useState("transparent");

  console.log(isShown, 990);
  const scrollEvent = () => {
    window.scrollY > 40 ? setNavColor("white") : setNavColor("transparent");
  };
  useEffect(() => {
    window.addEventListener("scroll", scrollEvent);
    return () => {
      window.removeEventListener("scroll", scrollEvent);
    };
  }, []);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    setToggle(toggle);
  }, []);

  // const Btn = () =>{
  // setClick(!click);

  //   console.log('hello')

  // }
  //  Header Nav-bar Section
  return (
    <>
      <Div className="navbar-custom">
        <nav
          className="navbar navbar-expand-lg position-fixed  container-fluid "
          style={{ backgroundColor: navcolor }}
        >
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <Link href="/">
              <a className="navbar-brand">
                <img src="assets/images/staffq.svg" alt="img" />
              </a>
            </Link>
            <div className="d-grid">
              <ul className="navbar-nav mr-auto mt-2  mt-lg-0">
                <li className="nav-item active">
                  <Hover className="   ">
                    <Link href="">
                      <p
                        className="mb-0 "
                        onMouseEnter={() => handleShow(true)}
                      >
                        Services
                      </p>
                    </Link>
                  </Hover>
                </li>

                <li className="nav-item ">
                  <Hover onMouseLeave={() => handleHide(false)}>
                    <Link href="/find-jobs">
                      <p className="mb-0">Find Jobs</p>
                    </Link>
                  </Hover>
                </li>
                <li className="nav-item">
                  <Hover onMouseLeave={() => handleHide(false)}>
                    <Link href="/about-us">
                      <p className="mb-0">About Us</p>
                    </Link>
                  </Hover>
                </li>
                <li className="nav-item ">
                  <Hover onMouseLeave={() => handleHide(false)}>
                    <Link href="contact-us">
                      <p className="mb-0">Contact Us</p>
                    </Link>
                  </Hover>
                </li>
              </ul>
              {isShown ? (
                <div className="cardd" onMouseLeave={() => handleHide(false)}>
                  <div className="container popup">
                    <div className="card container">
                      <div className="card-text">
                        <div>
                          <Link href="recruitment-process">
                            <span className="cursor pt-2">
                            Recruitment Process Outsourcing
                          
                            </span>
                          </Link>
                        </div>
                        <div style={{ paddingTop: "10px" }}>
                          <Link href="onshore-recruitment">
                            <span className="cursor ">
                            Onshore Recruitment Services
                             </span>
                          </Link>
                        </div>
                        <div style={{ paddingTop: "10px" }}>
                          <Link href="offshore-recruitment">
                            <span className="cursor "> 
                            Offshore Recruitment Services
                           </span>
                          </Link>
                        </div>
                        <div style={{ paddingTop: "10px" }}>
                          <Link href="permanent-recruitment">
                            <span className="cursor ">
                              {" "}
                            
                              Permanent Recruitment
                            </span>
                          </Link>
                        </div>
                        <div style={{ paddingTop: "10px" }}>
                          <Link href="payroll-services">
                            <span className="cursor">
                            Payroll Services
                            </span>
                          </Link>
                        </div>
                        <div style={{ paddingTop: "10px" }}>
                          <Link href="contract-recruitment">
                            <span className="cursor">
                            Contract to Hire
                          
                            </span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </nav>
      </Div>

      <Small>
        <div className="sm-header container-fluid p-0 position-fixed ">
          <nav
            className="navbar navbar-expand-lg navbar-light"
            style={{ backgroundColor: navcolor }}
          >
            <Link href="/">
              <a className="navbar-brand">
                <img src="assets/images/staffq.svg" alt="img" />
              </a>
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarTogglerDemo02"
              aria-controls="navbarTogglerDemo02"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={() => setToggle(!toggle)}
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              {" "}
            </div>
          </nav>
          {toggle ? (
            <div>
              <ul className="navbar-nav mr-auto  mt-lg-0">
                <li className="nav-item active">
                  {/* <Link href="/">
                    <a
                      className="nav-link"
                      href="#"
                      onClick={() => setToggle(false)}
                    >
                      Services<span className="sr-only"></span>
                    </a>
                  </Link>{" "} */}
                  <Link href="/about-us">
                    <a
                      className="nav-link"
                      href="#"
                      onClick={() => setToggle(false)}
                    >
                      About Us<span className="sr-only"></span>
                    </a>
                  </Link>{" "}
                </li>
                <li className="nav-item">
                  <Link href="find-jobs">
                    <a
                      className="nav-link"
                      href="#"
                      onClick={() => setToggle(false)}
                    >
                      Find Jobs
                    </a>
                  </Link>
                </li>

                <li className="nav-item">
                  <Link href="contact-us">
                    <a
                      className="nav-link"
                      href="#"
                      onClick={() => setToggle(false)}
                    >
                      Contact Us
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          ) : null}
        </div>
      </Small>
    </>
  );
};

export default Header;
