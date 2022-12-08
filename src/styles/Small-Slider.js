import styled from "styled-components";

export const Small = styled.div`
  background: #050c18;

  width: 100%;
  overflow: hidden;
/* height: 71rem; */
  
  position: relative;


  padding: 0px !important;
  .Slider-phara {
    
    color: rgba(255, 255, 255, 0.6);

font-weight: 500;
font-size: 16px;
    line-height: 30px;
    margin-top: 19px;
  }
  .communication{
    font-size: 19px;
line-height: 19px;
/* identical to box height */
font-weight: 500;

/* color: rgba(8, 20, 41, 0.6);} */}

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
  .what-people{
  font-weight: 600;
font-size: 36px;
line-height: 49px;
/* identical to box height */


color: #FFFFFF;
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
    font-weight: 500;
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
    justify-content: center;
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
  display: block !important;
  margin-top: 41px;

  }
  .two-jsx {
    margin-left: 5px;
    width: 88%;
    padding: 41px;
    display: block !important;
  }
  .threee-small-jsx {
    width: 88%;
    padding: 41px;
    display: block !important;
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
@media (min-width:500px) and (max-width:768px){
  .onee-small-jsx{
  width: 73% !important;

  }
  .two-jsx {
    width: 81% !important;
  }
  .threee-small-jsx {
    width: 81% !important;
  }
}
`;