import styled from "styled-components";

export const Div = styled.div`
  padding-top: 5rem;
  /* .background {
    background-image: url("assets/images/Banner-find-box.jpg");
    width: 100%;
    background-position: center;
    background-repeat: no-repeat;
    padding-top: 19rem;
    position: relative;
    z-index: -99;

  } */

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
  .enter {
    font-weight: 500;
    font-size: 17px;
    padding-top: 12px;
    line-height: 27px;
    /* identical to box height */
  }

  label {
    margin-bottom: 12px;
    font-weight: 600;
  }
  h2 {
    font-weight: 600;
    font-size: 28px;
    line-height: 38px;
    /* identical to box height */

    color: #081429;
  }
  p {
    font-weight: 500;
    font-size: 20px;
    line-height: 27px;
    /* identical to box height */

    color: #081429;
  }
  .ul-method {
    display: inline-block;
    display: flex;
    padding-top: 1rem;
    padding: 0px;
  }
  .nav-item {
    /* padding-left: 20px; */
  }
  .one {
    padding-left: 17px;
  }
  .two {
    padding-left: 12px;
  }
  .attachement {
    font-size: 20px;
    line-height: 27px;
    /* identical to box height */

    color: #081429;
  }
  .updated {
    font-weight: 500;
    font-size: 16px;
    line-height: 22px;
    /* identical to box height */

    color: rgba(8, 20, 41, 0.8);
  }
  input {
    border: 0.5px solid rgba(0, 0, 0, 0.5);
    border-radius: 12px;
    background: #ffffff;
    height: 56px;
    /* z-index: -99; */
    margin-bottom: 20px;
    box-shadow: 0px 4px 16px rgba(8, 20, 41, 0.08);
    border: 1px solid rgba(8, 20, 41, 0.1);
  }
  span {
    border: 1px solid rgba(8, 20, 41, 0.1);
    border-radius: 0px 11px 11px 0px;
    height: 56px;
    background: linear-gradient(0deg, #050c18, #050c18),
      linear-gradient(0deg, rgba(8, 20, 41, 0.1), rgba(8, 20, 41, 0.1));
  }
  .btnn {
    width: 174px;
    height: 62px;
    font-weight: 500;
    font-size: 22px;
    line-height: 30px;
    /* identical to box height */

    color: #081429;
    background: #efce1e;
    box-shadow: 0px 4px 20px rgba(8, 20, 41, 0.08);
    border-radius: 16px;
  }
  .not-show {
    display: none;
  }
  @media (min-width: 150px) and (max-width: 990px) {
    .not-show {
      display: inline-flex;
    }
    .hiden {
      display: none;
    }
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
  /* @media (min-width: 200px) and (max-width: 769px) {
    .sm-upload {
   
      display: flex;
    justify-content: center;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: center;
    }
    .nav{
      margin: 0 auto;
      font-size: 21px;
    }
  } */
  
`;
