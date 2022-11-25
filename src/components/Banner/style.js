// /* ************************** Import Packages *************************** **/
import styled from "styled-components";

export const H1 = styled.h1`
  font-weight: bold;

  font-style: normal;
  font-size: 64px;
  line-height: 79px;

  color: #081429;

  @media (min-width: 250px) and (max-width: 768px) {
    font-size: 32px;
    line-height: 42px;
    text-align: center;
    font-weight: bold;
    justify-content: center;
    align-items: center;
  }
`;

export const Button = styled.button`
 background-color:black;
padding:.5em 1em;
color:white;
position:relative;
overflow:hidden;
 &:hover{
  width: 130px;
  transition-delay: .5s;
  transition:width .5s ease-in-out;
 }
  &:after{
    content:'►';
  font-size:10px;
  color:white;
  position:absolute;
  top: 1.5em;
    /* width: 239px; */
    left: 11em;
  opacity:0;
  transition:all .5s ease-in-out;
  }
  &:hover:after {
    right:1em;
opacity:1;
}
  .hello {
    margin-left: 10px;
    display: none;
    width: 73px;
  }

  .hover-arrow {
    display: none;
  }

  @media (min-width: 250px) and (max-width: 768px) {
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-left: 136px;
  }
`;

export const Icons = styled.i`
  color: white;
  font-size: 30px;
`;
export const Background = styled.div`
  @media (min-width: 250px) and (max-width: 768px) {
    width: 100%;
  }
`;

export const Image = styled.img`
  @media (min-width: 250px) and (max-width: 768px) {
    margin-top: 77%;
    width: 100%;
  }
  @media (min-width: 769px) and (max-width: 1024px) {
    margin-top: 120%;
  }
  @media (min-width: 769px) and (max-width: 1024px) {
    margin-top: 53%;
  }
`;
export const BannerText = styled.div`
  position: absolute;
  /* width: 890px; */
  height: 190px;

  top: 147px;
  z-index: 99;
  padding-left: 130px;

  button {
  font-family: 'Raleway', sans-serif;
  font-size: 15px;
  line-height: 22.6px;
  background-color: transparent;
  padding: 16px 32px 16px 40px;
  cursor: pointer;
  font-size: 16px;
line-height: 32px;
background-color: white;

color:white;
}

.btn-black {
  background: #050C18;
border-radius: 16px;
}

.btn-grey {
  border: 4px solid #45423C;
  color: #45423C;
  background-color: white;
}

.arrow {
  height: 2px;
  width: 0px;
  position: relative;
  display: inline-block;
  cursor: pointer;
  background-color: white;
  color: white;
  margin-right: 15px;
  margin-bottom: 4px;
  transition: all .4s ease;
}

button:hover .arrow {
  width: 35px;
  margin-right: 5px;
}

.arrow-black {
  /* background: black; */
}

.arrow-grey {
  background: white;
}

.arrow:before,
.arrow:after {
  content: "";
  background: white;
  position: absolute;
  height: 2px;
  width: 10px;
  border-radius: 30%;
}

.arrow:before {
  right: -2px;
  bottom: -3px;
  transform: rotate(-45deg);
}

.arrow:after {
  right: -2px;
  top: -3px;
  transform: rotate(45deg);
}

  @media (min-width: 250px) and (max-width: 768px) {
    width: 100%;
    top: 67px;
    font-size: 10px;
    padding-left: 10px;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    text-align: center;
    justify-content: center;
    align-items: center;
    padding: 0px;
  }
`;
export const P = styled.p`
  font-size: 20px;
  font-weight: bottom;
  font-weight: 400;
  line-height: 34px;
  letter-spacing: 0em;
  margin-top: 35px;

  @media (min-width: 250px) and (max-width: 768px) {
    font-size: 15px;
    line-height: 32px;
    text-align: center;
    font-weight: 600;
  }
  @media (min-width: 769px) and (max-width: 1024px) {
    text-align: center;
    justify-content: center;
    align-items: center;
  }
`;
export const BannerPage = styled.div`
  @media (min-width: 769px) and (max-width: 1024px) {
    display: none;
  }

  @media (min-width: 250px) and (max-width: 768px) {
    display: none;
  }
  @media (min-width: 1025px) and (max-width: 1490px) {
    display: none;
  }
`;

export const Smbanner = styled.div`
  display: none;
  @media (min-width: 769px) and (max-width: 1024px) {
    display: block;
    .smimages {
      width: 100%;
      margin-top: 20px;
    }
    .btn-small {
      background: #081429;
      height: 46px;
      width: 149px;
      left: 113px;
      top: 370px;
      border-radius: 16px;
      color: #ffffff;
      margin-top: 1rem;
    }
    .smText {
      margin-top: 10%;
      text-align: center;
    }
    p {
      font-weight: 500;
      font-size: 16px;
      line-height: 22px;

      color: rgba(8, 20, 41, 0.6);
      margin-top: 30px;
    }
  }
  @media (min-width: 250px) and (max-width: 768px) {
    display: block;
    .smimages {
      width: 100%;
      margin-top: 12px;
    }
    h1 {
      font-style: normal;
      font-weight: 700;
      font-size: 34px;
      line-height: 46px;

      color: #081429;
    }
    p {
      font-weight: 500;
      font-size: 16px;
      line-height: 22px;

      color: rgba(8, 20, 41, 0.6);
      margin-top: 30px;
    }
    .smText {
      margin-top: 23%;
      text-align: center;
    }
    .btn-small {
      background: #081429;
      height: 46px;
      width: 149px;
      left: 113px;
      top: 370px;
      border-radius: 16px;
      color: #ffffff;
      margin-top: 12px;
    }
  }
`;

export const Medium = styled.div`
  display: none;
  .btn-medium {
    font-size: 24px;
    height: 80px;

    padding: 5px 30px;

    color: white;
    border-radius: 16px;

    /*
  
}
  } */

    /* StaffQ_black */

    background: #050c18;
    border-radius: 16px;
  }
  .smText {
    padding-left: 132px;
    margin-top: 7rem;
  }
  h1 {
    font-style: normal;
    font-weight: 700;
    font-size: 44px;
    line-height: 66px;
    color: #050c18;
  }
  p {
    font-weight: 500;
    font-size: 16px;
    line-height: 22px;

    color: rgba(8, 20, 41, 0.6);
    margin-top: 30px;
  }
  @media (min-width: 1025px) and (max-width: 1150px) {
 p{
  font-size: 15px;
 }
 .smText {
    padding-left: 112px;
    margin-top: 5rem;
  }
  }
  @media (min-width: 1025px) and (max-width: 1490px) {
    display: block;
  }
`;
