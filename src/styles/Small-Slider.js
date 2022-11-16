import styled from "styled-components";

export const Small = styled.div`
  background: #050c18;

  width: 100%;
  overflow: hidden;

  
  position: relative;
  margin-top: 2rem;

  padding: 0px !important;
  .Slider-phara {
    color: #ffffff99;
    line-height: 30px;
    margin-top: 19px;
  }

  .SliderHead div ul .slick-active button {
    background: rgba(255, 255, 255, 0.4);
    width: 35px;
    border-radius: 7px;
    height: 0px;
    line-height: 10px;
  }
  .SliderHead div ul li {
    background: rgba(255, 255, 255, 0.4);
    width: 40px;
    border-radius: 7px;
    height: 0px;
    line-height: 10px;
  }
  .SliderHead div ul {
    margin-bottom: 10px;
  }
  .SliderHead div ul .slick-active button::before {
    position: absolute;
    animation: linear forwards alternate;
    animation-name: run;
    animation-delay: 2s;
    animation-duration: 3500ms;
  }
  @keyframes run {
    0% {
      width: 0px;
      color: rgb(255, 255, 255);
    }
    100% {
      width: 57px;
      color: rgb(255, 255, 255);
      webkit-transform: scaleX(-1);
    }
  }
  .card-text {
    margin-top: 19px;
    color: black;
    font-size: 16px;
  }
  .card {
    background: #ffffff;
    border-radius: 20px;
  }
  .one {
    display: flex;
    flex-direction: row;
    color: #050c18;
  }
  .two {
    display: flex;
    padding-left: 12px;
    flex-direction: column;
  }
  .slick-dots li button:before {
    font-size: 10px;
    line-height: 13px;
    width: 10px;
    height: 10px;
    color: rgb(255, 255, 255);
  }
  .onee-small-jsx{
  width: 88%;
  margin-top: 41px;

  }
  .two-jsx {
    margin-left: 5px;
    padding: 41px;
  }
  .threee-small-jsx {
   
    padding: 41px;
  }
  .four-jsx {
    margin-left: 0px;
    padding: 51px;
  }
  .slider-one{
display: flex;
justify-content: center;
flex-direction: column;
  }

`;