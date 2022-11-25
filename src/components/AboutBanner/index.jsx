import React from 'react'
import {
    Head,
    SmallHeader,
    
  } from "./style.js"
const AboutHeader = () => {
  return (
    <div>
<Head>
          <div className="header container-fluid px-0">
            <div className=" ">
              <div className="">
                <div className="row">
                  <div className="col-lg-6 col-sm-12 col-md-6 one container">
                    <div className="left-side">
                    
                        <div className="row">
                          <div className="col-lg-1"></div>
                          <div className="col-lg-10">
                            <div className="">
                          <div className="ball-one-page">
                              <h1>
                                Join the team that’s 
                                making the world work 
                                better for everyone
                              </h1>
                            </div>
                            </div>
                          </div>
                        </div>
                       
                      

                   
                    </div>
                  </div>

                  <div className="col-lg-6 col-sm-12 col-md-6">
                    <div>
                      <div className="image-section">
                        <img
                          src="assets/images/about-Banner-image.svg "
                          width="100%"
                          className="banner-image"
                          alt="img"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Head> 
        
        <SmallHeader className="container-fluid p-0">
          <div lassName="Small-header ">
            <div className="small-waves container">
              {/* <img src="assets/images/Ball-and-wa.svg"/> */}

              <div className="text-center samll-wave-contnet">
                <h1>
                  Join the team that’s <br></br>
                  making the world work <br></br>
                  better for everyone <br></br>
                </h1>
              </div>
            </div>
            <div>
              <img
                src="assets/images/About-us-man.svg"
                width="100%"
                className="banner-image"
                alt="img"
              />
            </div>
          </div>
        </SmallHeader>

    </div>
  )
}

export default AboutHeader;