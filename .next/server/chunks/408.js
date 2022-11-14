"use strict";
exports.id = 408;
exports.ids = [408];
exports.modules = {

/***/ 5408:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ HomePage_About)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./src/styles/about-style.js

const AboutBg = (external_styled_components_default()).div`
@media (min-width:769px) and (max-width:1200px){
    display: none;
}
background: #FEFBE9;
width:100%;
height: 39rem;
margin-top: 10%;

padding: 0px !important;
.About-section{
    text-align: center;
    
}
.aboutbtn{
    width: 158px;
height: 62px;
color: white;
font-size:18px;

background: #081429;
border-radius: 16px;
}
@media (min-width:375px) and (max-width:768px){
    height: 75rem;
    .aboutImage{
   
    }
    .aboutbtn{
        margin: 0 auto;
        display: flex;
        text-align: center;
        /* margin-left: 98px; */
    }
    .about{
    margin-top: 10px;
    margin-left: 40px;
    font-size: 19px;
}
  
   
    background: #FEFBE9;
width:100%;


justify-content: center;
align-items: center;

    .Aboutsecond{
        margin-top: 20%;
      
    }
    .AboutPtext{
    font-size: 58px;
    margin-top: 32px;
    text-align: center;
    align-items: center;
    justify-content: center;
    
}
  

}
.AboutPtext{
       /* font-size: 16px; */
  
       font-size: 17px;
    line-height: 38px;
    letter-spacing: 0em;
    text-align: left;
    
}
.Aboutsecond{
    margin-top: 10%;
    @media (min-width:769px) and (max-width:1024px){
      
        .Aboutsecond{
        margin-top: 20%;
      
    }
    
    .AboutPtext{
    font-size: 18px;
    margin-top: 32px;
    
}
}

  
}
@media (min-width:769px) and (max-width:1000px){
    height: 50rem;
    /* .aboutbtn{
        margin-left: 290px;
        margin-top: 12px;
        margin-bottom: 20px;
    } */
    .AboutPtext{
    font-size: 18px;
    margin-top: 32px;
    
}
.aboutbtn{
        margin: 0 auto;
        display: flex;
        text-align: center;
        /* margin-left: 98px; */
    }
    .about{
    margin-top: 10px;
    margin-left: 40px;
    font-size: 19px;
}
       
    }
    @media (min-width:300px) and (max-width:400px){
        height: 79rem;
    /* .aboutbtn{
        margin-left: 80px;
    } */
    .AboutPtext{
  
    margin-top: 32px;
    
}
    }
    @media (min-width:500px) and (max-width:600px){
        height: 71rem;
        /* .aboutbtn{
        margin-left: 140px;
    } */
    }


`;
const Medium = (external_styled_components_default()).div`
display: none;
@media (min-width:769px) and (max-width:1200px){
    display: inline-block;
    background: #FEFBE9;
width:100%;
height: 70rem;
margin-top: 10%;

padding: 0px !important;
.About-section{
    text-align: center;
    padding-top: 40px;
}
.aboutbtn{
    width: 158px;
height: 62px;
color: white;
font-size:18px;
margin: 0 auto;
display: flex;
background: #081429;
border-radius: 16px;
}
.AboutPtext{
    font-size: 18px;
    margin-top: 32px;
    line-height: 30px;

  

    text-align: left;
    
    
}
.aboutImage{
width: 596px;
margin: 0 auto;
}
.about{
    margin-top: 10px;
    margin-left: 40px;
    font-size: 19px;
}
}
`;

;// CONCATENATED MODULE: ./src/pages/HomePage/About/index.jsx



const About = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(AboutBg, {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "container-fluid",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "About-section",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                    className: "",
                                    children: "Why People Choose StaffQ?"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                    children: [
                                        " ",
                                        "We have found that the best way to get them is with up front research \u2013 of your company, competitors,",
                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                        " target market and customer psychographics"
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "container",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "row mt-5",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "col-lg-5 col-md-12 col-sm-12",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "aboutImage",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: "assets/images/Rectangle.svg",
                                                width: "100%"
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "col-lg-7 col-md-12 col-sm-12 fs-5",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    className: "AboutPtext",
                                                    children: "StaffQ Consultancy Private Limited is a trusted HR Service provider based in India\u2019s technological hub, Tirupur was set up in the year 2020. Since its inception in 2020, the company is progressing under the guidance of a dynamic leadership team with in-depth industry knowledge including legal, compliance, process, technology in the HR domain and backed by a dedicated team of professionals who have vast experience of working in various reputed industries. We at STAFFQ have achieved several milestones under the expert directions of Mr Manoj Kumar and Mr Soorya Narayanan Directors of the company. Their futuristic approach and strong analytical abilities enable us to cater to the needs of the clients, most efficiently. We have developed an expertise in providing a gamut of services to business organizations for their increasing demands."
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                    className: "aboutbtn",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "about",
                                                        children: "About Us"
                                                    })
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Medium, {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "container-fluid",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "About-section",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                    className: "",
                                    children: "Why People Choose StaffQ?"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                    children: [
                                        " ",
                                        "We have found that the best way to get them is with up front research \u2013 of your company, competitors,",
                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                        " target market and customer psychographics"
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "container",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "aboutImage",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: "assets/images/Rectangle.svg",
                                        width: "100%"
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            className: "AboutPtext",
                                            children: "StaffQ Consultancy Private Limited is a trusted HR Service provider based in India\u2019s technological hub, Tirupur was set up in the year 2020. Since its inception in 2020, the company is progressing under the guidance of a dynamic leadership team with in-depth industry knowledge including legal, compliance, process, technology in the HR domain and backed by a dedicated team of professionals who have vast experience of working in various reputed industries. We at STAFFQ have achieved several milestones under the expert directions of Mr Manoj Kumar and Mr Soorya Narayanan Directors of the company. Their futuristic approach and strong analytical abilities enable us to cater to the needs of the clients, most efficiently. We have developed an expertise in providing a gamut of services to business organizations for their increasing demands."
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                            className: "aboutbtn",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "about",
                                                children: "About Us"
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const HomePage_About = (About);


/***/ })

};
;