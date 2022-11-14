"use strict";
(() => {
var exports = {};
exports.id = 114;
exports.ids = [114,43,509,399,224,261];
exports.modules = {

/***/ 1890:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ findTheBestJob)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "formik"
const external_formik_namespaceObject = require("formik");
;// CONCATENATED MODULE: external "yup"
const external_yup_namespaceObject = require("yup");
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./src/styles/findthejob-style.js

const Find = (external_styled_components_default()).div`
  .Findbg {
    background-image: url("assets/images/find.svg");
    background-repeat: no-repeat;
    background-position: center;

    height: 300px;
    left: 0px;
    top: 98px;

    background: rgba(8, 20, 41, 0.6);
    backdrop-filter: blur(1px);
  }
  .sri {
    background-color: skyblue;
  }
  .HEADER {
    text-align: center;
    font-family: "General Sans";

    font-weight: 600;
    font-size: 60px;
    line-height: 81px;
    text-align: center;

    color: #ffffff;
  }
  input[type="text"],
  input[type="password"] {
    display: block;
    text-align: center;
    margin-left: 120px;
    margin-bottom: 20px;
    box-shadow: 0px 0px 20px;
  }
  .nav {
    font-size: 14px;
  }
  .nav-item {
    margin-left: 12px;
  }
  .p-tag {
    font-size: 15px;
  }
  .Card {
    /* height: 335px; */
    /* width: 329px; */

    border-radius: 16px;

    border: 1px solid rgba(8, 20, 41, 0.2);
    border-radius: 16px;
  }
  .Display {
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
  }

  .cart-text {
    font-weight: 500;
    font-size: 16px;
    line-height: 22px;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
    color: rgba(8, 20, 41, 0.5);
  }
  .design {
    font-style: normal;
    font-weight: 600;
    font-size: 26px;
    line-height: 35px;
    max-width: 14rem;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    /* identical to box height */

    color: #081429;
    /* identical to box height */
  }
  .fulltime {
    width: 70px;
    height: 27px;

    background: #efce1e;
    border: 1px solid rgba(8, 20, 41, 0.1);
    border-radius: 6px;
    font-family: "General Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 19px;
    /* identical to box height */

    color: #081429;
  }
  .remote {
    background: rgba(8, 20, 41, 0.03);
    border: 1px solid rgba(8, 20, 41, 0.1);
    border-radius: 6px;
    font-family: "General Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 13px;

    height: 27px;
    line-height: 19px;
    margin-left: 12px;
    width: 70px;
  }

  .btnone {
    background: #050c18;
    border-radius: 12px;
    width: 100%;
    height: 54px;

    font-size: 16px;
    line-height: 22px;
    font-family: "General Sans";
    font-style: normal;

    margin-bottom: 10px;
    color: #ffffff;

    /* }.btn{
    width: 54px;
height: 19px;
left: 194px;
top: 742px;

font-family: 'General Sans';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 19px; */
    /* identical to box height */
  }
  .btnn {
    padding-left: 5px;
    margin-top: 12px;
  }
  .perivious {
    background: #ffffff;
    border: 1px solid rgba(8, 20, 41, 0.1);
    box-shadow: 0px 4px 20px rgba(8, 20, 41, 0.04);
    border-radius: 8px;
    font-weight: 500;
    font-size: 16px;
    line-height: 22px;
    /* identical to box height */

    color: #081429;
  }
  .second-button {
    margin-left: 10px;
  }
`;

;// CONCATENATED MODULE: ./src/pages/findTheBestJob/index.jsx





const FindJob = ()=>{
    const cardData = [
        {
            header: "UX Designer"
        },
        {
            header: "Front End Developer"
        },
        {
            header: "Visual Designer"
        },
        {
            header: "Motion Designer"
        },
        {
            header: "UX Designer"
        },
        {
            header: "Front End Developer"
        },
        {
            header: "Visual Designer"
        },
        {
            header: "Motion Designer"
        },
        {
            header: "UX Designer"
        },
        {
            header: "Front End Developer"
        },
        {
            header: "Visual Designer"
        },
        {
            header: "Motion Designer"
        },
        {
            header: "UX Designer"
        },
        {
            header: "Front End Developer"
        },
        {
            header: "Visual Designer"
        },
        {
            header: "Motion Designer"
        }, 
    ];
    const formik = (0,external_formik_namespaceObject.useFormik)({
        initialValues: {
            firstName: "",
            lastName: "",
            email: ""
        },
        validationSchema: external_yup_namespaceObject.object({
            firstName: external_yup_namespaceObject.string().max(15, "Must be 15 characters or less").required("Required"),
            lastName: external_yup_namespaceObject.string().max(20, "Must be 20 characters or less").required("Required"),
            email: external_yup_namespaceObject.string().email("Invalid email address").required("Required")
        }),
        onSubmit: (values)=>{
            alert(JSON.stringify(values, null, 2));
        }
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Find, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "container-fluid p-0",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "Findbg",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "HEADER",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h1", {
                            children: [
                                "Find The Best Job ",
                                /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                " For You"
                            ]
                        })
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "container",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                            className: "nav",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    className: "nav-item",
                                    children: "Home"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                    className: "nav-item",
                                    children: [
                                        " ",
                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: "assets/images/icons-right.svg"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    className: "nav-item",
                                    children: "Upload Cv"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    className: "nav-item",
                                    children: "Job Description"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                        children: "Upload Cv"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "p-tag",
                        children: "Enter the details below"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                        children: "Front End Developer"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                        children: "Description"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: "You should be a master in combining the art of design with the art of programming. Responsibilities will include translation of the UI/UX design wireframes to actual code that will produce visual elements of the application. You will be working with the product team designing and developing of the product."
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                        children: "Technical Skills"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        children: "Advanced knowledge of JavaScript Proficient in JavaScript"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        children: "Proficient in JavaScript frameworks/libraries like React js is mandator"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                        children: [
                            " ",
                            "Proficient understanding of web markup, including HTML5, CSS3 with strong interest in UX"
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        children: "Basic understanding of server-side CSS pre-processing platforms, such as LESS and SASS"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        children: "Basic understanding of server-side CSS pre-processing platforms, such as LESS and SASS"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                children: "Soft Skills"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: "Accuracy and attention to detail"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: "Good coding skills and curiosity to explore new technologies"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: "They should be methodical in their approach to design"
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {})
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "row container mt-3",
                        children: cardData === null || cardData === void 0 ? void 0 : cardData.map((cardHead, index)=>{
                            return /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-lg-3 col-md-6 col-sm-12 mb-3",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "Card container ",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                className: "mt-3 design",
                                                children: cardHead === null || cardHead === void 0 ? void 0 : cardHead.header
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                className: "fulltime ",
                                                children: "full time"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                className: "remote",
                                                children: " Remote "
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "Display mt-1",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                        src: "assets/images/locate.svg",
                                                        className: "one",
                                                        width: "16px"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        className: "btnn",
                                                        children: "Chennai"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                        src: "assets/images/note.svg",
                                                        className: "one",
                                                        style: {
                                                            marginLeft: "22px"
                                                        },
                                                        width: "16px"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        className: "btnn",
                                                        children: "20 sept 2022"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: "cart-text",
                                                children: "To work closely with the design and backend team to build and develop web applications for our forward-thinking products."
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                className: " btnone",
                                                children: "Explore Job"
                                            })
                                        ]
                                    })
                                })
                            }, index);
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "text-center",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                    className: "btn perivious",
                                    children: [
                                        " ",
                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: "assets/images/arrow-left.svg"
                                        }),
                                        " Previous",
                                        " "
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                    className: "btn perivious second-button",
                                    children: [
                                        " ",
                                        "Next ",
                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: "assets/images/arrow-right (1).svg"
                                        }),
                                        " "
                                    ]
                                })
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                onSubmit: formik.handleSubmit,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                        htmlFor: "firstName",
                        children: "First Name"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                        id: "firstName",
                        type: "text",
                        ...formik.getFieldProps("firstName")
                    }),
                    formik.touched.firstName && formik.errors.firstName ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        children: formik.errors.firstName
                    }) : null,
                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                        htmlFor: "lastName",
                        children: "Last Name"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                        id: "lastName",
                        type: "text",
                        ...formik.getFieldProps("lastName")
                    }),
                    formik.touched.lastName && formik.errors.lastName ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        children: formik.errors.lastName
                    }) : null,
                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                        htmlFor: "email",
                        children: "Email Address"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                        id: "email",
                        type: "email",
                        ...formik.getFieldProps("email")
                    }),
                    formik.touched.email && formik.errors.email ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        children: formik.errors.email
                    }) : null,
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        type: "submit",
                        children: "Submit"
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const findTheBestJob = (FindJob);


/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

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
var __webpack_exports__ = (__webpack_exec__(1890));
module.exports = __webpack_exports__;

})();