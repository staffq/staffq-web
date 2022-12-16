import styled from "styled-components";

export const SlickBG = styled.div`
  background: #050c18;

  width: 100%;
  /* overflow: hidden; */
  /* height: 628px; */
  position: relative;


  padding: 0px !important;
  .Slider-phara {
    color: rgba(255, 255, 255, 0.6);

    font-weight: 500;
font-size: 16px;
line-height: 30px;
    margin-top: 19px;
  }
.what-people{
  font-weight: 600;
font-size: 36px;
line-height: 49px;
/* identical to box height */


color: #FFFFFF;
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
    font-weight: 500;
    -webkit-box-orient: vertical;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: normal;
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
  .one-jsx {
    /* margin-left: 137px; */
    padding: 41px;
    width: 90%!important;
  }
  .two-jsx {
    /* margin-left: 30px; */
    padding: 41px;
    width: 90%!important;
  }
  .three-jsx {
    margin-left: -77px;
    padding: 41px;
    
    width: 90%!important;
  }
  .four-jsx {
    margin-left: 0px;
    padding: 51px;
  }
  .communication{
    font-size: 17px;
    line-height: 19px;
    font-weight: 700;
    margin-top: 12px;
  }
  @media (min-width: 250px) and (max-width: 768px) {
  
   
  display: none;}
  @media (min-width: 769px) and (max-width: 990px) {
    .one-jsx {
    margin-left: 0 ;
    padding: 41px;
    width: 100%!important;
  }
  .two-jsx {
    margin-left: 0;
    padding: 41px;
    width: 100%!important;
  }
  .three-jsx {
    margin-left: 0;
    width: 100%!important;
    padding: 41px;
   
  }
  
   }
   @media (min-width: 990px) and (max-width: 1100px) {
    .one-jsx {
    margin-left: 0 ;
    padding: 41px;
    width: 98%!important;
  }
  .two-jsx {
    margin-left: 0;
    padding: 41px;
    width: 98%!important;
  }
   }
   @media (min-width: 1100px) and (max-width: 1400px) {
    .one-jsx {
    margin-left: 134px ;
    padding: 41px;
    width: 79%!important;
  }
  .two-jsx {
    margin-left: 0;
    padding: 41px;
    width: 79%!important;
  }
  .three-jsx {
    margin-left: 0;
    width: 100%!important;
    padding: 41px;
   
  }
  
   }
   @media (min-width: 1400px) and (max-width: 1600px) {
    .one-jsx {
    margin-left:16rem ;
    padding: 41px;
    width: 66%!important;
  }
  .two-jsx {
    margin-left: 0;
    padding: 41px;
    width: 66%!important;
  }
  .three-jsx {
    margin-left: 0;
    width: 66%!important;
    padding: 41px;
   
  }
  
   }

   @media (min-width: 990px) and (max-width: 19000px) {
    height: 30rem;
   }

`;
export const Box = styled.div`
  @media (min-width: 250px) and (max-width: 768px) {
    display: none;
  }
  @media (min-width: 769px) and (max-width: 1000px) {
    display: none;
  }
  .numbers{
    color: #081429;
    font-weight: 600;
  }
  position: relative;
  /* top: 480%; */
  z-index: 99;
  width: 100%;
  bottom: 69px;
  /* bottom: -230rem; */
  font-size: 24px;
  .border-img {
    display: flex;
    flex-direction: row;
  }
  .img-content {
    display: flex;
    flex-direction: column;
    /* margin-left: 80px;
     */
    margin: 0 auto;
  }

  @media (min-width: 250px) and (max-width: 768px) {
    margin-top: 120px;
    .small-slidder {
      display: flex;
      flex-direction: column;
    }
    .box {
      box-shadow: 0px;
      border-radius: 0px;
    }
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    .box {
      box-shadow: none;
      border-radius: 0px;
      background: none;
    }
  }
  .box {
    background: #ffffff;
    box-shadow: 0px 4px 20px rgb(8 20 41 / 12%);
    border-radius: 20px;
    text-align: center;
    margin-left: 3rem;
    margin-right: 3rem;
    background: #ffffff;
    box-shadow: 0px 4px 20px rgb(8 20 41 / 12%);
    border-radius: 20px;
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
  .onee {
    border: 1px solid gainsboro;
    border-top: none;
    border-bottom: navajowhite;
    border-left: none;
    margin-top: 10px;
  }



  @media (min-width: 768px) and (max-width: 990px) {}



`;
export const Smbox = styled.div`
  display: none;
  @media (min-width: 250px) and (max-width: 1000px) {
    display: block;
    margin-top: 5rem;
    .sm-boxscreen {
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
      align-items: center;
    }
    .sm-boxscreen-one {
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
      align-items: center;
    }
    .numbers{
    color: #081429;
    font-weight: 600;
  }
  }
`;
 export const Div = styled.div`
  display: none;
 @media (min-width: 250px) and (max-width: 768px) {
  
   
  display: block;}

  

 
 `