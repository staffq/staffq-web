import styled from "styled-components";

export const AboutBg = styled.div`
  .about-p-tag {
    font-weight: 400;
  }

  @media (min-width: 250px) and (max-width: 400px) {
  }

  @media (min-width: 769px) and (max-width: 1200px) {
    display: none;
  }
  background: #fefbe9;
  width: 100%;
  /* height: 39rem; */
  margin-top: 10%;
  padding-top: 2rem;

  padding: 0px !important;
  .About-section {
    text-align: center;
    padding-top: 29px;
  }
  .aboutbtn {
    width: 158px;
    height: 62px;
    color: white;
    font-size: 18px;
    font-weight: 600;
    margin-top: 10px;

    background: #081429;
    border-radius: 16px;
  }
  .about {
    font-weight: 600;
  }
  @media (min-width: 300px) and (max-width: 768px) {
    /* height: 250vh; */
    .aboutImage {
    }
    .aboutbtn {
      margin: 0 auto;
      display: flex;
      text-align: center;
      margin-top: 2rem;
      /* margin-left: 98px; */
    }
    .about {
      margin-top: 10px;
      margin-left: 40px;
      font-size: 19px;
      font-weight: 600;
    }

    background: #fefbe9;
    width: 100%;

    justify-content: center;
    align-items: center;

    .Aboutsecond {
      margin-top: 20%;
    }
    .AboutPtext {
      font-size: 58px;
      /* margin-top: 32px; */
      text-align: center;
      align-items: center;
      justify-content: center;
    }
    .about-p-tag{
      font-weight:300;
      color: rgba(8, 20, 41, 1);

    }
  }
  @media (min-width: 300px) and (max-width: 350px) {
    /* height: 300vh;} */
  }
  @media (min-width: 350px) and (max-width: 430px) {
    /* height: 280vh;} */
  }
  .AboutPtext {
    /* font-size: 16px; */

    font-size: 16px;
    line-height: 35px;
    letter-spacing: 0em;
    text-align: left;
    color: #08142999;

    font-weight: 600;
    padding-top: 1rem;
  }
  /* .medium-two {
    display: flex;
    align-items: center;
  } */
  @media (min-width: 1200px) and (max-width: 1400px) {
    .AboutPtext {
      font-size: 16px;

      line-height: 28px;
    }

    .medium-one {
      width: 50%;
    }
    .medium-two {
      width: 50%;
    }
  }
  .Aboutsecond {
    margin-top: 10%;
    @media (min-width: 769px) and (max-width: 1024px) {
      .Aboutsecond {
        margin-top: 20%;
      }

      .AboutPtext {
        font-size: 18px;
        margin-top: 32px;
      }
    }
  }
  @media (min-width: 769px) and (max-width: 1000px) {
    /* .aboutbtn{
        margin-left: 290px;
        margin-top: 12px;
        margin-bottom: 20px;
    } */
    .AboutPtext {
      font-size: 18px;
      margin-top: 32px;
      font-weight: 600;
    }
    .aboutbtn {
      margin: 0 auto;
      display: flex;
      text-align: center;
      /* margin-left: 98px; */
    }
    .about {
      margin-top: 10px;
      margin-left: 40px;
      font-size: 19px;
    }
  }
  @media (min-width: 300px) and (max-width: 400px) {
    /* .aboutbtn{
        margin-left: 80px;
    } */
  }
  @media (min-width: 300px) and (max-width: 768px) {
    /* .aboutbtn{
        margin-left: 140px;
    } */
    /* .AboutPtext {
     text-align: center;
    } */
    .medium-two {
      padding-bottom: 2rem;
    }
  }
`;
export const Medium = styled.div`
  display: none;
  @media (min-width: 769px) and (max-width: 1200px) {
    display: inline-block;
    background: #fefbe9;
    width: 100%;

    margin-top: 10%;

    padding: 0px !important;
    .About-section {
      text-align: center;
      padding-top: 40px;
    }
    .h_two {
      font-size: 33px;
      font-weight: 600;
    }
    .aboutbtn {
      width: 158px;
      height: 62px;
      color: white;
      font-size: 18px;
      margin: 0 auto;
      display: flex;
      background: #081429;
      border-radius: 16px;
    }
    .AboutPtext {
      font-size: 18px;
      margin-top: 32px;
      line-height: 30px;

      font-weight: 500;

      display: flex;
      /* justify-content: center;
     */
      align-items: center;
    }
    .aboutImage {
      width: 596px;
      margin: 0 auto;
    }
    .about {
      margin-top: 10px;
      margin-left: 40px;
      font-size: 19px;
    }
  }
`;
