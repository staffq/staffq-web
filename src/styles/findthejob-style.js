import styled from "styled-components";
export const Find = styled.div`
  padding-top: 5rem;
  .background {
    position: relative;
    z-index: -99;
  }
  h1 {
    text-align: center;
    /* padding-top: 5rem; */
    position: absolute;
    font-style: normal;
    /* position: relative; */
    bottom: 3rem;
    font-weight: 600;
    font-size: 60px;
    line-height: 81px;

    color: #ffffff;
  }

  .find-text {
    display: flex;
    justify-content: center;
  }
  @media (min-width: 1200px) and (max-width: 13000px) {
    h1 {
      position: absolute;
      font-style: normal;

      bottom: 2rem;
    }
  }
  @media (min-width: 900px) and (max-width: 1200px) {
    h1 {
      position: absolute;
      font-style: normal;

      bottom: 0;
    }
  }

  @media (min-width: 750px) and (max-width: 900px) {
    h1 {
      font-size: 49px !important;

      bottom: -17px;
    }
  }
  @media (min-width: 550px) and (max-width: 750px) {
    h1 {
      font-size: 35px !important;
      line-height: 49px !important;
      bottom: -2px;
    }
  }
  @media (min-width: 400px) and (max-width: 550px) {
    h1 {
      font-size: 31px !important;
      line-height: 40px !important;
      bottom: -9px;
    }
  }
  @media (min-width: 200px) and (max-width: 400px) {
    h1 {
      font-size: 24px !important;
      line-height: 32px !important;
      bottom: -10px;
    }
  }
  .Findbg {
    background-image: url("assets/images/find.svg");
    background-repeat: no-repeat;
    background-position: center;

    height: 300px;
    left: 0px;
    top: 98px;

    background: rgba(8, 20, 41, 0.6);
    backdrop-filter: blur(1px);
  }
  .sri {
    background-color: skyblue;
  }

  .nav {
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
  }
  .nav-item {
    margin-left: 12px;
  }
  .p-tag {
    font-size: 15px;
  }
  .input-option {
    margin: 0 auto;
    border-radius: 12px;
    background: #ffffff;
    width: 100%;
    height: 56px;
    font-size: 16px;
    font-weight: 400;
    margin-bottom: 20px;
    box-shadow: 0px 4px 16px rgba(8, 20, 41, 0.08);
    border: 1px solid rgba(8, 20, 41, 0.1);
  }
  .showing-results {
    display: flex;
    padding-top: 1rem;
    justify-content: space-between;
  }
  .bg-colour {
    background: #fafdff;
    padding-bottom: 3rem;
  }
  input {
    font-weight: 400;
    font-size: 16px;
    line-height: 27px;
    /* identical to box height */

    /* StaffQ_Grey/Focused */

    color: #9b9ea3;
  }
  .showing {
    font-weight: 500;
    font-size: 20px;
    line-height: 27px;
    /* identical to box height */

    color: rgba(8, 20, 41, 0.4);
  }
  span {
    color: #081429;
    font-weight: 500;
  }
  :-moz-placeholder {
    text-align: center;
  }
  .location {
    background: #ffffff;
    /* StaffQ_Grey/border */

    border: 1px solid #cdced1;
    box-shadow: 0px 4px 20px rgba(8, 20, 41, 0.04);
    border-radius: 10px;
    height: 48px;
    font-size: 16px;
    width: 293px;
    font-weight: 400;
    left: 0px;
    top: 0px;
    border-radius: 10px;
  }
  @media (min-width: 100px) and (max-width: 768px) {
    .showing-results {
      display: flex;
      flex-direction: column;
    }
  }
  .btnnn {
    width: 136px;
    height: 62px;
    font-weight: 500;
    padding-top: 12px;
    font-size: 22px;
    line-height: 30px;
    /* identical to box height */

    color: #081429;
    background: #efce1e;
    box-shadow: 0px 4px 20px rgba(8, 20, 41, 0.08);
    border-radius: 16px;
  }
  .Card {
    /* height: 335px; */
    /* width: 329px; */

    border-radius: 16px;

    border: 1px solid rgba(8, 20, 41, 0.2);
    border-radius: 16px;
  }
  .Display {
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
  }

  .cart-text {
    font-weight: 500;
    font-size: 16px;
    line-height: 22px;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
    color: rgba(8, 20, 41, 0.5);
  }
  .design {
    font-style: normal;
    font-weight: 600;
    font-size: 26px;
    line-height: 35px;
    max-width: 14rem;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    /* identical to box height */

    color: #081429;
    /* identical to box height */
  }
  .fulltime {
    width: 70px;
    height: 27px;

    background: #efce1e;
    border: 1px solid rgba(8, 20, 41, 0.1);
    border-radius: 6px;

    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 19px;
    /* identical to box height */

    color: #081429;
  }
  .remote {
    background: rgba(8, 20, 41, 0.03);
    border: 1px solid rgba(8, 20, 41, 0.1);
    border-radius: 6px;

    font-style: normal;
    font-weight: 400;
    font-size: 13px;

    height: 27px;
    line-height: 19px;
    margin-left: 12px;
    width: 70px;
  }

  .btnone {
    background: #050c18;
    border-radius: 12px;
    width: 100%;
    height: 54px;

    font-size: 16px;
    line-height: 22px;

    font-style: normal;

    margin-bottom: 10px;
    color: #ffffff;

    /* }.btn{
    width: 54px;
height: 19px;
left: 194px;
top: 742px;

font-family: 'General Sans';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 19px; */
    /* identical to box height */
  }
  .btnone:hover {
    background: #efce1e;
   border: none;
  }
  .btnn {
    padding-left: 5px;
    margin-top: 12px;
    font-weight: 500;
    font-size: 16px;
    line-height: 22px;
    /* identical to box height */

    color: #081429;
  }
  @media (min-width: 990px) and (max-width: 1200px) {
    .btnn {
      font-size: 13px;
    }
  }
  .perivious {
    background: #ffffff;
    border: 1px solid rgba(8, 20, 41, 0.1);
    box-shadow: 0px 4px 20px rgba(8, 20, 41, 0.04);
    border-radius: 8px;
    font-weight: 500;
    font-size: 16px;
    line-height: 22px;
    /* identical to box height */

    color: #081429;
  }
  .second-button {
    margin-left: 10px;
  }
  .next-button {
    padding-top: 2rem;
  }
  .bg-one {
    background: #efce1e;
    width: 100%;
  }
  .upload {
    width: 138px;
    height: 48px;

    color: white;
    background: #081429;
    border: 1px solid rgba(5, 31, 50, 0.2);
    box-shadow: 0px 4px 20px rgba(5, 31, 50, 0.14);
    border-radius: 14px;
    overflow: hidden;
  }
  .upload-button {
    font-weight: 500;
    font-size: 16px;
    line-height: 22px;

    margin-left: 8px;
    text-align: right;

    color: #ffffff;
  }
  .upload-p-tag {
    font-weight: 500;
    font-size: 16px;
    line-height: 30px;
    /* or 188% */

    color: #ffffff;
  }
  .arow {
    width: 149px;
    height: 118px;
    padding: 4px;
    margin-left: -74px;
    margin-top: 87px;
  }

  @media (min-width: 10px) and (max-width: 1000px) {
    .bg-one {
      display: none;
    }
  }
  .second-col {
    display: flex;
    align-items: center;
    justify-content: center;
    line-height: 49px;

    color: #ffffff;
  }
  .third-col {
    display: flex;
    align-items: center;
  }
  .find-crt {
    font-weight: 600;
    font-size: 36px;

    color: #ffffff;
  }

  .small-screen{
    display: none;
  }
  @media (min-width: 100px) and (max-width: 1000px) {
    .small-screen {
   display: block;
   padding-bottom: 2rem;
    }
    .location{
      width: 100%;
    }
    .lg-desktop{
      display: none;
    }
  }

  @media (min-width: 1200px) and (max-width: 13000px) {}
`;
export const SmallFind = styled.div`
  background: #efce1e;

  width: 100%;
  display: none;
  margin-top: 2%;

  @media (min-width: 250px) and (max-width: 1000px) {
    display: block;
    background: #efce1e;
    h2 {
      font-weight: 600;
      font-size: 34px;
      line-height: 46px;

      color: #ffffff;
    }
    p {
      font-weight: 500;
      font-size: 16px;
      line-height: 30px;
      /* or 188% */

      color: #ffffff;
    }
    .upload {
      width: 138px;
      height: 48px;

      color: white;
      background: #081429;
      border: 1px solid rgba(5, 31, 50, 0.2);
      box-shadow: 0px 4px 20px rgba(5, 31, 50, 0.14);
      border-radius: 14px;
      overflow: hidden;
    }
    .Directbox {
      margin-top: 12px;
      margin-left: 12px;
    }
    .upload-button {
      font-weight: 500;
      font-size: 16px;
      line-height: 22px;

      margin-left: 17px;
      text-align: center;
      margin-top: 12px;

      color: #ffffff;
    }
    .Smallsctext {
      text-align: center;
    }
    .Smallbox {
      margin: 0 auto;
      display: flex;
    }

    .find-images {
      margin-top: 50px;
    }
  }
  @media (min-width: 769px) and (max-width: 1000px) {
    display: block;
    background: #efce1e;

    width: 100%;

    margin-top: 2%;
    .upload {
      width: 138px;
      height: 48px;

      color: white;
      background: #081429;
      border: 1px solid rgba(5, 31, 50, 0.2);
      box-shadow: 0px 4px 20px rgba(5, 31, 50, 0.14);
      border-radius: 14px;
      overflow: hidden;
    }
    .upload-button {
      font-weight: 500;
      font-size: 16px;
      line-height: 22px;

      margin-left: 8px;
      text-align: right;
      margin-top: 12px;
      color: #ffffff;
    }

    h2 {
      font-weight: 600;
      font-size: 34px;
      line-height: 46px;

      color: #ffffff;
    }
    p {
      font-weight: 500;
      font-size: 16px;
      line-height: 30px;
      /* or 188% */

      color: #ffffff;
    }

    .Smallsctext {
      text-align: center;
    }
    .Smallbox {
      margin: 0 auto;
      display: flex;
    }
    .Directbox {
      margin-top: 12px;
      margin-left: 12px;
    }
    .find-images {
      margin-top: 50px;
    }
  }
  @media (min-width: 500px) and (max-width: 560px) {
    /* .Smallbox{
        margin-left: 190px;
    } */
  }
  @media (min-width: 600px) and (max-width: 924px) {
    .top {
      margin-left: 4rem;
    }

    /* .Smallsctext{
        margin-left: 4rem;
    }
    .find-images{
margin-left: 3rem;
    } */

    .findsm-text {
      width: 100%;
    }
  }
  @media (min-width: 925px) and (max-width: 1100px) {
    .top {
      margin-left: 7rem;
    }
  }

  @media (min-width: 1000px) and (max-width: 1024px) {
    /* .Smallbox{
        margin-left: 390px;}
    }} */
  }
`;
