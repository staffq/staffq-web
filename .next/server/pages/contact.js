"use strict";
(() => {
var exports = {};
exports.id = 335;
exports.ids = [335,43,509,399,224,261];
exports.modules = {

/***/ 1404:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages_contact)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./src/styles/contact-style.js

const ContacttStyle = (external_styled_components_default()).div`
  padding-top: 1%;
`;
// .................form..................................
const Form = (external_styled_components_default()).div`
  .input-filed {
    margin: 0 auto;
    border-radius: 12px;
  background: #ffffff;
  width: 546px;
  height: 56px;
  margin-bottom: 20px;
  box-shadow: 0px 4px 16px rgba(8, 20, 41, 0.08);
  border: 1px solid rgba(8, 20, 41, 0.1);
  }
  .input-option{
    margin: 0 auto;
    border-radius: 12px;
  background: #ffffff;
  width: 41vw;
  height: 56px;
  margin-bottom: 20px;
  box-shadow: 0px 4px 16px rgba(8, 20, 41, 0.08);
  border: 1px solid rgba(8, 20, 41, 0.1);

  }
  label {
    margin-bottom: 12px;
  }
  .text {
    width: 70vw;
    height: 154px;
    left: 300px;
    top: 928px;

    background: #ffffff;
    /* StaffQ_Grey/border */

    border: 1px solid #cdced1;
    box-shadow: 0px 4px 16px rgba(8, 20, 41, 0.08);
    border-radius: 12px;
  }
  .submit-btn {
    background: #081429;

    box-shadow: 0px 4px 20px rgba(5, 31, 50, 0.14);

    width: 300px;
    height: 56px;

    border-radius: 12px;
    text-align: center;
    margin: 0 auto;
    margin-top: 22px;
    display: flex;
  }
  .button-submit {
    width: 55px;
    height: 22px;

    font-family: "General Sans";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 22px;
    margin-top: 10px;
    padding-left: 7rem;

    color: #ffffff;
  }
`;
const Second = (external_styled_components_default()).div`
  margin-top: 20%;
  .bottom {
    border-bottom: 2px solid black;
    position: relative;
    top: 0;
    width: 70rem;
  }
  .display-flex {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    position: relative;
    z-index: 999;
    bottom: 96px;
  }
  .let-one {
    width: 100%;

    top: 98px;
    overflow: hidden;

    background: rgba(239, 206, 30, 0.9);
  }
  h4 {
    font-weight: 600;
    font-size: 50px;
    line-height: 81px;
    /* identical to box height */

    text-align: center;

    /* StaffQ_black */

    color: #050c18;
  }
  p {
    font-weight: 600;

    /* identical to box height */

    text-align: center;

    /* StaffQ_black */

    color: #050c18;
  }
  .our-branches {
    font-style: normal;
    font-weight: 600;
    font-size: 36px;
    line-height: 49px;
    /* identical to box height */

    text-align: center;

    color: #081429;
  }
  .display {
    display: flex;
    flex-direction: row;
  }
  .display-two {
    display: flex;
    flex-direction: column;
    margin-top: 51px;
  }
  .map-image {
    width: 125px;
    margin-top: 25px;
  }
  .style {
  }
`;

// EXTERNAL MODULE: external "react-icons/gr"
var gr_ = __webpack_require__(8547);
// EXTERNAL MODULE: external "react-icons/fi"
var fi_ = __webpack_require__(2750);
;// CONCATENATED MODULE: ./src/components/FormControls/Input/style.js
/* ************************** Import Packages *************************** **/ 
const InputStyled = (external_styled_components_default()).input`
  padding: ${(props)=>props.padding ? props.padding : "0.5rem"};
  position: relative;
  margin: ${(props)=>props.margin};
  width: ${(props)=>props.width ? props.width : "41vw"};
  height: ${(props)=>props.height ? props.height : "56px"};
  border: 0.5px solid rgba(0, 0, 0, 0.5);
  border-radius: 12px;
  background: #ffffff;
  margin-bottom: 20px;
  box-shadow: 0px 4px 16px rgba(8, 20, 41, 0.08);
  border: 1px solid rgba(8, 20, 41, 0.1);

  color: black;
`;
const Icon = (external_styled_components_default()).div`
  color: black;
  width: 40px;
  height: 40px;
  top: 133px;
  position: absolute;
  opacity: 0.5;
`;

;// CONCATENATED MODULE: ./src/components/FormControls/Input/index.jsx

/* ************************** Import Packages *************************** **/ 

/* ************************** Import Styles *************************** **/ 
const Input = ({ onClick , onChange , placeholder , name , value , type , onMouseEnter , onMouseLeave , onBlur , width , height , padding , ...others })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(InputStyled, {
                value: value,
                name: name,
                onClick: onClick,
                onChange: onChange,
                onMouseEnter: onMouseEnter,
                onMouseLeave: onMouseLeave,
                onBlur: onBlur,
                width: width,
                height: height,
                placeholder: placeholder,
                padding: padding,
                ...others
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Icon, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(fi_.FiSearch, {
                    style: {
                        width: "18px",
                        height: "18px"
                    }
                })
            })
        ]
    });
};
/* harmony default export */ const FormControls_Input = (Input);

;// CONCATENATED MODULE: ./src/pages/contact/index.jsx





