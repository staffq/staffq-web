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
`;

// export const Navbar = styled.nav`
//   width: 100%;
//   padding-right: 0.75rem;
//   padding-left: 0.75rem;
//   margin-right: auto;
//   margin-left: auto;
//   .mobile-logo {
//     display: none;
//   }
//   .download-icon {
//     display: none;
//   }
//   @media (max-width: 783px) {
//     .desktop-logo {
//       display: none;
//     }

//     .mobile-width {
//       width: 20% !important;
//     }
//     .mobile-logo {
//       display: block;
//       width: 38%;
//       padding-top: 13px;
//       padding-left: 13px;
//     }
//   }
//   @media (max-width: 992px) {
//     .mobile-layout {
//       max-width: 100% !important;
//     }
//   }
//   @media (max-width: 736px) {
//     .download-icon {
//       display: block;
//       background-color: #7e0095;
//       color: white;
//       border-radius: 5px;
//     }
//     .download-svg {
//       width: 30px;
//       height: 30px;
//       padding-top: 5px;
//       padding-bottom: 5px;
//     }
//     Button {
//       display: none;
//     }
//   }
// `;
// export const NavContent = styled.div`
//   display: flex;
//   width: 75%;
//   @media (max-width: 783px) {
//     width: 80%;
//   }
// `;
// export const Ul = styled.ul`
//   color: black;
//   list-style: none;
//   padding: 0;
//   align-items: center;
//   display: flex;
//   margin-bottom: 0px;
//   width: 100%;
//   justify-content: end;
//   @media (max-width: 736px) {
//     justify-content: space-around;
//     /* font-size: 14px; */
//   }
// `;
// export const Li = styled.li`
//   padding-right: 4rem;
//   font-weight: 600;
//   &:nth-child(6) {
//     border-right: 1px solid #a49ea5;
//     padding-right: 2rem;
//   }
//   @media (max-width: 1400px) {
//     padding-right: 3rem;
//   }
//   @media (max-width: 1200px) {
//     padding-right: 1.5rem;
//   }
//   @media (max-width: 1183px) {
//     padding-right: 1.3rem;
//   }
//   @media (max-width: 1076px) {
//     padding-right: 1rem;
//   }
//   @media (max-width: 1023px) {
//     padding-right: 0.8rem;
//     font-size: 16px;
//   }

//   @media (max-width: 969px) {
//     padding-right: 1.5rem;
//   }
//   @media (max-width: 916px) {
//     padding-right: 1.2rem;
//   }
//   @media (max-width: 884px) {
//     padding-right: 1rem;
//   }
//   @media (max-width: 863px) {
//     padding-right: 1rem;
//     font-size: 14px;
//   }
//   @media (max-width: 736px) {
//     padding-right: 0.8rem;
//     /* font-size: 14px; */
//   }
// `;
//
// export const Div = styled.div`
//   padding-right: 15px;
//   color: black;
//   padding-left: 2rem;
//   display: flex;
//   align-items: center;
//   font-weight: 600;
//   font-size: 16px;
//   font-style: normal;
//   @media (max-width: 736px) {
//     /* padding-right: 0px; */
//     padding-left: 1rem;
//   }
// `;
// // export const ToggleMenu = styled.div`
// //   display: none;
// //   @media (max-width: 780px) {
// //     display: block;
// //   }
// // `;
