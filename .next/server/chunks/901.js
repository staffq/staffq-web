"use strict";
exports.id = 901;
exports.ids = [901];
exports.modules = {

/***/ 5901:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ HomePage_Profile)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./src/styles/profilestyle.js

const ProfileJs = (external_styled_components_default()).div`
  @media (min-width: 250px) and (max-width: 768px) {
    display: none;
  }
  @media (min-width: 769px) and (max-width: 1300px) {
    display: none;
  }
  .wave {
    margin-top: -8%;
    width: 84%;
    position: relative;
  }
  .waves-two {
    position: absolute;
    top: 109rem;
    padding-left: 60px;
  }
  .wave-three {
    position: absolute;
    top: 120rem;
    padding-left: 57px;
  }
  .wave-four {
    position: absolute;
    top: 128rem;
    padding-left: 57px;
  }
  .wave-five {
    position: absolute;
    top: 139rem;
    padding-left: 57px;
  }
  .wave-six {
    position: absolute;
    top: 145rem;
    padding-left: 57px;
  }
  .ProFileBg {
    background-image: url("assets/images/ProfileBackground.svg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    position: sticky;

    width: 456px;
    height: 456px;
    left: 37px;
    margin-top: 2rem;

    border-radius: 0px;
  }
  .we-aim {
    width: 467px;
    height: 159px;
    left: 0px;
    margin-top: 50px;

    font-style: normal;
    font-weight: 600;
    font-size: 37px;
    line-height: 49px;

    color: #081429;
  }
  .VectorImage {
    width: 159px;
    height: 14.53px;
    margin-top: -34px;

    margin-left: 183px;
  }
  .P-tag {
    width: 461px;
    height: 126px;
    left: 0px;
    padding-top: 28px;

    font-style: normal;
    font-weight: 500;
    font-size: 21px;
    line-height: 27px;

    color: rgba(8, 20, 41, 0.6);
  }
  .ProfileScreening {
    font-size: 24px;
    font-weight: 600;
    line-height: 32px;
    letter-spacing: 0em;

    height: 30px;

    transition: 0.5s;
  }
  .ProfileScreenin {
    font-size: 24px;
    font-weight: 600;
    line-height: 32px;
    letter-spacing: 0em;

    height: 30px;

    transition: 0.5s;
  }
  h5 {
    font-size: 24px;
    font-weight: 600;
    height: auto;
  }
  .dis-play {
    padding-left: 24px;
  }
  .dis-play:hover h5 {
    border-bottom: 5px solid yellow;
    transition: margin-right 2s ease-in-out;
  }
  .bop {
    border-bottom: 5px solid red;
  }

  .dis-play:hover h5 {
  }

  .ProfileScreenin {
    margin-left: 70px;
  }
  p {
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;

    color: rgba(8, 20, 41, 0.4);
  }
  .two {
    margin-top: 47px;
    display: flex;
  }
  .one {
    display: flex;
    flex-direction: column;
  }
  .img-one {
    margin-top: -44px;
  }
  .under-img {
    width: 100px;
    height: 100px;

    transition: width 2s;
  }
  .dis-play:hover .under-img {
  }
  .twwo {
    margin-left: 8rem;
  }
  .profile-screen {
    padding-left: 87px;
  }
  .three {
    display: flex;
    margin-top: 4rem;
    margin-left: -8rem;
  }
  .four {
    display: flex;
    flex-direction: column;
  }
`;
// ...............................small phone device styled...............
const SmallProfile = (external_styled_components_default()).div`
  font-size: 20px;
  display: none;
  @media (min-width: 250px) and (max-width: 768px) {
    text-align: center;
    display: block;

    .Vect-Image {
      width: 160px;
      margin-bottom: 10px;
      padding-left: 67px;
    }
  }
  .smProFileBg {
    background-image: url("assets/images/ProfileBackground.svg");
    background-repeat: no-repeat;
    /* background-position: center; */
    background-size: contain;
    /* position: sticky;

    width: 456px;
    height: 456px;
   */
    padding: 3px;

    border-radius: 0px;
  }
  @media (min-width: 1000px) and (max-width: 1030px) {
    .smProFileBg {
      margin-left: 18rem;
      width: 47%;
    }
  }
  @media (min-width: 760px) and (max-width: 820px) {
    .smProFileBg {
      margin-left: 12rem;
      width: 60%;
    }
  }
  H2 {
  }
  p {
  }
  @media (min-width: 769px) and (max-width: 1300px) {
    text-align: center;
    display: block;
  }
`;

;// CONCATENATED MODULE: ./src/pages/HomePage/Profile/index.jsx