const contact = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/ jsx_runtime_.jsx(ContacttStyle, {
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Second, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "container-fluid p-0",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "let-one",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "container text-center pt-5 p-5",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                            children: "Let\u2019s Connect For Your Growth"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            className: "pt-2",
                                            children: "We appreciate your interest in our services. Please leave us few details about your business requirements to help us serve better. This information will help us to route your request to the concerned person and you would hear from us promptly."
                                        })
                                    ]
                                })
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Form, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "container",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "text-center",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                children: "Let\u2019s Talk"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                children: "FIll out this form and we\u2019ll get back to you."
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: " ",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "row",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "col-lg-6 col-md-12 col-sm-12",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {}),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            class: "form-group ",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                                                    for: "exampleInputPassword1",
                                                                    children: "Name*"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx(FormControls_Input, {
                                                                    placeholder: "Name"
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            class: "form-group ",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                                                    for: "exampleInputPassword1",
                                                                    children: "Phone*"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx(FormControls_Input, {
                                                                    placeholder: "98765-43210"
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            class: "form-group ",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                                                    for: "exampleInputPassword1",
                                                                    children: "State*"
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("select", {
                                                                    className: "input-option",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                                            value: "",
                                                                            children: "Country"
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                                            value: "",
                                                                            children: "one"
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                                            value: "",
                                                                            children: "one"
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "col-lg-6 col-md-12 col-sm-12",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            class: "form-group ",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                                                    for: "exampleInputPassword1",
                                                                    children: "Email Address*"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx(FormControls_Input, {
                                                                    placeholder: "Eg: Johnkrisinski@email.com"
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            class: "form-group ",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                                                    for: "exampleInputPassword1",
                                                                    children: "country*"
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("select", {
                                                                    className: "input-option ",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                                            value: "country*",
                                                                            children: "Country"
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                                            value: "",
                                                                            children: "one"
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                                            value: "",
                                                                            children: "one"
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            class: "form-group ",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                                                    for: "exampleInputPassword1",
                                                                    children: "City*"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx(FormControls_Input, {
                                                                    placeholder: "Select"
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "justify-content-center",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "row ",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "col-lg-12 col-sm-12 col-sm-12",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        class: "form-group ",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                                                for: "exampleInputPassword1",
                                                                children: "Your Requirement*"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                                type: "textarea",
                                                                class: "form-control text",
                                                                placeholder: "city"
                                                            })
                                                        ]
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "submit-btn",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                    className: "btn button-submit ",
                                                    children: "submit"
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "container",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "row ",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "col-lg-4 col-sm-12 col-md-12",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "display",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                src: "assets/images/map.svg",
                                                                className: "map-image"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: "display-two",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                                    children: "India"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                                    children: "Tiruppur"
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "row pt-2",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "col-lg-1 col-md-1 col-sm-1",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                            src: "assets/images/Loaction.svg"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "col-lg-11 col-md-11 col-sm-11",
                                                        children: [
                                                            "Floor-3A,Sathyam Towers,6D ",
                                                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                            " Bharathi Street,Valipalayam,",
                                                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                            "Tiruppur, 641 601"
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "row mt-3",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "col-lg-1 col-md-1 col-sm-1",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                            src: "assets/images/call-image.svg"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "col-lg-11 col-md-11 col-sm-11",
                                                        children: [
                                                            "+91 9629938033",
                                                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                            "+91 421 3552738"
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "row mt-4",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "col-lg-1 col-md-1 col-sm-1",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(gr_.GrMail, {})
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "col-lg-11 col-md-11 col-sm-11",
                                                        children: "info@staffq.org"
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "col-lg-4 col-sm-12 col-md-12",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "display",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                src: "assets/images/map.svg",
                                                                className: "map-image"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: "display-two",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                                    children: "Canada"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                                    children: "Ontario"
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "row pt-2",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "col-lg-1 col-md-1 col-sm-1",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                            src: "assets/images/Loaction.svg"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "col-lg-11 col-md-11 col-sm-11",
                                                        children: [
                                                            "111302, Granrock Crea,",
                                                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                            " Mississauaga Ontario",
                                                            " ",
                                                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                            " L5V OEI"
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "row mt-3",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "col-lg-1 col-md-1 col-sm-1",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                            src: "assets/images/call-image.svg"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "col-lg-11 col-md-11 col-sm-11",
                                                        children: [
                                                            "+91 9629938033",
                                                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                            "+91 421 3552738"
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "row mt-4",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "col-lg-1 col-md-1 col-sm-1",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(gr_.GrMail, {})
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "col-lg-11 col-md-11 col-sm-11",
                                                        children: "info@staffq.org"
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "col-lg-4 col-sm-12 col-md-12",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "display",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                src: "assets/images/map.svg",
                                                                className: "map-image"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: "display-two",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                                    children: "United Kingdom"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                                    children: "Southampton"
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "row pt-2",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "col-lg-1 col-md-1 col-sm-1",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                            src: "assets/images/Loaction.svg"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "col-lg-11 col-md-11 col-sm-11",
                                                        children: [
                                                            "127, OMDURMAN ROAD, ",
                                                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                            "Southampton ",
                                                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                            " S014 7DW"
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "row mt-3",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "col-lg-1 col-md-1 col-sm-1",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                            src: "assets/images/call-image.svg"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "col-lg-11 col-md-11 col-sm-11",
                                                        children: [
                                                            "+91 9629938033",
                                                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                            "+91 421 3552738"
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "row mt-4",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "col-lg-1 col-md-1 col-sm-1",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(gr_.GrMail, {})
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "col-lg-11 col-md-11 col-sm-11",
                                                        children: "info@staffq.org"
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
    });
};
/* harmony default export */ const pages_contact = (contact);


/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 2750:
/***/ ((module) => {

module.exports = require("react-icons/fi");

/***/ }),

/***/ 8547:
/***/ ((module) => {

module.exports = require("react-icons/gr");

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
var __webpack_exports__ = (__webpack_exec__(1404));
module.exports = __webpack_exports__;

})();