import styled from "styled-components";
export const Worked = styled.div`
  .FIRST {
    margin-top: 30%;
  }
  /* background-color: #EFCE1E;
width: 100%;
margin-top: 10%;
height: 50vh; */
  .img-one {
    border-radius: 30px;

    transform: matrix(-1, 0, 0, 1, 0, 0);
  }
  h3 {
    width: 207px;
    height: 49px;

    margin-left: 1rem;

    font-style: normal;
    font-weight: 600;
    font-size: 36px;
    line-height: 49px;
  }
  p {
    font-style: normal;
    font-weight: 500;
    font-size: 17px;
    line-height: 30px;
    /* or 188% */

    color: rgba(8, 20, 41, 0.6);
  }
  .second-content {
    display: flex;
    flex-direction: row;
    justify-content: revert;
    /* margin-top: 50px; */
    /* margin-left: 2rem; */
  }
  .second-two {
    display: flex;
    /* margin-left: 2rem; */
    flex-direction: row;
    justify-content: revert;
  }
  .second-page {
    display: flex;
    flex-direction: column;
  }
  .img-page-one {
    height: 451px;
    background: #f6f6f5;
    border-radius: 20px;
  }
  .sectionTwo {
    background: #f6f6f5;
    border-radius: 20px;
  }

  .img-page-two {
    margin-left: 54px;
    margin-top: 20px;
  }
  .section-one {
    margin-left: 40px;
    width: 100%;
    padding-top: 37px;
  }
  .section-two {
    margin-left: 10rem;
    margin-top: 3rem;
  }
  .sectionTwo {
    margin-left: 2rem;
  }

  h1 {
    font-family: "General Sans";
    font-style: normal;
    font-weight: 600;
    font-size: 70px;
    line-height: 94px;
    /* identical to box height */

    text-align: center;

    color: #081429;
  }
  .second-page-h1 {
    margin-left: 0px;
  }
  .situtation {
    margin-top: 15px;
    font-size: 18px;
  }
  .whats-happening {
    margin-top: 31px;
    margin-left: 17px;
    font-size: 18px;
  }

  .Solution {
    margin-top: 19px;
    font-size: 33px;
  }
  .solution-header {
    padding-top: 5rem;
  }
  .solution-p-tag {
    margin-top: 34px;

    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 40px;
    /* or 188% */
  }
  .small-screen {
    display: none;
  }
  /* .................................media p tag  */
  @media (min-width: 250px) and (max-width: 530px) {
    .notview {
      display: none;
    }
    .small-screen {
      display: block;
    }
  }

  /* .......................... */

  .Hiring-qualified {
    font-size: 42px;
    font-weight: 500;
    width: 605px;
    margin-top: 2rem;
  }
  @media (min-width: 250px) and (max-width: 990px) {
    .Hiring-qualified {
      font-size: 22px;
      font-weight: 200;
      width: 324px;

      font-weight: 600;
      margin: 0 auto;
    }
    .second-content {
      margin-top: 2rem;
    }
    .d-flex {
      display: flex;
      justify-content: center;
    }
    .solution-p-tag {
      text-align: center;
    }
  }

  @media (min-width: 991px) and (max-width: 1200px) {
    .solution-p-tag {
      font-size: 14px;
      margin-top: 0px;
      line-height: 26px;
    }
  }

  @media (min-width: 991px) and (max-width: 1400px) {
    .Hiring-qualified {
      font-size: 31px;
      font-weight: 500;
      width: 460px;
      text-align: center;
    }
  }

  .Benefits {
    font-size: 35px;
    font-weight: 600;
  }
  .uper-under-line {
    width: 241px;
    height: 12px;
    margin-top: -32px;
    margin-left: 9rem;
    top: 2872px;
    text-align: center;
    color: #081429;
  }

  /* .......image...second---paGE................... */
  
  .content-onee {
    width: 634px;
    height: 500px;

    border-radius: 20px;
    background: #f6f6f5;
  }
  .content-two {
    margin-right: 2rem;
    padding-top: 15px;
  }
  /* ......................................next ::selection.................. */

  .second-code {
    border-radius: 30px;
    margin-top: 2rem;
  }
  /* ............................Hiring-Process.................................. */

  .Hiring-Process {
    width: 100%;

    /* height: 774px; */

    margin-top: 2rem;
    /* StaffQ_yellow/light */

    background: #fefbe9;
  }
  .hand-img {
    margin-top: 19px;

    width: 100%;

    border-radius: 30px;
  }
  @media (min-width: 250px) and (max-width: 768px) {
    .hand-img {
      width: 100%;
    }
  }
  /* @media (min-width:330px )and (max-width:500px){
    .hand-img{
  width: 100%;
  
}
} */
  @media (min-width: 769px) and (max-width: 1300px) {
    .hand-img {
      width: 100%;
    }
    .solution-header {
      padding-top: 0px;
    }
  }
  .p-tag-one {
    width: 664px;
    height: 354px;
    left: 230px;
    top: 1717px;

    font-family: "General Sans";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 30px;
    /* or 188% */

    color: rgba(8, 20, 41, 0.6);
  }
  input {
    height: 56px;
    width: 38vw;

    border-radius: 12px;
    margin-bottom: 20px;

    /* margin: 0 auto; */
    background: #ffffff;
    border: 1px solid rgba(8, 20, 41, 0.1);
    box-shadow: 0px 4px 16px rgba(8, 20, 41, 0.08);
    border-radius: 12px;
  }
  label {
    
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 22px;
    /* identical to box height */

    color: rgba(8, 20, 41, 0.8);
  }
  .form {
    display: flex;
    justify-content: space-evenly;
    margin-bottom: 12px;
  }
  .submited {
    padding: 12px 29px;
    gap: 10px;

    color: #f6f6f5;
    width: 113px;
    height: 46px;
    left: 1077px;
    top: 587px;

    background: #081429;
    border: 1px solid rgba(5, 31, 50, 0.2);
    box-shadow: 0px 4px 20px rgba(5, 31, 50, 0.14);
    border-radius: 12px;
    font-weight: 500;
    font-size: 16px;
    line-height: 22px;
    text-align: center;

    color: #ffffff;
  }
  .form-section {
    background: #f6f6f5;
    height: 562px;

    border-radius: 0px;
  }

  /* Form section mediq query: .;....................... */
  @media (min-width: 250px) and (max-width: 768px) {
    input {
      width: 80vw;
    }
  }
  @media (min-width: 769px) and (max-width: 1024px) {
    input {
      width: 59vw;
    }
  }

  /* ..............................next section bannner ,,,,,,,,,,,,,,,,, */
  .banner {
    /* StaffQ_yellow/StaffQ_Yellow main */

    background: #efce1e;
  }
  .balls {
    overflow: hidden;
  }
  .banner-img {
    width: 494px;
    height: 494px;
  }
  .mission {
    width: 100%;

    left: 1px;
  }
  .second-p-tag {
    font-weight: 500;
    font-size: 15px;
  }
  @media (min-width: 250px) and (max-width: 768px) {
    .null {
      display: none;
    }
  }
  .still-not-sure {
    font-family: "General Sans";
    font-style: normal;
    font-weight: 600;
    font-size: 44px;
    line-height: 81px;
    /* identical to box height */

    text-align: center;

    color: #081429;
  }
  .Our-team {
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 30px;
    /* or 150% */

    text-align: center;

    color: #081429;
  }
`;

