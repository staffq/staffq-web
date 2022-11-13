import styled from "styled-components";

export const ProfileJs = styled.div`
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

export const SmallProfile = styled.div`
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
