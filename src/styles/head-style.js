import styled from "styled-components";
export const Header = styled.div`
  width: 100%;

  top: 98px;
  position: relative;

  background: #efce1e;
  .ball-image {
    width: 500px;
    margin-top: 40px;
  }
  h2 {
    font-family: General Sans;
    font-size: 60px;
    font-weight: 600;
    line-height: 81px;
    letter-spacing: 0em;
    text-align: left;
    font-family: "General Sans";
    font-style: normal;
    font-weight: 600;
    font-size: 30px;

    /* identical to box height */

    color: #081429;
  }
  p {
    height: 170px;
    width: 638px;
    left: 170px;

    border-radius: nullpx;

    font-family: "General Sans";
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 34px;
    /* or 170% */

    color: rgba(8, 20, 41, 0.6);
  }
  .ball-one-page {
    position: absolute;
    top: 5rem;
  }
  .banner-image {
    width: 507px;
    margin-top: 37px;
  }
`;
export const Second = styled.div`
  margin-top: 20%;
  .bottom {
    border-bottom: 2px solid black;
    position: relative;
    top: 0;
    width: 70rem;
  }
  .display-flex {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    position: relative;
    z-index: 999;
    bottom: 96px;
  }
  .let-one {
    width: 100%;

    top: 98px;
    overflow: hidden;

    background: rgba(239, 206, 30, 0.9);
  }
  h4 {
    font-weight: 600;
    font-size: 50px;
    line-height: 81px;
    /* identical to box height */

    text-align: center;

    /* StaffQ_black */

    color: #050c18;
  }
  p {
    font-weight: 600;

    /* identical to box height */

    text-align: center;

    /* StaffQ_black */

    color: #050c18;
  }
  .our-branches {
    font-style: normal;
    font-weight: 600;
    font-size: 36px;
    line-height: 49px;
    /* identical to box height */

    text-align: center;

    color: #081429;
  }
  .display {
    display: flex;
    flex-direction: row;
  }
  .display-two {
    display: flex;
    flex-direction: column;
    margin-top: 51px;
  }
  .map-image{
    width: 125px;
    margin-top: 25px;
  }
  .style {
  }
`;

// ..........................................SecondCard.................................


// .................form..................................

export const Form = styled.div`
  .input-filed {
    height: 56px;
    width: 546px;

    border-radius: 12px;

    margin: 0 auto;
    background: #ffffff;
    border: 1px solid rgba(8, 20, 41, 0.1);
    box-shadow: 0px 4px 16px rgba(8, 20, 41, 0.08);
    border-radius: 12px;
    margin-bottom: 20px;
  }
  label {
    margin-bottom: 12px;
  }
  .text {
    width: 1111px;
    height: 154px;;
    left: 300px;
    top: 928px;

    background: #ffffff;
    /* StaffQ_Grey/border */

    border: 1px solid #cdced1;
    box-shadow: 0px 4px 16px rgba(8, 20, 41, 0.08);
    border-radius: 12px;
  }
  .submit-btn {
    background: #081429;

    box-shadow: 0px 4px 20px rgba(5, 31, 50, 0.14);

    width: 300px;
    height: 56px;

    border-radius: 12px;
    text-align: center;
    margin: 0 auto;
    margin-top: 22px;
    display: flex;
  }
  .button-submit{
    width: 55px;
height: 22px;

font-family: 'General Sans';
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 22px;
margin-top: 10px;
padding-left: 7rem;



color: #FFFFFF;

  }
`;