// ...................worked...................
export const Header = styled.div`
  left: 0px;
  top: 98px;
  position: relative;

  background: #efce1e;
  .ball-image {
    width: 100%;
  }
  h1 {
    left: 170px;
    top: 282px;

    font-style: normal;
    font-weight: 600;
    font-size: 60px;
    line-height: 81px;
    /* identical to box height */

    color: #081429;
  }
  p {
    height: 170px;
    width: 578px;

    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 34px;
    /* or 170% */

    color: rgba(8, 20, 41, 0.6);
  }
  .ball-one-page {
    position: absolute;
    top: 10rem;
    margin-left: 20px;
  }
  .banner-image {
    width: 507px;
    margin-top: 37px;
    position: relative;
  }

  .little {
    position: absolute;
    top: 4rem;
    right: 11rem;
  }
  @media (min-width: 769px) and (max-width: 1300px) {
    display: none;
  }
  @media (min-width: 250px) and (max-width: 768px) {
    display: none;
    .header {
      text-align: center;
    }
    .ball-image {
      display: none;
    }
    .little {
      display: none;
    }
    h1 {
      font-size: 24px;
      width: 291px;
    }
    p {
      width: 358px;
      font-size: 16;
    }
    .banner-image {
      width: 100%;
      margin-top: 32rem;
    }
    .ball-one-page {
      text-align: center;
      top: 10rem;
    }
  }
  @media (min-width: 769px) and (max-width: 1300px) {
    .little {
      display: none;
    }
    .ball-image {
      display: none;
    }
    .banner-image {
      width: 100%;
      margin-top: 32rem;
    }
  }
`;

export const Image = styled.div`
  /* margin-top: 8%; */
  .one {
    position: absolute;
  }
  .under-pic {
    width: 71%;
    margin-left: 91px;
    margin-top: 5rem;
    position: absolute;
  }
  .two {
    bottom: 0rem;
    position: relative;
  }
  .three {
  }
  h6 {
    width: 113px;
    height: 54px;

    margin-top: 2rem;
    margin-left: 2rem;

    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 27px;
    text-align: center;

    color: #081429;
  }
  h5 {
    color: #081429;
    width: 113px;
    height: 54px;
    line-height: 27px;

    font-weight: 600;
    font-size: 20px;
    margin-left: 2rem;
  }
  .second-imgaes-content {
    bottom: 68px;
    position: relative;
  }
  .horizontal {
    width: 40px;
    margin-left: 1rem;
    margin-top: 2rem;
    height: 83px;
    -webkit-transform: rotate(88deg);
    -ms-transform: rotate(88deg);
    transform: rotate(88deg);
  }
  .uder-cover-img {
    position: relative;
    bottom: 45px;
  }
  .round-img {
    width: 167px;
    height: 163px;
  }
`;

export const SmallHeader = styled.div`
  background: #efce1e;
  /* margin-top: 12rem; */
  text-align: center;
  display: none;

  .banner-image {
    width: 100%;
  }
  @media (min-width: 250px) and (max-width: 768px) {
    display: block;
  }
  @media (min-width: 769px) and (max-width: 1300px) {
    display: block;
    .ball-sm-page {
      text-align: center;
    }
  }
`;
