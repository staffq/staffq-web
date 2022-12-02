import styled from "styled-components";

export const Div = styled.div`
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
  .find-bottom {
    margin-bottom: 4rem;
  }
.nav-item{
 margin-right: 12px;
}
.nav{
  font-weight: 500;
  cursor: pointer;
  font-size: 14px;
}
  .one {
    padding-left: 17px;
  }
  .two {
    padding-left: 12px;
  }
  .frontent{
    font-weight: 600;
font-size: 28px;
line-height: 38px;
/* identical to box height */


color: #081429;

  }
p,li{
    font-weight: 500;
font-size: 16px;
line-height: 24px;

color: rgba(8, 20, 41, 0.8);
}
h6{
  
    padding-top: 2rem;
    font-size: 20px;
}
.technical{
  line-height: 24px;
}
.btnn {
    width: 174px;
    height: 62px;
    font-weight: 500;
    font-size: 22px;
    line-height: 30px;
    /* identical to box height */
margin-top: 3rem;
    color: #081429;
    background: #efce1e;
    box-shadow: 0px 4px 20px rgba(8, 20, 41, 0.08);
    border-radius: 16px;
  }

  @media(min-width:100px) and (max-width:800px){
    .small-btn{
      display: flex;
      justify-content: center;
    }
  }
`