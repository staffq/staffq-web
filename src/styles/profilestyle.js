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
    top: 112rem;
    padding-left: 60px;
  }
  .wave-three {
    position: absolute;
    top: 123rem;
    padding-right: 47px;
  }
  .wave-four {
    position: absolute;
    top: 130rem;
    padding-left: 57px;
  }
  .wave-five {
    position: absolute;
    top: 141rem;
    padding-right: 45px;
  }
  .wave-six {
    position: absolute;
    top: 149rem;
    padding-left: 57px;
  }
  .how-it-work-p-tag {
    font-weight: 500;
    font-size: 20px;

    line-height: 27px;
    text-align: center;

    color: rgba(8, 20, 41, 0.6);
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
  .profile-screen :hover span {
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
      background-image: url("assets/images/ProfileBackground.svg");
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
      position: sticky;
      margin: 0 auto;
      width: 456px;
      height: 456px;
      left: 37px;
      margin-top: 2rem;

      border-radius: 0px;
    }
  }
  @media (min-width: 768px) and (max-width: 1500px) {
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

  @media (min-width: 1025px) and (max-width: 1400px) {
    .medium-responsive {
      display: block;
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
  @media (min-width: 1024px) and (max-width: 1100px) {
    .medium-responsive {
      padding-left: 7rem;
      margin-bottom: 2rem;
    }
  }

  @media (min-width: 1401px) and (max-width: 1900px) {
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
  .small-p-tag {
    font-size: 21px;
    font-weight: 400;
    margin-top: 2rem;
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
      background-image: url("assets/images/ProfileBackground.svg");
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;

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
