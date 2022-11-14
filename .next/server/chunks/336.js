"use strict";
exports.id = 336;
exports.ids = [336];
exports.modules = {

/***/ 8336:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ HomePage_Service)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./src/styles/sservice-style.js
// /* ************************** Import Packages *************************** **/

const ServiceBg = (external_styled_components_default()).div`
  @media (min-width: 900px) and (max-width: 1300px) {
display: none;
  }
  background: #efce1e;
  width: 100%;
  margin-bottom: 20px;
font-weight: 600;
  padding: 0px !important;
  .sm-scrren-p-tag{
    display: none;
  }
  
  .LeftArrow{
    padding-left: 10px;
    width: 35px;
  }
  .smcard-box{
    display: flex;
    justify-content: center;
  }
  .service-card-page {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  
  }
  .service-p-tag{
    font-size: 19px;
line-height: 27px;
font-weight:500;
color: #08142999;

  }
  .small-center{
    padding-left: 30px;
  }
  
    p{
font-style: normal;

width: 108%;
font-size: 16px;

}
h2{
  font-size: 36px;
}
  
  
  @media (min-width: 250px) and (max-width: 768px) {
    .service-card-page {
    display: flex;
    flex-direction: column;
    justify-content: center;
    
  }
  .sm-scrren-p-tag{
    display: block;
  }
  .service-p-tag{
 display: none;
  }

  
  .sm-card{
    display: flex;
    justify-content: center;
  }
  

    width: 100%;
  }
  @media (min-width: 769px) and (max-width: 1204px) {
    align-items: center;
    width: 100%;
    .small-center{
      text-align: center;
    }
  }
  /* @media (min-width: 1024px) and (max-width: 1200px) {
  
    align-items: center;
    width: 100%;
}
.service-card-page {
    display: flex;
    flex-direction: column;
    justify-content: center;
    
  } */
.sm-card{
    display: flex;
    justify-content: center;
  }
 

  @media (min-width: 375px) and (max-width: 768px) {

  }
  .learnmore:hover .VectorImage {
    display: block;
    margin-top: -19px;
  }
  .learnmore:hover {
    font-weight: bold;
  }
  .lear{
    font-weight: bold;
  }
  .VectorImage-one{
    margin-top: -19px;
  }
  .VectorImage {
  
    margin-top: -19px;
    display: none;
  }
  .serviceImage {
    width: 100%;
  }
 
    
 
  
  
    
  @media (min-width: 250px) and (max-width: 768px) {
  
    .small-center{
    text-align: center;
    width: 100%;
  }
    
  .serviceImage {
    width: 100%;
  }
   
    .ServiceText {
      justify-content: center;
      align-items: center;
    }
    .serviceImage {
      overflow: hidden;
      width: 100%;
    }
  }
 
  
`;
const cardhead = (external_styled_components_default()).div`
  background: red;
  width: 250px;
  height: auto;
`;
const Medium = (external_styled_components_default()).div`
display: none;
@media (min-width: 1000px) and (max-width: 120px) 
{
  .serviceImage{
    margin-left: 15rem;
  }
}
@media (min-width: 900px) and (max-width: 1000px) {
  .serviceImage{
    margin-left: 5rem;
  }
}
@media (min-width: 1000px) and (max-width: 1300px) {
  .serviceImage{
    margin-left: 15rem;
  }
}
@media (min-width: 600px) and (max-width: 900px) {
  .service-img-one{
    margin-left: 88px;
  }
  .serviceImage{
    margin-left: 4rem;
  }

}

@media (min-width: 900px) and (max-width: 1300px) {
  display: block;
  background: #efce1e;
  width: 100%;
  margin-bottom: 20px;

  padding: 0px !important;
  .one{
display: flex;
justify-content: center;
flex-direction: row;
  }
  .small-center{
    text-align: center;
  }

  .two{
    display: flex;
    justify-content: center;
  }
    
  .LeftArrow{
    padding-left: 10px;
    width: 35px;
  }
  h5 {
    font-weight: 600;
  }
  h2 {
    font-weight: 600;
  }
  .learnmore:hover .VectorImage {
    display: block;
    margin-top: -19px;
  }
  .learnmore:hover {
    font-weight: bold;
  }
  .lear{
    font-weight: bold;
  }
  .VectorImage-one{
    margin-top: -19px;
  }
  .VectorImage {
  
    margin-top: -19px;
    display: none;
  }
    
  p{
  


  font-style: normal;
  font-weight: 500;
  width: 108%;
  font-size: 16px;
  
  
  color: rgba(8, 20, 41, 0.4);
  }
}
`;

// EXTERNAL MODULE: external "react-icons/bs"
var bs_ = __webpack_require__(567);
;// CONCATENATED MODULE: ./src/components/Card/style.js
// /* ************************** Import Packages *************************** **/

