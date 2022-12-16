// /* ************************** Import Packages *************************** **/
import styled from "styled-components";

export const Div = styled.div`
  p {
    font-size: 16px;
    font-weight: 600;
  }
  .navbar .collapse {
    justify-content: space-between;
    z-index: 999;
  }
  .nav-item {
    padding-right: 30px;
  }
  .navbar {
    padding-left: 52px;
    padding-right: 96px;
    margin-bottom: 20px;
    z-index: 100;
    border-bottom: 1px solid rgba(8, 20, 41, 0.1);
  }

  .cardd {
  top: 81px;
    z-index: 999;
    position: absolute;
  }

  .card {
    /* padding-top: 2rem; */
    width: 300px;
    padding: 19px;
    
    border-radius: 17px;
  }
  .cursor{
    cursor: pointer;
  color: #08142999;
  font-size: 16px;
  font-weight: 500;
 
  

  }
  .popup {
   
  }
 
  @media (min-width: 250px) and (max-width: 990px) {
    .navbar {
      margin-top: 2rem;
      display: none;
    }
  }
  .ul {
    padding-right: 75px;
  }
  .nav-link {
    padding-top: 0px;
    padding-bottom: 0px;
  }
  .navbar-nav {
    display: flex;
    align-items: center;
    padding-left: 70px;
  }
  .navbar-brand {
    padding-left: 60px;
  }
  .nav-item:nth-child(6) {
    padding-right: 20px;
    border-right: 1px solid #a49ea5;
  }
  @media (min-width: 990px) and (max-width: 1030px) {
    .navbar .collapse {
      justify-content: space-around;
      z-index: 999;
    }
    .navbar-brand {
      padding-left: 0px;
    }
    .navbar {
      top: 0;
      position: fixed;
    }
  }
  @media (min-width: 990px) and (max-width: 1080px) {
    .navbar-nav {
      padding-right: 4rem;
    }
  }
`;
export const Img = styled.div`
  padding-left: 79px;
`;
export const Button = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 16px;
  width: 135px;
  height: 40px;
  background: #7e0095;
  border-radius: 16px;
  border: none;
  color: #ffffff;
  font-weight: 600;
`;
export const Hover = styled.a`
  position: relative;
  color: #473b4a !important;
  font-size: 16px;
  text-decoration: none;
  font-weight: 400;
  cursor: pointer;
  &:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: black;
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
    transform: scaleX(0);
  }
  &:hover:after {
    transform-origin: bottom left;
    transform: scaleX(1);
  }
`;
export const Small = styled.div`
  .sm-header {
    display: none;
  }
  .navbar-nav {
    background-color: white;
    padding-left: 2rem;
    font-size: 21px;
    font-weight: 700;
    margin-top: 5rem;
  }
  @media (min-width: 250px) and (max-width: 990px) {
    .sm-header {
      display: block;
      z-index: 1;
    }
    .navbar {
      border-bottom: 2px solid rgba(8, 20, 41, 0.1);
      width: 100%;
      position: fixed;
      top: 0 !important;
      display: flex;
      justify-content: space-around;
    }
  }
`;
