"use strict";
(() => {
var exports = {};
exports.id = 55;
exports.ids = [55,43,509,399,224,261];
exports.modules = {

/***/ 133:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ blogs)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./src/styles/blogs.js

const Bg = (external_styled_components_default()).div`


padding-top: 1rem;



`;
const SecondCard = (external_styled_components_default()).div`
  margin-top: 10%;
  h1 {
    font-size: 12px;
  }
  .card-two {
    background: #ffffff;
    border: 1px solid rgba(8, 20, 41, 0.2);
    border-radius: 16px;
    padding: 0px;
  }
  .card-img {
    border-radius: 16px 16px 0px 0px;
    
    
  }
`;

;// CONCATENATED MODULE: ./src/pages/blogs/index.jsx



const Blogs = ()=>{
    const card = [
        {
            id: "1",
            image: "assets/images/Card-second.svg",
            text: "How to Create an Engineering Culture"
        },
        {
            id: "1",
            image: "assets/images/Card-second.svg",
            text: "How to Create an Engineering Culture"
        },
        {
            id: "1",
            image: "assets/images/Card-second.svg",
            text: "How to Create an Engineering Culture"
        }, 
    ];
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/ jsx_runtime_.jsx(Bg, {
            children: /*#__PURE__*/ jsx_runtime_.jsx(SecondCard, {
                children: /*#__PURE__*/ jsx_runtime_.jsx("section", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "row ",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "col-lg-4 card-two",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: "assets/images/Card-second.svg",
                                                width: "100%",
                                                className: "card-img"
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "container",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                            className: "btn btn-warning",
                                                            children: "Tech"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                            className: "btn ",
                                                            children: "5 minutes need"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                            src: "assets/images/note.svg"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            className: "",
                                                            children: "20 sep 2022"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h5", {
                                                    children: [
                                                        "How to Create an Engineering Culture",
                                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                        " That Will Drive Your Team\u2019s Success"
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                                    className: "btn",
                                                    children: [
                                                        "Read more",
                                                        " ",
                                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                            src: "assets/images/arrow-right (1).svg"
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
                })
            })
        })
    });
};
/* harmony default export */ const blogs = (Blogs);


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
var __webpack_exports__ = (__webpack_exec__(133));
module.exports = __webpack_exports__;

})();