const Profile = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ProfileJs, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "container",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "text-center",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                    children: "How It Works"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                    children: [
                                        "We seek to help a job seeker find a job, and find a qualified candidate ",
                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                        " for an open position for a company"
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "container-fluid ",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "wrapper layout-row",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "sticky-one",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "row",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "col-lg-6 col-md-12 ",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "ProFileBg ",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "profileText ",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: "row ",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: "col-lg-3"
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                    className: "col-lg-9",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                                            className: "we-aim ",
                                                                            children: "We aim to match employee skills with necessary tasks in the most effective ways"
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                            className: "VectorImage",
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                                src: "assets/images/Effective.svg"
                                                                            })
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: "row",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: "col-lg-3"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: "col-lg-9",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                        className: "P-tag mt-4",
                                                                        children: "Effective staffing involves understanding company needs, such as when it's most important to save money and when it's most important to do the best job possible."
                                                                    })
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "col-lg-6 col-md-12 col-sm-12 ",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "dis-play border-one profile-screen",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "two",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                className: "one",
                                                                children: [
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h5", {
                                                                        className: "ProfileScreenin",
                                                                        children: [
                                                                            "Profile Screening & Shortlisting",
                                                                            " "
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                                        children: [
                                                                            "We review tons of applications against our minimum criteria,",
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                                            "their professional journey,and holistic background checks."
                                                                        ]
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                src: "assets/images/Profile-Screening.svg",
                                                                className: "img-one"
                                                            })
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    src: "assets/images/ring.svg ",
                                                    className: "wave"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "waves-two",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "three ",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                src: "assets/images/Language-img.svg",
                                                                className: "img-one"
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                className: "four",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                                        className: "ProfileScreening",
                                                                        children: "Language Proficiency"
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                                        children: [
                                                                            "We review tons of applications against our minimum criteria,",
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                                            "their professional journey,and holistic background checks."
                                                                        ]
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "dis-play border-one wave-three",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "two twwo",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                className: "one",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                                        className: "ProfileScreening",
                                                                        style: {
                                                                            marginLeft: "9rem"
                                                                        },
                                                                        children: "Aptitude Evaluation"
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                                        children: [
                                                                            "We conduct a scientifically designed aptitude test",
                                                                            " ",
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                                            "to check their reasoning and problem-solving ability."
                                                                        ]
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                src: "assets/images/apptitude-img.svg",
                                                                className: "img-one"
                                                            })
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "wave-four",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "three ",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                src: "assets/images/Technical-img.svg",
                                                                className: "img-one img-four"
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                className: "four",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                                        className: "ProfileScreening",
                                                                        children: "Technical Assessment"
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                                        children: [
                                                                            "We have curated one of most advanced technical assessments to vet talent's ",
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                                            " capabilities, these are role-based extremely stringent tests which filters ",
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                                            " top 10% talents"
                                                                        ]
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "view",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "dis-play wave-five",
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                className: "two twwo",
                                                                children: [
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                        className: "one",
                                                                        children: [
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                                                className: "ProfileScreening",
                                                                                style: {
                                                                                    marginLeft: "13rem"
                                                                                },
                                                                                children: "Panel Interview"
                                                                            }),
                                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                                                children: [
                                                                                    "We conduct a scientifically designed aptitude test",
                                                                                    " ",
                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                                                    "to check their reasoning and problem-solving ability."
                                                                                ]
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                        src: "assets/images/Panel-Interview.svg",
                                                                        className: "img-one"
                                                                    })
                                                                ]
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "wave-six",
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                className: "three ",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                        src: "assets/images/get-img.svg",
                                                                        className: "img-one"
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                        className: "four",
                                                                        children: [
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                                                className: "ProfileScreening",
                                                                                children: "Get Selected"
                                                                            }),
                                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                                                children: [
                                                                                    "Get selected at top companies international",
                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                                                    "standards around the world."
                                                                                ]
                                                                            })
                                                                        ]
                                                                    })
                                                                ]
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
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(SmallProfile, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "container",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "text-center",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                        children: "Service we offer"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                        children: [
                                            "We seek to help a job seeker find a job, and find a qualified candidate ",
                                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                            " for an open position for a company"
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "smProFileBg ",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h2", {
                                                className: "mt-5",
                                                children: [
                                                    "We aim to match employee skills with necessary tasks",
                                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                    " in the most effective ways"
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    src: "assets/images/Effective.svg",
                                                    className: "Vect-Image"
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            className: "",
                                            children: "Effective staffing involves understanding company needs, such as when it's most important to save money and when it's most important to do the best job possible."
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "container",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: "assets/images/Icon.png"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                children: "Language Proficiency"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                children: [
                                                    "AI-powered communication assessment tests a candidate's reading,",
                                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                    "writing, pronunciation, clarity, fluency and speed of speech."
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: "assets/images/Icon.png"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                children: "Language Proficiency"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                children: [
                                                    "AI-powered communication assessment tests a candidate's reading,",
                                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                    "writing, pronunciation, clarity, fluency and speed of speech."
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: "assets/images/Icon.png"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                children: "Language Proficiency"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                children: [
                                                    "AI-powered communication assessment tests a candidate's reading,",
                                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                    "writing, pronunciation, clarity, fluency and speed of speech."
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: "assets/images/Icon.png"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                children: "Language Proficiency"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                children: [
                                                    "AI-powered communication assessment tests a candidate's reading,",
                                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                    "writing, pronunciation, clarity, fluency and speed of speech."
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: "assets/images/Icon.png"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                children: "Language Proficiency"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                children: [
                                                    "AI-powered communication assessment tests a candidate's reading,",
                                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                    "writing, pronunciation, clarity, fluency and speed of speech."
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: "assets/images/Icon.png"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                children: "Language Proficiency"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                children: [
                                                    "AI-powered communication assessment tests a candidate's reading,",
                                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                    "writing, pronunciation, clarity, fluency and speed of speech."
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
        ]
    });
};
/* harmony default export */ const HomePage_Profile = (Profile);


/***/ })

};
;