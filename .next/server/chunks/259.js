"use strict";
exports.id = 259;
exports.ids = [259];
exports.modules = {

/***/ 6259:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Slider)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./src/styles/slider-style.js

const SlickBG = (external_styled_components_default()).div`
  background: #050c18;

  width: 100%;
  overflow: hidden;
  height: 628px;
  position: relative;
  margin-top: 2rem;

  padding: 0px !important;
  .Slider-phara {
    color: #ffffff99;
    line-height: 30px;
    margin-top: 19px;
  }

  .SliderHead div ul .slick-active button {
    background: rgba(255, 255, 255, 0.4);
    width: 35px;
    border-radius: 7px;
    height: 0px;
    line-height: 10px;
  }
  .SliderHead div ul li {
    background: rgba(255, 255, 255, 0.4);
    width: 40px;
    border-radius: 7px;
    height: 0px;
    line-height: 10px;
  }
  .SliderHead div ul {
    margin-bottom: 10px;
  }
  .SliderHead div ul .slick-active button::before {
    position: absolute;
    animation: linear forwards alternate;
    animation-name: run;
    animation-delay: 2s;
    animation-duration: 3500ms;
  }
  @keyframes run {
    0% {
      width: 0px;
      color: rgb(255, 255, 255);
    }
    100% {
      width: 57px;
      color: rgb(255, 255, 255);
      webkit-transform: scaleX(-1);
    }
  }
  .card-text {
    margin-top: 19px;
    color: black;
    font-size: 16px;
  }
  .card {
    background: #ffffff;
    border-radius: 20px;
  }
  .one {
    display: flex;
    flex-direction: row;
    color: #050c18;
  }
  .two {
    display: flex;
    padding-left: 12px;
    flex-direction: column;
  }
  .slick-dots li button:before {
    font-size: 10px;
    line-height: 13px;
    width: 10px;
    height: 10px;
    color: rgb(255, 255, 255);
  }
  .one-jsx {
    margin-left: 70px;
    padding: 41px;
  }
  .two-jsx {
    margin-left: 5px;
    padding: 41px;
  }
  .three-jsx {
    margin-left: -60px;
    padding: 41px;
  }
  .four-jsx {
    margin-left: 0px;
    padding: 51px;
  }
  @media (min-width: 250px) and (max-width: 768px) {
    .one-jsx {
      margin-left: 0px;
    }
    .two-jsx {
      margin-left: 0px;
    }
  }
`;
const Box = (external_styled_components_default()).div`
  @media (min-width: 250px) and (max-width: 768px) {
    display: none;
  }
  @media (min-width: 769px) and (max-width: 1000px) {
    display: none;
  }
  position: relative;
  /* top: 480%; */
  z-index: 99;
  width: 100%;
  bottom: 69px;
  /* bottom: -230rem; */
  font-size: 24px;
  .border-img {
    display: flex;
    flex-direction: row;
  }
  .img-content {
    display: flex;
    flex-direction: column;
    margin-left: 80px;
  }

  @media (min-width: 250px) and (max-width: 768px) {
    margin-top: 120px;
    .small-slidder {
      display: flex;
      flex-direction: column;
    }
    .box {
      box-shadow: 0px;
      border-radius: 0px;
    }
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    .box {
      box-shadow: none;
      border-radius: 0px;
      background: none;
    }
  }
  .box {
    background: #ffffff;
    box-shadow: 0px 4px 20px rgb(8 20 41 / 12%);
    border-radius: 20px;
    text-align: center;

    background: #ffffff;
    box-shadow: 0px 4px 20px rgb(8 20 41 / 12%);
    border-radius: 20px;
  }
  .landing {
    width: 10px;
    height: 44px;
  }
  .one {
    border: 1px solid gainsboro;
    border-top: none;
    border-bottom: navajowhite;
    border-right: navajowhite;
    margin-top: 10px;
  }
  .onee {
    border: 1px solid gainsboro;
    border-top: none;
    border-bottom: navajowhite;
    border-left: none;
    margin-top: 10px;
  }
`;
const Smbox = (external_styled_components_default()).div`
  display: none;
  @media (min-width: 250px) and (max-width: 1000px) {
    display: block;
    margin-top: 5rem;
    .sm-boxscreen {
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
      align-items: center;
    }
    .sm-boxscreen-one {
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
      align-items: center;
    }
  }
`;

// EXTERNAL MODULE: external "react-slick"
var external_react_slick_ = __webpack_require__(8096);
var external_react_slick_default = /*#__PURE__*/__webpack_require__.n(external_react_slick_);
;// CONCATENATED MODULE: ./src/pages/HomePage/Slider/index.jsx


// import styles from './slider.module.css'




