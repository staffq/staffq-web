import styled from "styled-components";

export const ProfileJs = styled.div`
  .posstion {
    position: static;
    top: 20%;
  }

  /* .bg-success123{
    background: url("assets/images/ring.svg");

  } */

  .wave {
    margin-top: -8%;
    width: 84%;
    position: relative;
  }
  .waves-two {
    position: absolute;
    top: 113rem;
    padding-left: 60px;
  }
  .wave-three {
    position: absolute;
    top: 126rem;
    padding-right: 47px;
  }
  .wave-four {
    position: absolute;
    top: 136rem;
    padding-left: 57px;
  }
  .wave-five {
    position: absolute;
    top: 149rem;
    padding-right: 45px;
  }
  .wave-six {
    position: absolute;
    top: 159rem;
    padding-left: 57px;
  }
  .how-it-work-p-tag {
    font-weight: 500;
    font-size: 20px;

    line-height: 27px;
    text-align: center;

    color: rgba(8, 20, 41, 0.6);
  }

  @media (min-width: 1300px) and (max-width: 1330px) {
    .waves-two {
      position: absolute;
      top: 106rem;
      padding-left: 60px;
    }
    .wave-three {
      position: absolute;
      top: 116rem;
      padding-right: 47px;
    }
    .wave-four {
      position: absolute;
      top: 124rem;
      padding-left: 57px;
    }
    .wave-five {
      position: absolute;
      top: 135rem;
      padding-right: 45px;
    }
    .wave-six {
      position: absolute;
      top: 144rem;
      padding-left: 57px;
    }
  }

  @media (min-width: 1330px) and (max-width: 1360px) {
    .waves-two {
      position: absolute;
      top: 106rem;
      padding-left: 60px;
    }
    .wave-three {
      position: absolute;
      top: 117rem;
      padding-right: 47px;
    }
    .wave-four {
      position: absolute;
      top: 127rem;
      padding-left: 57px;
    }
    .wave-five {
      position: absolute;
      top: 137rem;
      padding-right: 45px;
    }
    .wave-six {
      position: absolute;
      top: 147rem;
      padding-left: 57px;
    }
  }

  @media (min-width: 1360px) and (max-width: 1400px) {
    .waves-two {
      position: absolute;
      top: 107rem;
      padding-left: 60px;
    }
    .wave-three {
      position: absolute;
      top: 118rem;
      padding-right: 47px;
    }
    .wave-four {
      position: absolute;
      top: 127rem;
      padding-left: 57px;
    }
    .wave-five {
      position: absolute;
      top: 138rem;
      padding-right: 45px;
    }
    .wave-six {
      position: absolute;
      top: 147rem;
      padding-left: 57px;
    }
  }
  @media (min-width: 1400px) and (max-width: 1450px) {
    .waves-two {
      position: absolute;
      top: 110rem;
      padding-left: 60px;
    }
    .wave-three {
      position: absolute;
      top: 121rem;
      padding-right: 47px;
    }
    .wave-four {
      position: absolute;
      top: 131rem;
      padding-left: 57px;
    }
    .wave-five {
      position: absolute;
      top: 141rem;
      padding-right: 45px;
    }
    .wave-six {
      position: absolute;
      top: 151rem;
      padding-left: 57px;
    }
  }
  @media (min-width: 1300px) and (max-width: 1500px) {
  }
  h2 {
    font-size: 29px;
  }
  @media (min-width: 1450px) and (max-width: 1500px) {
    .waves-two {
      position: absolute;
      top: 113rem;
      padding-left: 60px;
    }
    .wave-three {
      position: absolute;
      top: 125rem;
      padding-right: 47px;
    }
    .wave-four {
      position: absolute;
      top: 134rem;
      padding-left: 57px;
    }
    .wave-five {
      position: absolute;
      top: 146rem;
      padding-right: 45px;
    }
    .wave-six {
      position: absolute;
      top: 156rem;
      padding-left: 57px;
    }
  }

  .ProFileBg {
    background-image: url("assets/images/profile.png");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    position: sticky;

    width: 456px;
    z-index: -999;
    height: 456px;
    left: 37px;
    margin-top: 2rem;

    border-radius: 0px;
  }
  .we-aim {
    width: 438px;
    height: 159px;
    left: 0px;
    margin-top: 50px;
    font-style: normal;
    font-weight: 600;
    font-size: 31px;
    line-height: 49px;
    color: rgb(8, 20, 41);
  }

  .VectorImage {
    width: 111px;
    height: 14.53px;
    margin-top: -34px;

    margin-left: 125px;
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

  a {
    background-size: 200% 100%;
    background-position: -100%;
    display: inline-block;
    padding: 5px 0;
    font-size: 21px;
    color: black;
    font-weight: 500;
    text-decoration: none;
    position: relative;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
  }

  a:before {
    content: "";
    background: yellow;
    display: block;
    position: absolute;
    bottom: -3px;
    left: 0;
    width: 0;
    height: 3px;
    transition: all 0.3s ease-in-out;
  }

  a:hover {
    background-position: 0;
  }

  a:hover::before {
    width: 100%;
  }

  sub {
    background-size: 200% 100%;
    background-position: -100%;
    display: inline-block;
    padding: 5px 0;
    font-size: 21px;
    color: black;
    font-weight: 500;
    text-decoration: none;
    position: relative;

    transition: all 0.3s ease-in-out;
  }

  sub:before {
    content: "";
    background: yellow;
    display: block;
    position: absolute;
    bottom: -3px;
    right: 0;
    width: 0;
    height: 3px;
    transition: all 0.3s ease-in-out;
  }

  sub:hover {
    background-position: 0;
  }

  sub:hover::before {
    width: 100%;
  }
  label {
    background-size: 200% 100%;
    background-position: -100%;
    display: inline-block;
    padding: 5px 0;
    font-size: 21px;
    color: black;
    font-weight: 500;
    text-decoration: none;
    position: relative;

    transition: all 0.3s ease-in-out;
  }

  label:before {
    content: "";
    background: yellow;
    display: block;
    position: absolute;
    bottom: -3px;
    right: 0;
    width: 0;
    height: 3px;
    transition: all 0.3s ease-in-out;
  }

  label:hover {
    background-position: 0;
  }

  label:hover::before {
    width: 100%;
  }

  .bop {
    border-bottom: 5px solid red;
  }

  .ProfileScreenin {
    margin-left: 179px;
  }
  p {
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;

    color: rgba(8, 20, 41, 0.4);
  }
  .clor {
    color: rgba(8, 20, 41, 0.4);
  }
  .two {
    margin-top: 47px;
    display: flex;
  }
  .one {
    /* display: flex; */
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
    /* margin-left: 8rem; */
  }
  .profile-screen {
    padding-left: 181px;
  }
  .three {
    display: flex;
    margin-top: 4rem;
    margin-left: -8rem;
  }
  .display {
    margin-left: 117px;
    text-align: end;
  }
  span {
    font-weight: 700;
    font-size: 15px;
    line-height: 24px;

    /* color: rgba(8, 20, 41, 0.4); */
  }
  /* .four {
      display: flex;
      flex-direction: column;
    } */

  @media (min-width: 990px) and (max-width: 1024px) {
    .ProFileBg {
      margin-left: 16rem !important;
    }
  }

  @media (min-width: 150px) and (max-width: 768px) {
    display: none;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    .medium-responsive {
      display: none;
    }
    .second-colum {
      display: none;
    }
    .pc-profile {
    }

    .ProFileBg {
      background-image: url("assets/images/profile.png");
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
      position: sticky;
      margin: 0 auto;
      width: 456px;
      z-index: -999;
      height: 456px;
      left: 37px;
      margin-top: 2rem;

      border-radius: 0px;
    }
  }
  @media (min-width: 768px) and (max-width: 1300px) {
    .mediun-none {
      display: block;
    }

    .wave {
      display: none;
    }
    .waves-two {
      padding: unset !important;
      top: 0rem;
      position: relative;
    }
    .wave-three {
      padding: unset !important;
      top: 0rem;
      position: relative;
    }
    .wave-four {
      padding: unset !important;
      top: 0rem;
      position: relative;
    }
    .wave-five {
      padding: unset !important;
      top: 0rem;
      position: relative;
    }
    .wave-six {
      padding: unset !important;
      top: 0rem;
      position: relative;
    }

    .ProfileScreenin {
      margin-left: 0px;
    }
  }

  @media (min-width: 1025px) and (max-width: 1300px) {
    .medium-responsive {
      display: block;
    }
    a {
      background-size: 200% 100%;
      background-position: -100%;
      display: inline-block;
      padding: 5px 0;
      font-size: 21px;
      color: black;
      font-weight: 500;
      text-decoration: none;
      position: relative;

      transition: all 0.3s ease-in-out;
    }

    a:before {
      content: "";
      background: yellow;
      display: block;
      position: absolute;
      bottom: -3px;
      right: 0;
      width: 0;
      height: 3px;
      transition: all 0.3s ease-in-out;
    }

    a:hover {
      background-position: 0;
    }

    a:hover::before {
      width: 100%;
    }
    span {
      font-weight: 500;
      font-size: 23px;
      line-height: 24px;

      /* color: rgba(8, 20, 41, 0.4); */
    }
    .second-colum {
      display: none;
    }
  }

  @media (min-width: 1100px) and (max-width: 1250px) {
    .medium-responsive {
      padding-left: 3rem;
    }
  }
  @media (min-width: 1024px) and (max-width: 1300px) {
    .medium-responsive {
      padding-left: 9rem;
      margin-bottom: 2rem;
    }
  }

  @media (min-width: 1300px) and (max-width: 19000px) {
    .medium-responsive {
      display: none;
    }
  }
`;