const Card = (external_styled_components_default()).div`
  width: ${(props)=>props.width ? props.width : "auto"};
  height: ${(props)=>props.height ? props.height : "auto"};
  background-color: ${(props)=>props.backgroundColor ? props.backgroundColor : "white"};
  padding: ${(props)=>props.padding ? props.padding : "1rem 1rem 1rem 1rem"};
  margin: ${(props)=>props.margin ? props.margin : "1rem 1rem 1rem 1rem"};
  border-radius: ${(props)=>props.borderRadius ? props.borderRadius : "8px"};
`;

;// CONCATENATED MODULE: ./src/pages/HomePage/Service/index.jsx





const Service = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(ServiceBg, {
                className: "container-fluid p-0 ",
                children: /*#__PURE__*/ jsx_runtime_.jsx("section", {
                    className: "mt-3",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "container ",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "row ",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-lg-6 col-md-12 col-sm-12 mt-5",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "small-center",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                        children: "Services we offer"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                        className: "service-p-tag mb-0",
                                                        children: [
                                                            "Lorem ipsum dolor sit amet, consectetu r adipiscing elit,",
                                                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                            "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        className: "sm-scrren-p-tag mb-0",
                                                        children: "Lorem ipsum dolor sit amet, consectetu r adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "serviceImage",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    src: "assets/images/Woman picture.svg",
                                                    width: "100%",
                                                    className: "service-img-one"
                                                })
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "col-lg-6 col-md-12 col-sm-12 mt-3 ServiceText",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "service-card-page ",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "sm-card",
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Card, {
                                                            width: "282px",
                                                            // backgroundColor="#FFFFFF"
                                                            "border-radius": "10px",
                                                            className: "sriram",
                                                            style: {
                                                                paddingBottom: "8px"
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                                    children: "Permanent Deployment"
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                                    className: "mb-0",
                                                                    children: [
                                                                        " ",
                                                                        "Lorem ipsum dolor sit amet, conse ctetur adipiscing elit, sed do eius"
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                                    className: "learnmore",
                                                                    children: [
                                                                        "Learn more",
                                                                        " ",
                                                                        /*#__PURE__*/ jsx_runtime_.jsx(bs_.BsArrowRight, {
                                                                            className: "fs-3 LeftArrow "
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                            className: "VectorImage",
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                                src: "assets/images/VectorImage.svg"
                                                                            })
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "sm-card",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "smcard",
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Card, {
                                                            width: "282px",
                                                            style: {
                                                                paddingBottom: "8px"
                                                            },
                                                            backgroundColor: "#FFFFFF",
                                                            "border-radius": "10px",
                                                            className: "sriram",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                                    children: "Contract to Hire"
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                                    className: "mb-0",
                                                                    children: [
                                                                        " ",
                                                                        "Lorem ipsum dolor sit amet, conse ctetur adipiscing elit, sed do eius"
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                                    className: "learnmore",
                                                                    children: [
                                                                        "Learn more",
                                                                        " ",
                                                                        /*#__PURE__*/ jsx_runtime_.jsx(bs_.BsArrowRight, {
                                                                            className: "fs-3 LeftArrow "
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                            className: "VectorImage",
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                                src: "assets/images/VectorImage.svg"
                                                                            })
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "sm-card",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "smcard-box",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Card, {
                                                    width: "282px",
                                                    style: {
                                                        paddingBottom: "8px"
                                                    },
                                                    backgroundColor: "#FFFFFF",
                                                    "border-radius": "10px",
                                                    className: "sriram",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                            children: "Payroll Services"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                            className: "mb-0",
                                                            children: [
                                                                " ",
                                                                "Lorem ipsum dolor sit amet, conse ctetur adipiscing elit, sed do eius"
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                            className: "learnmore",
                                                            children: [
                                                                "Learn more ",
                                                                /*#__PURE__*/ jsx_runtime_.jsx(bs_.BsArrowRight, {
                                                                    className: "fs-3 LeftArrow "
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: "VectorImage",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                        src: "assets/images/VectorImage.svg"
                                                                    })
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "service-card-page ",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "sm-card",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "smcard",
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Card, {
                                                            width: "282px",
                                                            style: {
                                                                paddingBottom: "8px"
                                                            },
                                                            // backgroundColor="#FFFFFF"
                                                            "border-radius": "10px",
                                                            className: "sriram",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                                    children: "Passthrough services "
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                                    className: "mb-0",
                                                                    children: [
                                                                        " ",
                                                                        "Lorem ipsum dolor sit amet, conse ctetur adipiscing elit, sed do eius"
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                                    className: "learnmore",
                                                                    children: [
                                                                        "Learn more",
                                                                        " ",
                                                                        /*#__PURE__*/ jsx_runtime_.jsx(bs_.BsArrowRight, {
                                                                            className: "fs-3 LeftArrow "
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                            className: "VectorImage",
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                                src: "assets/images/VectorImage.svg"
                                                                            })
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "sm-card",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "smcard",
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Card, {
                                                            width: "282px",
                                                            style: {
                                                                paddingBottom: "8px"
                                                            },
                                                            backgroundColor: "#FFFFFF",
                                                            "border-radius": "10px",
                                                            className: "sriram",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                                    children: "Offshore Recruitmente"
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                                    className: "mb-0",
                                                                    children: [
                                                                        " ",
                                                                        "Lorem ipsum dolor sit amet, conse ctetur adipiscing elit, sed do eius"
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                                    className: "learnmore",
                                                                    children: [
                                                                        "Learn more",
                                                                        " ",
                                                                        /*#__PURE__*/ jsx_runtime_.jsx(bs_.BsArrowRight, {
                                                                            className: "fs-3 LeftArrow "
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                            className: "VectorImage",
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                                src: "assets/images/VectorImage.svg"
                                                                            })
                                                                        })
                                                                    ]
                                                                })
                                                            ]
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
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Medium, {
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "container",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "mt-5",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "small-center",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                        className: "pt-3",
                                        children: "Services we offer"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                        className: "sm-scrren-p-tag mb-0 pt-1",
                                        children: [
                                            "Lorem ipsum dolor sit amet, consectetu r adipiscing elit,",
                                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                            "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "serviceImage",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    src: "assets/images/Woman picture.png"
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "one",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Card, {
                                                width: "282px",
                                                style: {
                                                    paddingBottom: "8px"
                                                },
                                                backgroundColor: "#FFFFFF",
                                                "border-radius": "10px",
                                                className: "sriram",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                        children: "Permanent Deployment"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                        className: "mb-0",
                                                        children: [
                                                            " ",
                                                            "Lorem ipsum dolor sit amet, conse ctetur adipiscing elit, sed do eius"
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                        className: "learnmore",
                                                        children: [
                                                            "Learn more ",
                                                            /*#__PURE__*/ jsx_runtime_.jsx(bs_.BsArrowRight, {
                                                                className: "fs-3 LeftArrow "
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "VectorImage",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                    src: "assets/images/VectorImage.svg"
                                                                })
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Card, {
                                                width: "282px",
                                                style: {
                                                    paddingBottom: "8px"
                                                },
                                                backgroundColor: "#FFFFFF",
                                                "border-radius": "10px",
                                                className: "sriram",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                        children: "Contract to Hire"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                        className: "mb-0",
                                                        children: [
                                                            " ",
                                                            "Lorem ipsum dolor sit amet, conse ctetur adipiscing elit, sed do eius"
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                        className: "learnmore",
                                                        children: [
                                                            "Learn more ",
                                                            /*#__PURE__*/ jsx_runtime_.jsx(bs_.BsArrowRight, {
                                                                className: "fs-3 LeftArrow "
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "VectorImage",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                    src: "assets/images/VectorImage.svg"
                                                                })
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "two",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Card, {
                                            width: "282px",
                                            style: {
                                                paddingBottom: "8px"
                                            },
                                            backgroundColor: "#FFFFFF",
                                            "border-radius": "10px",
                                            className: "sriram",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                    children: "Payroll Services"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                    className: "mb-0",
                                                    children: [
                                                        " ",
                                                        "Lorem ipsum dolor sit amet, conse ctetur adipiscing elit, sed do eius"
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                    className: "learnmore",
                                                    children: [
                                                        "Learn more ",
                                                        /*#__PURE__*/ jsx_runtime_.jsx(bs_.BsArrowRight, {
                                                            className: "fs-3 LeftArrow "
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "VectorImage",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                src: "assets/images/VectorImage.svg"
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "one",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Card, {
                                                width: "282px",
                                                style: {
                                                    paddingBottom: "8px"
                                                },
                                                backgroundColor: "#FFFFFF",
                                                "border-radius": "10px",
                                                className: "sriram",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                        children: "Passthrough services"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                        className: "mb-0",
                                                        children: [
                                                            " ",
                                                            "Lorem ipsum dolor sit amet, conse ctetur adipiscing elit, sed do eius"
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                        className: "learnmore",
                                                        children: [
                                                            "Learn more ",
                                                            /*#__PURE__*/ jsx_runtime_.jsx(bs_.BsArrowRight, {
                                                                className: "fs-3 LeftArrow "
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "VectorImage",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                    src: "assets/images/VectorImage.svg"
                                                                })
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Card, {
                                                width: "282px",
                                                style: {
                                                    paddingBottom: "8px"
                                                },
                                                backgroundColor: "#FFFFFF",
                                                "border-radius": "10px",
                                                className: "sriram",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                        children: "Offshore Recruitment"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                        className: "mb-0",
                                                        children: [
                                                            " ",
                                                            "Lorem ipsum dolor sit amet, conse ctetur adipiscing elit, sed do eius"
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                        className: "learnmore",
                                                        children: [
                                                            "Learn more ",
                                                            /*#__PURE__*/ jsx_runtime_.jsx(bs_.BsArrowRight, {
                                                                className: "fs-3 LeftArrow "
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "VectorImage",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                    src: "assets/images/VectorImage.svg"
                                                                })
                                                            })
                                                        ]
                                                    })
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
        ]
    });
};
/* harmony default export */ const HomePage_Service = (Service);


/***/ })

};
;