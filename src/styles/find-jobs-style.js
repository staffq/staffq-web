import styled from "styled-components";

export const Findjobs = styled.div`
  background: #efce1e;
  border-radius: 30px;

  @media (min-width: 250px) and (max-width: 990px) {
    display: none;
  }
  /* @media (min-width:769px) and (max-width:1200px){
    display: none;
} */
  @media (min-width: 1200px) and (max-width: 1400px) {
    .FindText {
      margin: 1rem;
    }
    .find-images-class {
      margin-top: 1rem;
    }
  }
  @media (min-width: 990px) and (max-width: 1200px) {
    .FindText {
      margin: 1rem;
    }
    .find-images-class {
      width: 565px;
    }
    .find-p-tag {
      font-weight: 500;
      font-size: 14px;
    }
  }

  .FindText {
    margin-top: 5%;
  }
  .h2 {
    color: white;
  }

  .Directbox {
    width: 19%;
  }
  .box {
    background: #ffffff;
    box-shadow: 0px 4px 20px rgba(8, 20, 41, 0.12);
    border-radius: 20px;
    text-align: center;
  }
  .landing {
    width: 10px;
    height: 44px;
  }
  .one {
    border: 1px solid gainsboro;
    border-top: none;
    border-bottom: navajowhite;
    border-right: navajowhite;
    margin-top: 10px;
  }

  .arow {
    width: 152px;
    height: 134px;
    padding: 1px;
    margin-left: -53px;
    margin-top: 177px;
  }
  p {
    font-weight: 500;
  }

  @media (min-width: 1000px) and (max-width: 1200px) {
    .arow {
      display: none;
    }
  }
  @media (min-width: 1000px) and (max-width: 1400px) {
  }

  .find-images-className {
    width: 708px;
    height: 414px;

    margin-left: -64px;
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
  .enough-talk {
    font-weight: 600;
    font-size: 33px;
    line-height: 49px;
  }
  .find-p-tag {
    font-size: 16px;
    line-height: 30px;
    /* or 188% */
  }

  /* .image-left{
   margin-top: 37px;
} */
`;

// ................................small screen...............................

export const SmallFind = styled.div`
  background: #efce1e;

  width: 100%;
  display: none;
  margin-top: 2%;

  @media (min-width: 250px) and (max-width: 990px) {
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
  @media (min-width: 769px) and (max-width: 900px) {
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