// ...............................small phone device styled...............

export const SmallProfile = styled.div`
  font-size: 20px;
  display: none;

  .ProFileBg {
    background-image: url("assets/images/ProfileBackground.svg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    position: sticky;
    margin: 0 auto;
    width: 456px;
    z-index: -999;
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

  .P-tag {
    left: 0px;
    padding-top: 28px;

    font-style: normal;
    font-weight: 500;
    font-size: 21px;
    line-height: 27px;

    color: rgba(8, 20, 41, 0.6);
  }
  .VectorImage {
    width: 159px;
    height: 14.53px;
    margin-top: -34px;

    margin-left: 183px;
  }

  .how-to-work {
    font-weight: 600;
    font-size: 36px;
    line-height: 49px;
    /* identical to box height */

    text-align: center;

    color: #081429;
  }
  .how-to-work-p-tag {
    font-weight: 500;
    font-size: 20px;
    line-height: 27px;
    text-align: center;

    color: rgba(8, 20, 41, 0.6);
  }
  .small-center {
    margin-top: 2rem;
  }
  h4 {
    font-size: 30px;
  }
  .h-four {
    font-size: 33px;
    color: #081429;
    font-weight: 600;
  }

  .small-p-tag {
    font-size: 19px;
    font-weight: 500;
    color: rgba(8, 20, 41, 0.4);
    font-weight: 400;
    /* margin-top: 2rem; */
  }
  .smProFileBg {
    /* background-image: url("assets/images/ProfileBackground.svg");
      background-repeat: no-repeat;
  po
      background-size: contain;

      padding: 3px;
      margin: 0 auto; */
    position: absolute;
  }
  .sm-section {
    position: relative;
    z-index: 2;
    width: 100%;
    top: 8rem;
  }
  @media (min-width: 150px) and (max-width: 769px) {
    text-align: center;
    display: block;

    .Vect-Image {
      width: 160px;
      margin-bottom: 10px;
      padding-left: 67px;
    }
    .small-center {
      margin-top: 2rem;
    }
  }

  @media (min-width: 1000px) and (max-width: 1030px) {
    .small-p-tag {
      font-size: 21px;
      font-weight: 400;
    }
  }
  @media (min-width: 769px) and (max-width: 1024px) {
    .ProFileBg {
      display: none;
    }
    .sm-section {
      display: none;
    }
    .sm-how-to {
      display: none;
    }
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    text-align: center;
    display: block;
  }
  @media (min-width: 250px) and (max-width: 500px) {
    .ProFileBg {
      background-image: url("assets/images/profile.png");
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
      z-index: -99;
      margin: 0 auto;
      width: 344px;
      height: 344px;

      margin-top: 2rem;

      border-radius: 0px;
    }
    .we-aim {
      width: 100%;
      left: 0px;
      margin-top: 50px;

      font-style: normal;
      font-weight: 600;
      font-size: 24px;
      line-height: 49px;

      color: #081429;
    }

    .P-tag {
      left: 0px;

      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 27px;

      color: rgba(8, 20, 41, 0.6);
    }
    .VectorImage {
      margin-top: -32px;

      margin-left: 144px;
    }
  }
`;
