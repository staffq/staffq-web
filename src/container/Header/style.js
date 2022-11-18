// /* ************************** Import Packages *************************** **/
import styled from "styled-components";

export const Div = styled.div`
  p {
    font-size: 16px;
    font-weight: bold;
  }
  .navbar .collapse {
    justify-content: space-between;
    z-index: 999;
  }
  .nav-item {
    padding-right: 30px;
  }
  .navbar {
    padding-left: 50px;
    padding-right: 50px;
    margin-bottom: 20px;
    z-index: 100;
    border-bottom: 1px solid rgba(8, 20, 41, 0.1);
  }
  @media (min-width: 250px) and (max-width: 990px) {
    .navbar{
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
  @media (min-width: 1000px) and (max-width: 1030px) {
    .navbar .collapse {
      justify-content: space-around;
      z-index: 999;
    }
    .navbar-brand {
      padding-left: 0px;
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
`
export const  Small = styled.div`
  .sm-header{
    display: none;
  }
  @media(min-width:250px) and (max-width:990px){
    .sm-header{
      display: block;
      
    }
    .navbar {
      border-bottom: 2px solid rgba(8, 20, 41, 0.1);
      width: 100%;
      display: flex;
      justify-content: space-around;
    }
  }
`;