const Slick = ()=>{
    const settings = {
        dots: true,
        infinite: true,
        speed: 3500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }, 
        ]
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(SlickBG, {
                className: "container-fluid",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "text-center ",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                    className: "text-light mt-5",
                                    children: "What People say"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                    className: "Slider-phara",
                                    children: [
                                        "Lorem ipsum dolor sit amet, consectetur adipiscingelit, sed do eiusmod tempor incididunt ut labore et ",
                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                        "dolore magna aliqua. Ut enim ad minim veniam, quis"
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: `SliderHead `,
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((external_react_slick_default()), {
                            ...settings,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    class: " container one-jsx",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        class: "card h-100",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            class: "card-body text-info ",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "Subheading",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                        src: "assets/images/Subheading.svg"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    class: "card-text ",
                                                    children: "Lorem ipsum dolor sit amet, consectetur adipisci ngelit, sed do eiusmod tempor incididunt ut lab ore et dolore magna aliqua. Ut enim ad minim veniam, quis"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "one",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                src: "assets/images/Ellipse.svg"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: "two",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                                    style: {
                                                                        fontSize: "17px"
                                                                    },
                                                                    children: "Sheldon Cooper"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                    style: {
                                                                        fontSize: "14px"
                                                                    },
                                                                    children: "CEO, Communications Ltd"
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    class: "col container text-lnfo two-jsx",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        class: "card h-100",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            class: "card-body ",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "Subheading",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                        src: "assets/images/Subheading.svg"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    class: "card-text ",
                                                    children: "Lorem ipsum dolor sit amet, consectetur adipisci ngelit, sed do eiusmod tempor incididunt ut lab ore et dolore magna aliqua. Ut enim ad minim veniam, quis"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "one",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            c: true,
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                src: "assets/images/Slicktwoimage.svg"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: "two",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                                    style: {
                                                                        fontSize: "17px"
                                                                    },
                                                                    children: "Sheldon Cooper"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                    style: {
                                                                        fontSize: "14px"
                                                                    },
                                                                    children: "CEO, Communications Ltd"
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    class: "col container text-info three-jsx",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        class: "card h-100",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            class: "card-body ",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "Subheading",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                        src: "assets/images/Subheading.svg"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    class: "card-text ",
                                                    children: "Lorem ipsum dolor sit amet, consectetur adipisci ngelit, sed do eiusmod tempor incididunt ut lab ore et dolore magna aliqua. Ut enim ad minim veniam, quis"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "one",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                src: "assets/images/slickthreeimage.svg"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: "two",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                                    style: {
                                                                        fontSize: "17px"
                                                                    },
                                                                    children: "Sheldon Cooper"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                    style: {
                                                                        fontSize: "14px"
                                                                    },
                                                                    children: "CEO, Communications Ltd"
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    class: "col container one-jsx",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        class: "card h-100",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            class: "card-body text-info ",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "Subheading",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                        src: "assets/images/Subheading.svg"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    class: "card-text ",
                                                    children: "Lorem ipsum dolor sit amet, consectetur adipisci ngelit, sed do eiusmod tempor incididunt ut lab ore et dolore magna aliqua. Ut enim ad minim veniam, quis"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "one",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                src: "assets/images/Ellipse.svg"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: "two",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                                    style: {
                                                                        fontSize: "17px"
                                                                    },
                                                                    children: "Sheldon Cooper"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                    style: {
                                                                        fontSize: "14px"
                                                                    },
                                                                    children: "CEO, Communications Ltd"
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    class: "col container text-lnfo two-jsx",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        class: "card h-100",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            class: "card-body ",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "Subheading",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                        src: "assets/images/Subheading.svg"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    class: "card-text ",
                                                    children: "Lorem ipsum dolor sit amet, consectetur adipisci ngelit, sed do eiusmod tempor incididunt ut lab ore et dolore magna aliqua. Ut enim ad minim veniam, quis"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "one",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            c: true,
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                src: "assets/images/Slicktwoimage.svg"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: "two",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                                    style: {
                                                                        fontSize: "17px"
                                                                    },
                                                                    children: "Sheldon Cooper"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                    style: {
                                                                        fontSize: "14px"
                                                                    },
                                                                    children: "CEO, Communications Ltd"
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    class: "col container text-info three-jsx",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        class: "card h-100",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            class: "card-body ",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "Subheading",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                        src: "assets/images/Subheading.svg"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    class: "card-text ",
                                                    children: "Lorem ipsum dolor sit amet, consectetur adipisci ngelit, sed do eiusmod tempor incididunt ut lab ore et dolore magna aliqua. Ut enim ad minim veniam, quis"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "one",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                src: "assets/images/slickthreeimage.svg"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: "two",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                                    style: {
                                                                        fontSize: "17px"
                                                                    },
                                                                    children: "Sheldon Cooper"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                    style: {
                                                                        fontSize: "14px"
                                                                    },
                                                                    children: "CEO, Communications Ltd"
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    class: "col container one-jsx",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        class: "card h-100",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            class: "card-body text-info ",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "Subheading",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                        src: "assets/images/Subheading.svg"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    class: "card-text ",
                                                    children: "Lorem ipsum dolor sit amet, consectetur adipisci ngelit, sed do eiusmod tempor incididunt ut lab ore et dolore magna aliqua. Ut enim ad minim veniam, quis"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "one",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                src: "assets/images/Ellipse.svg"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: "two",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                                    style: {
                                                                        fontSize: "17px"
                                                                    },
                                                                    children: "Sheldon Cooper"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                    style: {
                                                                        fontSize: "14px"
                                                                    },
                                                                    children: "CEO, Communications Ltd"
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    class: "col container text-lnfo two-jsx",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        class: "card h-100",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            class: "card-body ",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "Subheading",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                        src: "assets/images/Subheading.svg"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    class: "card-text ",
                                                    children: "Lorem ipsum dolor sit amet, consectetur adipisci ngelit, sed do eiusmod tempor incididunt ut lab ore et dolore magna aliqua. Ut enim ad minim veniam, quis"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "one",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            c: true,
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                src: "assets/images/Slicktwoimage.svg"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: "two",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                                    style: {
                                                                        fontSize: "17px"
                                                                    },
                                                                    children: "Sheldon Cooper"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                    style: {
                                                                        fontSize: "14px"
                                                                    },
                                                                    children: "CEO, Communications Ltd"
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    class: "col container text-info three-jsx",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        class: "card h-100",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            class: "card-body ",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "Subheading",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                        src: "assets/images/Subheading.svg"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    class: "card-text ",
                                                    children: "Lorem ipsum dolor sit amet, consectetur adipisci ngelit, sed do eiusmod tempor incididunt ut lab ore et dolore magna aliqua. Ut enim ad minim veniam, quis"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "one",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                src: "assets/images/slickthreeimage.svg"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: "two",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                                    style: {
                                                                        fontSize: "17px"
                                                                    },
                                                                    children: "Sheldon Cooper"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                    style: {
                                                                        fontSize: "14px"
                                                                    },
                                                                    children: "CEO, Communications Ltd"
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
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Box, {
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "container",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "box",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "row",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-lg-3 col-sm-6",
                                    style: {
                                        marginTop: "34px"
                                    },
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                style: {
                                                    fontSize: "42px"
                                                },
                                                children: "2+ "
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                style: {
                                                    fontSize: "22px"
                                                },
                                                children: "Years of experience"
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-lg-3 col-sm-6",
                                    style: {
                                        marginTop: "34px"
                                    },
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "border-img",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: "assets/images/border-img.svg",
                                                style: {
                                                    marginTop: "-20px"
                                                }
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "img-content",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                        style: {
                                                            fontSize: "42px"
                                                        },
                                                        children: "20+ "
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        style: {
                                                            fontSize: "22px"
                                                        },
                                                        children: "Companies "
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-lg-3 col-sm-6",
                                    style: {
                                        marginTop: "34px"
                                    },
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "border-img",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: "assets/images/border-img.svg",
                                                style: {
                                                    marginTop: "-20px"
                                                }
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "img-content",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                        style: {
                                                            fontSize: "42px"
                                                        },
                                                        children: "1500+ "
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        style: {
                                                            fontSize: "22px"
                                                        },
                                                        children: "Recruits "
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-lg-3 col-sm-6",
                                    style: {
                                        marginTop: "34px"
                                    },
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "border-img",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: "assets/images/border-img.svg",
                                                style: {
                                                    marginTop: "-20px"
                                                }
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "img-content",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                        style: {
                                                            fontSize: "42px"
                                                        },
                                                        children: "30+ "
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        style: {
                                                            fontSize: "22px"
                                                        },
                                                        children: "Team Members "
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Smbox, {
                className: "container",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "sm-boxscreen",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h2", {
                                        style: {
                                            fontSize: "42px"
                                        },
                                        className: "text-center",
                                        children: [
                                            "2+",
                                            " "
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        style: {
                                            fontSize: "22px"
                                        },
                                        children: "Years of experience"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "className = 'text-center'",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                        style: {
                                            fontSize: "42px"
                                        },
                                        children: "20+ "
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        style: {
                                            fontSize: "22px"
                                        },
                                        children: "Companies"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "sm-boxscreen-one",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h2", {
                                        style: {
                                            fontSize: "42px"
                                        },
                                        className: "text-center",
                                        children: [
                                            "1500+",
                                            " "
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        style: {
                                            fontSize: "22px"
                                        },
                                        className: "text-center",
                                        children: "Recruits"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "className = 'text-center'",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                        style: {
                                            fontSize: "42px"
                                        },
                                        className: "mt-4",
                                        children: "30+ "
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                        style: {
                                            fontSize: "22px"
                                        },
                                        children: [
                                            "Team",
                                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                            "Members"
                                        ]
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
/* harmony default export */ const Slider = (Slick);


/***/ })

};
;