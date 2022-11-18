import React from "react";
// import styles from './slider.module.css'
import { SlickBG, Box, Smbox, Div } from "../../../styles/slider-style";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import SmallSlider from "../SmallSlider";
const Slick = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 3500,
    slidesToShow: 3,
    slidesToScroll: 3,
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
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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
    <div>
      <SlickBG className="container-fluid">
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
        <div className={`SliderHead `}>
          <Slider {...settings}>
            {/* ....................one......................... */}
            <div className="    one-jsx">
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
                      <p className="communication">CEO, Communications Ltd</p>
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
                      <p className="communication">CEO, Communications Ltd</p>
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
                      <p className="communication">CEO, Communications Ltd</p>
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
                      <p className="communication">CEO, Communications Ltd</p>
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
                      <p className="communication">CEO, Communications Ltd</p>
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
                      <p className="communication">CEO, Communications Ltd</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* ........................add................. */}

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
                      <p className="communication">CEO, Communications Ltd</p>
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
                      <p className="communication">CEO, Communications Ltd</p>
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
                      <p className="communication">CEO, Communications Ltd</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </SlickBG>
      <Div>
        <div>
          <SmallSlider />
        </div>
      </Div>

      <Box>
        <div className="container">
          <div className="box">
            <div className="row">
              <div className="col-lg-3  col-sm-6" style={{ marginTop: "34px" }}>
                <div className="">
                  <h2 style={{ fontSize: "42px" }}>2+ </h2>
                  <p style={{ fontSize: "22px" }}>Years of experience</p>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6" style={{ marginTop: "34px" }}>
                <div className="border-img">
                  <img
                    src="assets/images/border-img.svg"
                    style={{ marginTop: "-20px" }}
                  ></img>
                  <div className="img-content">
                    <h2 style={{ fontSize: "42px" }}>20+ </h2>
                    <p style={{ fontSize: "22px" }}>Companies </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6" style={{ marginTop: "34px" }}>
                <div className="border-img">
                  <img
                    src="assets/images/border-img.svg"
                    style={{ marginTop: "-20px" }}
                  ></img>
                  <div className="img-content">
                    <h2 style={{ fontSize: "42px" }}>1500+ </h2>
                    <p style={{ fontSize: "22px" }}>Recruits </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6" style={{ marginTop: "34px" }}>
                <div className="border-img">
                  <img
                    src="assets/images/border-img.svg"
                    style={{ marginTop: "-20px" }}
                  ></img>
                  <div className="img-content">
                    <h2 style={{ fontSize: "42px" }}>30+ </h2>
                    <p style={{ fontSize: "22px" }}>Team Members </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Box>

      <Smbox className="container">
        <div className="sm-boxscreen">
          <div className="">
            <h2 style={{ fontSize: "42px" }} className="text-center">
              2+{" "}
            </h2>
            <p style={{ fontSize: "22px" }}>Years of experience</p>
          </div>
          <div className="className = 'text-center'">
            <h2 style={{ fontSize: "42px" }}>20+ </h2>
            <p style={{ fontSize: "22px" }}>Companies</p>
          </div>
        </div>
        <div className="sm-boxscreen-one">
          <div className="">
            <h2 style={{ fontSize: "42px" }} className="text-center">
              1500+{" "}
            </h2>
            <p style={{ fontSize: "22px" }} className="text-center">
              Recruits
            </p>
          </div>
          <div className="className = 'text-center'">
            <h2 style={{ fontSize: "42px" }} className="mt-4">
              30+{" "}
            </h2>
            <p style={{ fontSize: "22px" }}>
              Team<br></br>
              Members
            </p>
          </div>
        </div>
      </Smbox>

      {/* .......................................smalll screen........slider.................... */}
    </div>
  );
};

export default Slick;
