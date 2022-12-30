/* ************************** Import Packages *************************** **/
import styled from "styled-components";

export const Foot = styled.div`
  background: #050c18;
.a-tag{
  text-decoration: none;
  font-size: 15px;
    font-weight: 400;
    color: rgba(255,255,255,0.8);
}
 
  @media (min-width: 1000px) and (max-width: 1200px) {
    .towers {
      margin-left: 33px;
    }
  }
  .under-line {
    border-bottom: 2px solid;
    padding: 0px;
    padding-left: 0px;
    padding-right: 0px;
  }

  h2 {
    color: white;
  }
  
  span {
    color: rgba(255, 255, 255, 0.8);
    font-weight: 400;
    font-size: 15px;
   
   
  }
  .p-tag{
    font-weight: 500;
    font-size: 24px;
    color: #FFFFFF;
  }
  span{
    cursor: pointer;
  }
  .last-line {
    font-size: 14px;
    line-height: 28px;
    /* identical to box height, or 200% */

    color: rgba(255, 255, 255, 0.6);
  }
  .footerlast {
    display: flex;
    justify-content: space-between;
  }
  .Foter {
    display: flex;
    flex-direction: row;
  }
  .terms {
    padding-right: 25px;
  }
  .logo-footer {
    width: 176px;
    cursor: pointer;
  }
  .infostaffq {
    padding-left: 20px;
    font-size: 15px;
  
  }
  .pdding-left {
    padding-left: 22px;
  }
  .infostaff {
    padding-left: 35px;
    font-size: 15px;
    font-weight: 400;
    color: rgba(255,255,255,0.8);
  }
  .footer-one {
    font-size: 0px;
    line-height: 22px;
    margin-top: 1rem;
  
    color: rgba(255, 255, 255, 0.8);
  }
  .footer-two {
    font-size: 2px;
    line-height: 30px;
    margin-top: 1rem;


    color: rgba(255, 255, 255, 0.8);
  }
  .footer-contactus {
    font-size: 18px;
    line-height: 22px;


    color: rgba(255, 255, 255, 0.8);
  }

  .foooter-other {
    padding-left: 68px;
   
  }

  @media (min-width: 250px) and (max-width: 768px) {
    display: none;

    padding: 12px;
    margin-top: 10%;
    .logo-footer {
      display: none;
    }
  }
`;
export const SmFoot = styled.div`
  display: none;
  @media (min-width: 250px) and (max-width: 768px) {
    /* .paddingtwoSide {
      padding-left: 25px;
    } */
    .font {
      color: rgba(255, 255, 255, 0.8);
    }
    .small-content {
      display: flex;
      justify-content: center;
    }
    .pdding-left {
      margin-left: 22px;
    }
    .pdding-lef {
      margin-left: 35px;
    }
    .last-line {
      font-size: 14px;
      line-height: 28px;
      /* identical to box height, or 200% */

      color: rgba(255, 255, 255, 0.6);
    }
    span {
      font-size: 18px;

      color: rgba(255, 255, 255, 0.8);
    }

    .head {
      font-weight: 600;
      font-size: 24px;
      line-height: 29px;
      /* identical to box height */

      color: #ffffff;
    }
    .under-text {
      border: 1px solid rgba(255, 255, 255, 0.1);
      margin-top: 55px;
    }
    .sm_conta {
      padding-top: 98px;
      font-size: 22px;
    }
    display: block;
    background: #050c18;
    color: white;
    /* padding-left: 40px; */
  }
  .justify-content-spacebetween {
    justify-content: space-around;
  }
`;
