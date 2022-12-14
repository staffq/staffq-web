  import styled from "styled-components";

export const ContacttStyle = styled.div`
  padding-top: 5px;

`;
// .................form..................................

export const Form = styled.div`
  padding-top: 1px;
  padding-bottom: 3rem;
  background: #f6f6f5;
  .input-filed {
    margin: 0 auto;
    border-radius: 12px;
    background: #ffffff;
    width: 100%;
    height: 56px;
    padding-left: 14px;
    margin-bottom: 20px;
    box-shadow: 0px 4px 16px rgba(8, 20, 41, 0.08);
    border: 1px solid rgba(8, 20, 41, 0.1);
  }
  .input-option {
    margin: 0 auto;
    border-radius: 12px;
    background: #ffffff;
    width: 100%;
    height: 56px;
    padding-left: 14px;
    margin-bottom: 20px;
    box-shadow: 0px 4px 16px rgba(8, 20, 41, 0.08);
    border: 1px solid rgba(8, 20, 41, 0.1);
  }
  .phone{
    border-radius: 12px;
    background: #ffffff;
    width: 100%;
    height: 56px;
    padding-left: 14px;
    margin-bottom: 20px;
    box-shadow: 0px 4px 16px rgba(8, 20, 41, 0.08);
    border: 1px solid rgba(8, 20, 41, 0.1);
  }
  input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
input[type=number] {
  -moz-appearance: textfield;
}
  @media (min-width: 250px) and (max-width: 768px) {
    .input-option {
      width: 100%;
    }
  }
  @media (min-width: 769px) and (max-width: 990px) {
    .input-option {
      width: 100%;
    }
  }
  label {
    margin-bottom: 12px;
    font-weight: 600;
  }
  .text {
    width: 100%;
    height: 154px;
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
justify-content: center;
color: #FFFFFF;
padding-top: 13px;

    border-radius: 12px;
    text-align: center;
    margin: 0 auto;
    margin-top: 22px;
    display: flex;
  }
  /* .button-submit {
    width: 87px;
    height: 22px;

    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    margin-top: 10px;
   

    color: #ffffff;
  } */
`;
export const Second = styled.div`
  margin-top: 76px;
  .lets-connect {
    font-weight: 600;
    font-size: 60px;
    line-height: 81px;

    color: #050c18;
  }
  .p-tag {
    font-weight: 500;
    font-size: 20px;
    line-height: 32px;

    color: rgba(8, 20, 41, 0.6);
  }
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
    background-image: url("assets/images/Bannerbackground.png");

    /* background: rgba(239, 206, 30, 0.9); */
  }
  h4 {
    font-weight: 600;
    font-size: 39px;
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
  .Our-Branches {
    padding-top: 6rem;
    text-align: center;
    margin-right: 2rem;
  }
  .roww{
    margin-bottom: 4rem;
  }
  .display {
    display: flex;
    flex-direction: row;
  }
  .display-two {
    display: flex;
    flex-direction: column;
    margin-top: 51px;
    margin-left: -10px;
  }
  .map-image {
    width: 125px;
    margin-top: 25px;
    margin-left: -2rem;
  }
  .style {
  }
  .font {
    font-size: 18px;
    font-weight: 400;
    line-height: 31px;
    color: rgba(5, 12, 24, 0.7);
  }
  h5 {
    font-size: 32px;
  }
  h6 {
    font-size: 24px;
  }
  .h-one{

    font-size: 32px;
line-height: 43px;

/* StaffQ_black */
font-weight: 500;
color: #050C18 !important;

  }
  .h-two{
    font-size: 24px;
line-height: 43px;

/* StaffQ_black */
font-weight: 400;
color: #050C18 !important;

  }
  .d-fleex {
    display: flex;
    justify-content: center;
    margin-right: 4rem;
  }
  .d-fx {
    display: flex;
    justify-content: center;
 
    /* margin-left: 5rem; */
  }
  .d-one {
    margin-left: 1rem;
  }
  .small{
    display: grid;
    margin-bottom: 3rem;
  }
  @media (min-width: 1200px) and (max-width: 1800px) {
    .pc-contact {
      margin-left: 186px;
      margin-right: 168px;
    }
  }

  @media (min-width: 990px) and (max-width: 1227px) {
   .contact-one{
    width: 50%;
    padding-left: 7rem;
   }
   .contact-two{
    width: 50%;
    padding-left: 6rem;
   }
  .contact-three{
    width: 50%;
    padding-left: 6rem;
  }
  }
  @media (min-width: 250px) and (max-width: 580px) {
    .map-image {
    width: 251px;
    margin-top: 25px;
    margin-left: 0;
  }
  .h-one{
      font-size: 41px;
    }
    .h-two{
      font-size: 30px;
      font-weight: 400;
    }
  }

  @media (min-width: 1000px) and (max-width: 1200px) {
    .h-one{
      font-size: 25px;
    }
   
   
  }
  @media (min-width: 1200px) and (max-width: 1500px) {
    .h-one{
      font-size: 25px;
    }
  }

  .small-contact {
    display: none;
  }
 
  @media (min-width: 250px) and (max-width: 580px) {
    .small-contact {
      display: inline-block;
    }
    .Our-Branches{
      font-size: 46px;
    }
    .pc-contact {
      display: none;
    }
  }
  @media (min-width: 1000px) and (max-width: 1200px) {
    .pc-contact {
      margin-left: 106px;
      margin-right: 108px;
    }
  }




  /* .pc-contact{
    @media (min-width:250px) and (max-width:600px){
  display: none;
}
  } */
`;
