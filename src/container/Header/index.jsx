/* ************************** Import Packages *************************** **/
import React, { useState, useEffect } from "react";

/* ***************************** Import Next  Packages ******************************** **/
import Link from "next/link";

/* ************************** Import Styles *************************** **/
import { Navbar, Ul, Li, Button, Div, NavContent, Hover } from "./style";

/* ************************** Import Icons *************************** **/
import { CgMenu } from "react-icons/cg";
import { FiDownload } from "react-icons/fi";

const Header = () => {
  const [show, setShow] = useState("About");
  const [navcolor, setNavColor] = useState("transparent");
  console.log(navcolor, "colorchange");
  const scrollEvent = () => {
    window.scrollY > 40 ? setNavColor("white") : setNavColor("transparent");
  };
  useEffect(() => {
    window.addEventListener("scroll", scrollEvent);
    return () => {
      window.removeEventListener("scroll", scrollEvent);
    };
  }, []);
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
            <a className="navbar-brand" >
              <img src="assets/images/shopqLogo.svg" />
            </a>
            </Link>
            <ul className="navbar-nav mr-auto mt-2  mt-lg-0">
              <li className="nav-item active">
                <Hover>
                  <Link href="#">
                    
                    <p className="mb-0">Service</p>
                  </Link>
                  
                </Hover>
              </li>

              <li className="nav-item active">
                <Hover>
                <Link href="/find-jobs">
                <p className="mb-0">Find jobs</p></Link>
                </Hover>
              </li>
              <li className="nav-item active">
                <Hover>
                  <Link href="/about-us">
                <p className="mb-0">About us</p></Link>
                </Hover>
             
              </li>
              <li className="nav-item active">
                <Hover>
                <Link href="contact-us">
                    
                    <p className="mb-0">Contact us</p>
                  </Link>
                  </Hover>
              </li>
            </ul>
          </div>
        </nav>
      </Div>
    </>
  );
};

export default Header;
