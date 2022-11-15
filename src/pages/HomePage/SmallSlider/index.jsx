import React from 'react'
import {Small} from "../../../styles/Small-Slider"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const SmallSlider = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 3500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        // autoplay: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      };
  return (
    <section>
    <Small>
    <div className="container">
    <div className="text-center ">
            <div>
              <h2 className="text-light mt-5">What People say</h2>
              <p className="Slider-phara">
                Lorem ipsum dolor sit amet, consectetur adipiscingelit, sed do
                eiusmod tempor incididunt ut labore et <br></br>dolore magna
                aliqua. Ut enim ad minim veniam, quis
              </p>
            </div>
            
          </div>
          </div>
          <div className = "slider-one">
          <Slider {...settings} >
          
            
            {/* ....................one......................... */}
            <div className="   container onee-small-jsx">
              <div className="card h-100">
                <div className="card-body text-info ">
                  <div className="Subheading">
                    <img src="assets/images/Subheading.svg"></img>
                  </div>

                  <p className="card-text ">
                    Lorem ipsum dolor sit amet, consectetur adipisci ngelit, sed
                    do eiusmod tempor incididunt ut lab ore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis
                  </p>

                  <div className="one">
                    <div>
                      <img src="assets/images/Ellipse.svg"></img>
                    </div>
                    <div className="two">
                      <h5 style={{ fontSize: "17px" }}>Sheldon Cooper</h5>
                      <p style={{ fontSize: "14px" }}>
                        CEO, Communications Ltd
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card h-100 mt-3">
                <div className="card-body text-info ">
                  <div className="Subheading">
                    <img src="assets/images/Subheading.svg"></img>
                  </div>

                  <p className="card-text ">
                    Lorem ipsum dolor sit amet, consectetur adipisci ngelit, sed
                    do eiusmod tempor incididunt ut lab ore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis
                  </p>

                  <div className="one">
                    <div>
                      <img src="assets/images/Ellipse.svg"></img>
                    </div>
                    <div className="two">
                      <h5 style={{ fontSize: "17px" }}>Sheldon Cooper</h5>
                      <p style={{ fontSize: "14px" }}>
                        CEO, Communications Ltd
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card h-100 mt-3">
                <div className="card-body text-info ">
                  <div className="Subheading">
                    <img src="assets/images/Subheading.svg"></img>
                  </div>

                  <p className="card-text ">
                    Lorem ipsum dolor sit amet, consectetur adipisci ngelit, sed
                    do eiusmod tempor incididunt ut lab ore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis
                  </p>

                  <div className="one">
                    <div>
                      <img src="assets/images/Ellipse.svg"></img>
                    </div>
                    <div className="two">
                      <h5 style={{ fontSize: "17px" }}>Sheldon Cooper</h5>
                      <p style={{ fontSize: "14px" }}>
                        CEO, Communications Ltd
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* ................two.................... */}
            <div className="col    container text-lnfo two-jsx">
              <div className="card h-100">
                <div className="card-body ">
                  <div className="Subheading">
                    <img src="assets/images/Subheading.svg"></img>
                  </div>

                  <p className="card-text ">
                    Lorem ipsum dolor sit amet, consectetur adipisci ngelit, sed
                    do eiusmod tempor incididunt ut lab ore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis
                  </p>

                  <div className="one">
                    <div c>
                      <img src="assets/images/Slicktwoimage.svg"></img>
                    </div>
                    <div className="two">
                      <h5 style={{ fontSize: "17px" }}>Sheldon Cooper</h5>
                      <p style={{ fontSize: "14px" }}>
                        CEO, Communications Ltd
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card h-100 mt-3">
                <div className="card-body ">
                  <div className="Subheading">
                    <img src="assets/images/Subheading.svg"></img>
                  </div>

                  <p className="card-text ">
                    Lorem ipsum dolor sit amet, consectetur adipisci ngelit, sed
                    do eiusmod tempor incididunt ut lab ore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis
                  </p>

                  <div className="one">
                    <div c>
                      <img src="assets/images/Slicktwoimage.svg"></img>
                    </div>
                    <div className="two">
                      <h5 style={{ fontSize: "17px" }}>Sheldon Cooper</h5>
                      <p style={{ fontSize: "14px" }}>
                        CEO, Communications Ltd
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card h-100 mt-3">
                <div className="card-body ">
                  <div className="Subheading">
                    <img src="assets/images/Subheading.svg"></img>
                  </div>

                  <p className="card-text ">
                    Lorem ipsum dolor sit amet, consectetur adipisci ngelit, sed
                    do eiusmod tempor incididunt ut lab ore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis
                  </p>

                  <div className="one">
                    <div c>
                      <img src="assets/images/Slicktwoimage.svg"></img>
                    </div>
                    <div className="two">
                      <h5 style={{ fontSize: "17px" }}>Sheldon Cooper</h5>
                      <p style={{ fontSize: "14px" }}>
                        CEO, Communications Ltd
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* ..................................three....................... */}

            <div className="col    container text-info threee-small-jsx">
              <div className="card h-100">
                <div className="card-body ">
                  <div className="Subheading">
                    <img src="assets/images/Subheading.svg"></img>
                  </div>
                  <p className="card-text ">
                    Lorem ipsum dolor sit amet, consectetur adipisci ngelit, sed
                    do eiusmod tempor incididunt ut lab ore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis
                  </p>

                  <div className="one">
                    <div>
                      <img src="assets/images/slickthreeimage.svg"></img>
                    </div>
                    <div className="two">
                      <h5 style={{ fontSize: "17px" }}>Sheldon Cooper</h5>
                      <p style={{ fontSize: "14px" }}>
                        CEO, Communications Ltd
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card h-100 mt-3">
                <div className="card-body ">
                  <div className="Subheading">
                    <img src="assets/images/Subheading.svg"></img>
                  </div>
                  <p className="card-text ">
                    Lorem ipsum dolor sit amet, consectetur adipisci ngelit, sed
                    do eiusmod tempor incididunt ut lab ore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis
                  </p>

                  <div className="one">
                    <div>
                      <img src="assets/images/slickthreeimage.svg"></img>
                    </div>
                    <div className="two">
                      <h5 style={{ fontSize: "17px" }}>Sheldon Cooper</h5>
                      <p style={{ fontSize: "14px" }}>
                        CEO, Communications Ltd
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card h-100 mt-3">
                <div className="card-body ">
                  <div className="Subheading">
                    <img src="assets/images/Subheading.svg"></img>
                  </div>
                  <p className="card-text ">
                    Lorem ipsum dolor sit amet, consectetur adipisci ngelit, sed
                    do eiusmod tempor incididunt ut lab ore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis
                  </p>

                  <div className="one">
                    <div>
                      <img src="assets/images/slickthreeimage.svg"></img>
                    </div>
                    <div className="two">
                      <h5 style={{ fontSize: "17px" }}>Sheldon Cooper</h5>
                      <p style={{ fontSize: "14px" }}>
                        CEO, Communications Ltd
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
                {/* ................................?adddd...................... */}
                <div className="col    container one-jsx">
              <div className="card h-100">
                <div className="card-body text-info ">
                  <div className="Subheading">
                    <img src="assets/images/Subheading.svg"></img>
                  </div>

                  <p className="card-text ">
                    Lorem ipsum dolor sit amet, consectetur adipisci ngelit, sed
                    do eiusmod tempor incididunt ut lab ore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis
                  </p>

                  <div className="one">
                    <div>
                      <img src="assets/images/Ellipse.svg"></img>
                    </div>
                    <div className="two">
                      <h5 style={{ fontSize: "17px" }}>Sheldon Cooper</h5>
                      <p style={{ fontSize: "14px" }}>
                        CEO, Communications Ltd
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* ................two..................... */}
            <div className="col    container text-lnfo two-jsx">
              <div className="card h-100">
                <div className="card-body ">
                  <div className="Subheading">
                    <img src="assets/images/Subheading.svg"></img>
                  </div>

                  <p className="card-text ">
                    Lorem ipsum dolor sit amet, consectetur adipisci ngelit, sed
                    do eiusmod tempor incididunt ut lab ore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis
                  </p>

                  <div className="one">
                    <div c>
                      <img src="assets/images/Slicktwoimage.svg"></img>
                    </div>
                    <div className="two">
                      <h5 style={{ fontSize: "17px" }}>Sheldon Cooper</h5>
                      <p style={{ fontSize: "14px" }}>
                        CEO, Communications Ltd
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* ..................................three....................... */}

            <div className="col    container text-info three-jsx">
              <div className="card h-100">
                <div className="card-body ">
                  <div className="Subheading">
                    <img src="assets/images/Subheading.svg"></img>
                  </div>
                  <p className="card-text ">
                    Lorem ipsum dolor sit amet, consectetur adipisci ngelit, sed
                    do eiusmod tempor incididunt ut lab ore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis
                  </p>

                  <div className="one">
                    <div>
                      <img src="assets/images/slickthreeimage.svg"></img>
                    </div>
                    <div className="two">
                      <h5 style={{ fontSize: "17px" }}>Sheldon Cooper</h5>
                      <p style={{ fontSize: "14px" }}>
                        CEO, Communications Ltd
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
                {/* ................................?adddd...................... */}
                <div className="col    container one-jsx">
              <div className="card h-100">
                <div className="card-body text-info ">
                  <div className="Subheading">
                    <img src="assets/images/Subheading.svg"></img>
                  </div>

                  <p className="card-text ">
                    Lorem ipsum dolor sit amet, consectetur adipisci ngelit, sed
                    do eiusmod tempor incididunt ut lab ore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis
                  </p>

                  <div className="one">
                    <div>
                      <img src="assets/images/Ellipse.svg"></img>
                    </div>
                    <div className="two">
                      <h5 style={{ fontSize: "17px" }}>Sheldon Cooper</h5>
                      <p style={{ fontSize: "14px" }}>
                        CEO, Communications Ltd
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* ................two..................... */}
            <div className="col    container text-lnfo two-jsx">
              <div className="card h-100">
                <div className="card-body ">
                  <div className="Subheading">
                    <img src="assets/images/Subheading.svg"></img>
                  </div>

                  <p className="card-text ">
                    Lorem ipsum dolor sit amet, consectetur adipisci ngelit, sed
                    do eiusmod tempor incididunt ut lab ore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis
                  </p>

                  <div className="one">
                    <div c>
                      <img src="assets/images/Slicktwoimage.svg"></img>
                    </div>
                    <div className="two">
                      <h5 style={{ fontSize: "17px" }}>Sheldon Cooper</h5>
                      <p style={{ fontSize: "14px" }}>
                        CEO, Communications Ltd
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* ..................................three....................... */}

            <div className="col    container text-info three-jsx">
              <div className="card h-100">
                <div className="card-body ">
                  <div className="Subheading">
                    <img src="assets/images/Subheading.svg"></img>
                  </div>
                  <p className="card-text ">
                    Lorem ipsum dolor sit amet, consectetur adipisci ngelit, sed
                    do eiusmod tempor incididunt ut lab ore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis
                  </p>

                  <div className="one">
                    <div>
                      <img src="assets/images/slickthreeimage.svg"></img>
                    </div>
                    <div className="two">
                      <h5 style={{ fontSize: "17px" }}>Sheldon Cooper</h5>
                      <p style={{ fontSize: "14px" }}>
                        CEO, Communications Ltd
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </Slider>
            </div>
    </Small>
  </section>
  )
}

export default SmallSlider