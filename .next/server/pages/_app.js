"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888,43,509,399,224,246,349,261,405];
exports.modules = {

/***/ 7611:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "react-redux"
const external_react_redux_namespaceObject = require("react-redux");
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./src/container/Footer/style.js
/* ************************** Import Packages *************************** **/ 
const Foot = (external_styled_components_default()).div`
cursor: pointer;
background: #050C18;
margin-top: 8%;
@media (min-width:1000px) and (max-width:1200px){
  .towers{
    margin-left: 33px;
  }
}
.under-line{
  border-bottom : 2px solid;
  padding: 0px;
  padding-left: 0px;
  padding-right: 0px;
}

h2 {
  color: white;
}
p , span{
  color: rgba(255, 255, 255, 0.8);
  font-weight: 500;
font-size: 17px;
}
.last-line{
  font-size: 14px;
line-height: 28px;
/* identical to box height, or 200% */


color: rgba(255, 255, 255, 0.6);

}
.footerlast{
  display: flex;
  justify-content: space-between;
  
}
.Foter{
  display: flex;
flex-direction: row;

}
.terms{
  padding-right: 25px;
}
.logo-footer{
width: 176px;
}
.infostaffq{
  padding-left: 20px;
}
.pdding-left{
  padding-left: 22px;
}
.infostaff{
  padding-left: 35px;
}
.footer-one{
  font-size: 18px;
line-height: 22px;



color: rgba(255, 255, 255, 0.8);
}
.footer-two{
  font-size: 18px;
line-height: 22px;



color: rgba(255, 255, 255, 0.8);

}
.footer-contactus{
  font-size: 18px;
line-height: 22px;



color: rgba(255, 255, 255, 0.8);

}

.foooter-other{
  padding-left: 68px;
}

@media (min-width:250px) and (max-width:768px){
  display: none;

  padding: 12px ;
  margin-top: 10%;
  .logo-footer{
 display: none;
}
}
`;
const SmFoot = (external_styled_components_default()).div`

display: none;
@media (min-width:250px) and (max-width:768px){
  margin-top: 40px;

.paddingtwoSide{
  padding-left: 25px;
}
.pdding-left{
  margin-left: 22px;
}
.pdding-lef{
  margin-left: 35px;}

  
h5{
    font-size: 30px;
  }
  .under-text{
    border: 2px solid rgba(255, 255, 255, 0.1);
 margin-top: 55px;


  }
  .sm_conta{
    padding-top: 98px;
    font-size: 22px;
  }
  display: block;
  background: #050C18;
  color: white;
  /* padding-left: 40px; */
}
.justify-content-spacebetween{
  justify-content: space-around;
}

`;

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "react-icons/gr"
var gr_ = __webpack_require__(8547);
;// CONCATENATED MODULE: ./src/container/Footer/index.jsx




// import {IoCall } from "react-icons/Io";

const Footer = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Foot, {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "mt-5",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "container-fluid p-0 ",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("section", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "container ",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "row",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "col-lg-3 col-md-6 col-sm-12 ",
                                                style: {
                                                    marginTop: "62px"
                                                },
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "logo-footer",
                                                    children: [
                                                        " ",
                                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                            src: "assets/images/Logo.png"
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "col-lg-3 col-md-6 col-sm-12 ",
                                                style: {
                                                    marginTop: "60px"
                                                },
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                            className: "text-white",
                                                            style: {
                                                                fontSize: "24px"
                                                            },
                                                            children: "Our Services"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: "footer-one mt-",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                    href: "permanent-deployment",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                        children: "Permanent Deployment"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                    children: "Contract to Hire"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                    children: "Payroll Services"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                    children: "Passthrough services"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                    children: "Offshore Recruitment Services"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                    children: "Onshore Recruitment Services"
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "col-lg-3 col-md-6 col-sm-12 foooter-other",
                                                style: {
                                                    marginTop: "60px"
                                                },
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                            className: "text-white",
                                                            style: {
                                                                fontSize: "24px"
                                                            },
                                                            children: "Others"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: "footer-two mt-4",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                    children: "About Us"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                    children: "Blogs"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                    children: "FAQs"
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "col-lg-3 col-md-6 col-sm-12 ",
                                                style: {
                                                    marginTop: "60px"
                                                },
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                        className: "text-white",
                                                        style: {
                                                            fontSize: "24px"
                                                        },
                                                        children: "Contact Us"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "mt-4 footer-contactus",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                        src: "assets/images/location-image.png"
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                                        className: "pdding-left text-white",
                                                                        children: [
                                                                            "Floor-3A,Sathyam",
                                                                            " ",
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                className: "towers",
                                                                                children: "Towers,6D"
                                                                            })
                                                                        ]
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                                className: "infostaff",
                                                                children: [
                                                                    " ",
                                                                    "Bharathi Street,Valipalayam, Tiruppur, 641 601"
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                className: "",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                        src: "assets/images/call-image.svg"
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                                        style: {
                                                                            paddingLeft: "10px"
                                                                        },
                                                                        children: [
                                                                            " ",
                                                                            "+91 9629938033"
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                        className: "infostaff",
                                                                        children: "+91 421 3552738 "
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                                children: [
                                                                    " ",
                                                                    /*#__PURE__*/ jsx_runtime_.jsx(gr_.GrMail, {}),
                                                                    " ",
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                                        className: "me-3 infostaffq",
                                                                        children: [
                                                                            " ",
                                                                            "info@staffq.org"
                                                                        ]
                                                                    }),
                                                                    " "
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: " container-fluid p-0",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "under-line"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "container mt-3",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "footerlast",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                            style: {
                                                fontSize: "14px"
                                            },
                                            className: "last-line",
                                            children: [
                                                " ",
                                                "@StaffQ Consultancy Pvt. Ltd - All rights reserved 14-11-22 (5pm)"
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "Foter",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: "terms last-line ",
                                                style: {
                                                    fontSize: "14px"
                                                },
                                                children: "Terms of service"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                style: {
                                                    fontSize: "14px"
                                                },
                                                className: "last-line",
                                                children: "Privacy policy"
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(SmFoot, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "container mt-5",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "paddingtwoSide",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                className: "mt-5 ",
                                                style: {
                                                    paddingTop: "88px"
                                                },
                                                children: "Our Solutions"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                style: {
                                                    fontSize: "18px"
                                                },
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        children: "Permanent Deployment"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        children: "Recruitment process outsourcing"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        children: "Contract to Hire"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        children: "Payroll Services"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        children: "Passthrough services"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        children: "Offshore Recruitment Services"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        children: "Onshore Recruitment Services"
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "mt-5",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                            style: {
                                                paddingTop: "48px"
                                            },
                                            children: "Careers"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "",
                                            style: {
                                                fontSize: "18px"
                                            },
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    children: "Permanent recruitment"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    children: "Recruitment process outsourcing"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    children: "General staffing"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    children: "Specialty staffing"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    children: "Headhunting"
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "mt-5",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                            className: "mt-3",
                                            style: {
                                                paddingTop: "40px"
                                            },
                                            children: "Contact Us"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            style: {
                                                fontSize: "18px"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                            src: "assets/images/location-image.png"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            className: "pdding-left text-white",
                                                            children: "Floor-3A,Sathyam Towers,6D"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                    className: "pdding-lef",
                                                    children: [
                                                        " ",
                                                        "Bharathi Street,Valipalayam,",
                                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                        " Tiruppur, 641 601"
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                            src: "assets/images/call-image.svg"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            style: {
                                                                paddingLeft: "9px"
                                                            },
                                                            children: " +91 9629938033"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                            style: {
                                                                paddingLeft: "33px"
                                                            },
                                                            children: " +91 421 3552738"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                    children: [
                                                        " ",
                                                        /*#__PURE__*/ jsx_runtime_.jsx(gr_.GrMail, {}),
                                                        " ",
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                            style: {
                                                                paddingLeft: "15px"
                                                            },
                                                            children: [
                                                                " ",
                                                                "info@staffq.org"
                                                            ]
                                                        }),
                                                        " "
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "container-fluid p-0 ",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "under-text"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "mt-5",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                className: "text-center ",
                                style: {
                                    marginTop: "34px"
                                },
                                children: [
                                    " ",
                                    "@ StaffQ. All rights reserved 14-11-22 (5pm)"
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "d-flex justify-content-spacebetween",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        style: {
                                            fontSize: "14px"
                                        },
                                        children: "Privacy policy"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        style: {
                                            fontSize: "14px"
                                        },
                                        children: "Terms of service"
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const container_Footer = (Footer);

;// CONCATENATED MODULE: ./src/container/Header/style.js
// /* ************************** Import Packages *************************** **/

const Div = (external_styled_components_default()).div`
  
  p{
    font-size: 16px;
    font-weight: bold;
  }
  .navbar .collapse {
    justify-content: space-between;
    z-index: 999;
  }
  .nav-item {
    padding-right: 30px;
  }
  .navbar {
    padding-left: 50px;
    padding-right: 50px;
    margin-bottom: 20px;
    z-index: 100;
    border-bottom: 1px solid rgba(8, 20, 41, 0.1)
  }
  .ul{
    padding-right: 75px;
  }
  .nav-link {
    padding-top: 0px;
    padding-bottom: 0px;
    /* font-weight: 300; */
    
   
    /* color: #473b4a !important; */
  }
  .navbar-nav {
    display: flex;
    align-items: center;
    padding-left: 70px;
  }
  .navbar-brand{
    padding-left: 60px;
  
  }
  .nav-item:nth-child(6) {
    padding-right: 20px;
    border-right: 1px solid #a49ea5;
  }
  @media (min-width: 1000px) and (max-width:1030px) {
  .navbar .collapse{
    justify-content: space-around;
    z-index: 999;
  }
  .navbar-brand{
    padding-left: 0px;
  
  }
}
@media (min-width:990px) and (max-width:1080px){
  .navbar-nav{
    padding-right: 4rem;
  }
}

`;
const Img = (external_styled_components_default()).div`
padding-left:79px;`;
const Button = (external_styled_components_default()).button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 16px;
  width: 135px;
  height: 40px;
  background: #7e0095;
  border-radius: 16px;
  border: none;
  color: #ffffff;
  font-weight: 600;

`;
const Hover = (external_styled_components_default()).a`
  position: relative;
  color: #473b4a !important;
  font-size: 16px;
  text-decoration: none;
  font-weight: 400;
  cursor: pointer;
  &:after {
    content: '';
  position: absolute;
  width: 100%;
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: black;
  transform-origin: bottom right;
  transition: transform 0.25s ease-out;
  transform: scaleX(0);
  
  }
  &:hover:after{
    transform-origin: bottom left;
    transform: scaleX(1);
   
  }
  ` // export const Navbar = styled.nav`
 //   width: 100%;
 //   padding-right: 0.75rem;
 //   padding-left: 0.75rem;
 //   margin-right: auto;
 //   margin-left: auto;
 //   .mobile-logo {
 //     display: none;
 //   }
 //   .download-icon {
 //     display: none;
 //   }
 //   @media (max-width: 783px) {
 //     .desktop-logo {
 //       display: none;
 //     }
 //     .mobile-width {
 //       width: 20% !important;
 //     }
 //     .mobile-logo {
 //       display: block;
 //       width: 38%;
 //       padding-top: 13px;
 //       padding-left: 13px;
 //     }
 //   }
 //   @media (max-width: 992px) {
 //     .mobile-layout {
 //       max-width: 100% !important;
 //     }
 //   }
 //   @media (max-width: 736px) {
 //     .download-icon {
 //       display: block;
 //       background-color: #7e0095;
 //       color: white;
 //       border-radius: 5px;
 //     }
 //     .download-svg {
 //       width: 30px;
 //       height: 30px;
 //       padding-top: 5px;
 //       padding-bottom: 5px;
 //     }
 //     Button {
 //       display: none;
 //     }
 //   }
 // `;
 // export const NavContent = styled.div`
 //   display: flex;
 //   width: 75%;
 //   @media (max-width: 783px) {
 //     width: 80%;
 //   }
 // `;
 // export const Ul = styled.ul`
 //   color: black;
 //   list-style: none;
 //   padding: 0;
 //   align-items: center;
 //   display: flex;
 //   margin-bottom: 0px;
 //   width: 100%;
 //   justify-content: end;
 //   @media (max-width: 736px) {
 //     justify-content: space-around;
 //     /* font-size: 14px; */
 //   }
 // `;
 // export const Li = styled.li`
 //   padding-right: 4rem;
 //   font-weight: 600;
 //   &:nth-child(6) {
 //     border-right: 1px solid #a49ea5;
 //     padding-right: 2rem;
 //   }
 //   @media (max-width: 1400px) {
 //     padding-right: 3rem;
 //   }
 //   @media (max-width: 1200px) {
 //     padding-right: 1.5rem;
 //   }
 //   @media (max-width: 1183px) {
 //     padding-right: 1.3rem;
 //   }
 //   @media (max-width: 1076px) {
 //     padding-right: 1rem;
 //   }
 //   @media (max-width: 1023px) {
 //     padding-right: 0.8rem;
 //     font-size: 16px;
 //   }
 //   @media (max-width: 969px) {
 //     padding-right: 1.5rem;
 //   }
 //   @media (max-width: 916px) {
 //     padding-right: 1.2rem;
 //   }
 //   @media (max-width: 884px) {
 //     padding-right: 1rem;
 //   }
 //   @media (max-width: 863px) {
 //     padding-right: 1rem;
 //     font-size: 14px;
 //   }
 //   @media (max-width: 736px) {
 //     padding-right: 0.8rem;
 //     /* font-size: 14px; */
 //   }
 // `;
 //
 // export const Div = styled.div`
 //   padding-right: 15px;
 //   color: black;
 //   padding-left: 2rem;
 //   display: flex;
 //   align-items: center;
 //   font-weight: 600;
 //   font-size: 16px;
 //   font-style: normal;
 //   @media (max-width: 736px) {
 //     /* padding-right: 0px; */
 //     padding-left: 1rem;
 //   }
 // `;
 // // export const ToggleMenu = styled.div`
 // //   display: none;
 // //   @media (max-width: 780px) {
 // //     display: block;
 // //   }
 // // `;
;

;// CONCATENATED MODULE: external "react-icons/cg"
const cg_namespaceObject = require("react-icons/cg");
// EXTERNAL MODULE: external "react-icons/fi"
var fi_ = __webpack_require__(2750);
;// CONCATENATED MODULE: ./src/container/Header/index.jsx

/* ************************** Import Packages *************************** **/ 
/* ***************************** Import Next  Packages ******************************** **/ 
/* ************************** Import Styles *************************** **/ 
/* ************************** Import Icons *************************** **/ 

const Header = ()=>{
    const { 0: show , 1: setShow  } = (0,external_react_.useState)("About");
    const { 0: navcolor , 1: setNavColor  } = (0,external_react_.useState)("transparent");
    console.log(navcolor, "colorchange");
    const scrollEvent = ()=>{
        window.scrollY > 40 ? setNavColor("white") : setNavColor("transparent");
    };
    (0,external_react_.useEffect)(()=>{
        window.addEventListener("scroll", scrollEvent);
        return ()=>{
            window.removeEventListener("scroll", scrollEvent);
        };
    }, []);
    //  Header Nav-bar Section
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(Div, {
            className: "navbar-custom",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
                className: "navbar navbar-expand-lg position-fixed container-fluid ",
                style: {
                    backgroundColor: navcolor
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        className: "navbar-toggler",
                        type: "button",
                        "data-toggle": "collapse",
                        "data-target": "#navbarTogglerDemo01",
                        "aria-controls": "navbarTogglerDemo01",
                        "aria-expanded": "false",
                        "aria-label": "Toggle navigation",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "navbar-toggler-icon"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "collapse navbar-collapse",
                        id: "navbarTogglerDemo01",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    className: "navbar-brand",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: "assets/images/shopqLogo.svg"
                                    })
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                className: "navbar-nav mr-auto mt-2 mt-lg-0",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        className: "nav-item active",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(Hover, {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "#",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    className: "mb-0",
                                                    children: "Service"
                                                })
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        className: "nav-item active",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(Hover, {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/findJobPage",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    className: "mb-0",
                                                    children: "Find jobs"
                                                })
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        className: "nav-item active",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(Hover, {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "aboutPage",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    className: "mb-0",
                                                    children: "About us"
                                                })
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        className: "nav-item active",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(Hover, {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "contact",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    className: "mb-0",
                                                    children: "Contact us"
                                                })
                                            })
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const container_Header = (Header);

;// CONCATENATED MODULE: external "redux"
const external_redux_namespaceObject = require("redux");
;// CONCATENATED MODULE: external "redux-logger"
const external_redux_logger_namespaceObject = require("redux-logger");
var external_redux_logger_default = /*#__PURE__*/__webpack_require__.n(external_redux_logger_namespaceObject);
;// CONCATENATED MODULE: external "redux-thunk"
const external_redux_thunk_namespaceObject = require("redux-thunk");
var external_redux_thunk_default = /*#__PURE__*/__webpack_require__.n(external_redux_thunk_namespaceObject);
;// CONCATENATED MODULE: external "redux-devtools-extension"
const external_redux_devtools_extension_namespaceObject = require("redux-devtools-extension");
;// CONCATENATED MODULE: ./src/redux/types/user.types.js
/** **************************** Export Create Address Types ****************************** */ const USER_SUCCESS = "USER_SUCCESS";
const USER_FAILURE = "USER_FAILURE";
const USER_REQUEST = "USER_REQUEST";

;// CONCATENATED MODULE: ./src/redux/reducers/user.reducer.js
/** **************************** Import Types ****************************** */ 
const initialState = {
    userData: "",
    error: "",
    loading: false
};
const manageUserState = (state = initialState, action)=>{
    switch(action.type){
        case USER_REQUEST:
            return {
                ...state,
                userData: "",
                loading: true
            };
        case USER_SUCCESS:
            return {
                ...state,
                userData: action.payload,
                loading: false
            };
        case USER_FAILURE:
            return {
                ...state,
                error: action.payload,
                loading: false
            };
        default:
            return state;
    }
};
/* harmony default export */ const user_reducer = (manageUserState);

;// CONCATENATED MODULE: ./src/redux/rootReducer.js
/** **************************** Import Libs ****************************** */ 
/** **************************** Import Reducers ****************************** */ 
const rootReducer = (0,external_redux_namespaceObject.combineReducers)({
    user: user_reducer
});
/* harmony default export */ const redux_rootReducer = (rootReducer);

;// CONCATENATED MODULE: ./src/redux/store.js
/** **************************** Import Libs ****************************** */ 



/** **************************** Import Root Reducer ****************************** */ 
let middleware = [];
middleware = [
    ...middleware,
    (external_redux_thunk_default()),
    (external_redux_logger_default())
];
const store = (0,external_redux_namespaceObject.createStore)(redux_rootReducer, (0,external_redux_devtools_extension_namespaceObject.composeWithDevTools)((0,external_redux_namespaceObject.applyMiddleware)(...middleware)));

;// CONCATENATED MODULE: ./src/container/Layouts.jsx

/** **************************** Import Packages ****************************** */ 

/** **************************** Import Components ****************************** */ 

/** **************************** Import store ****************************** */ 
function Layouts({ children  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_redux_namespaceObject.Provider, {
        store: store,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(container_Header, {}),
            children,
            /*#__PURE__*/ jsx_runtime_.jsx(container_Footer, {})
        ]
    });
};

// EXTERNAL MODULE: ./src/pages/index.js + 2 modules
var pages = __webpack_require__(6820);
;// CONCATENATED MODULE: ./src/pages/_app.js

/** **************************** Import Layout ****************************** */ 
/** **************************** Import Page ****************************** */ 
/** **************************** Import CSS ****************************** */ 


function MyApp({ Component , pageProps  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(Layouts, {
        className: "container",
        children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
            ...pageProps
        })
    });
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 567:
/***/ ((module) => {

module.exports = require("react-icons/bs");

/***/ }),

/***/ 2750:
/***/ ((module) => {

module.exports = require("react-icons/fi");

/***/ }),

/***/ 8547:
/***/ ((module) => {

module.exports = require("react-icons/gr");

/***/ }),

/***/ 8096:
/***/ ((module) => {

module.exports = require("react-slick");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 7518:
/***/ ((module) => {

module.exports = require("styled-components");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [952,664,534,259,336,901,255,408,448,451], () => (__webpack_exec__(7611)));
module.exports = __webpack_exports__;

})();