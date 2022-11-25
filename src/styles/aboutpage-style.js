import styled from "styled-components";

export const Div = styled.div`
  .FIRST {
    margin-top: 2%;
  }
  .our-head {
    margin-left: 15px;
    margin-bottom: 19px;
    margin-top: 20px;
  }
  /* .second-content {
    margin-left: 3rem;
    margin-top: 4rem;
  } */
.vision-row{
  display: grid;
  align-content: center;
  padding-left: 30px;
}

  p {
    font-size: 21px;
    font-weight: 300;
    line-height: 33px;
  }
  .Our-Strategy {
    font-weight: 600;
    font-size: 36px;
    line-height: 49px;
    /* identical to box height */

    text-align: center;

    color: #081429;
  }
  .mission-p-tag {
    font-size: 16px;
    font-weight: 500;
    color: #08142999;
  }
  .Lorem {
    font-size: 16px;
    font-weight: 500;
    color: #08142999;
  }
  .content-one {
    /* width: 630px; */
    /* height: 500px; */

    border-radius: 20px;
    background: #f6f6f5;
    /* padding-left: 12px; */

    padding-top: 37px;
  }
  .evalute-image {
    display: flex;
    justify-content: center;
  }
  @media (min-width: 100px) and (max-width: 1024px) {

  }
  .section-one {
    width: 630px;
    /* height: 500px; */
    padding-left: 12px;

    padding-top: 37px;

    border-radius: 20px;
    background: #f6f6f5;
  }
  .img-page-two {
    padding-left: 34px;
  }
  .first-row {
    padding-left: 25px;
  }
  .row-second-ball {
    padding-left: 3rem;
    margin-top: 5rem;
  }
  .margin-section {
    margin-top: 4rem;
  }
  .margin-section-second {
    margin-top: 1rem;
  }
  .discover-p-tag {
    font-size: 16px;
    font-weight: 400;
    line-height: 36px;
  }
  .discover-h-three {
    font-weight: 600;
    font-size: 36px;
    margin-top: 12px;
    line-height: 49px;
    /* identical to box height */

    color: #081429;
  }
  .bt {
    width: 158px;
    height: 62px;
    left: 765px;
    top: 4102px;

    background: #081429;
    border-radius: 16px;
    color: white;

    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 30px;
    /* identical to box height, or 167% */

    color: #ffffff;
  }

  .join-our {
    text-align: center;
    font-weight: 600;
    font-size: 70px;
    line-height: 95px;

    color: #081429;
  }
  .join-team {
    text-align: center;
    position: relative;
    /* top: 232rem; */
    /* z-index: 99; */
    bottom: 322px;
  }

  .background-wave-image {
    display: flex;
    justify-content: center;
    margin-top: 10rem;
    /* position: relative; */
  }
  .code-line {
    margin-left: 19rem;
    width: 155px;
    margin-top: -44px;
  }
  .maxium {
    max-height: 53vh;
  }

  .small-logo-section {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  .small-join-section {
    display: none;

    .join-p-tag {
      font-size: 23px;
      font-weight: 400;
      line-height: 33px;
    }
  }
  /* .wavee{
    background-image: url("assets/images/Images-with-connector.svg" );
    width: 100%;
  } */
  @media (min-width: 500px) and (max-width: 1070px) {
    .maxium {
      display: none;
    }
    .small-join-section {
      display: block;
    }

    .small-logo-section {
      display: flex;
      flex-direction: row;
      justify-content: center;

      margin-top: 2rem;
    }
    .join-teamm {
      text-align: center;
      margin-top: 2rem;
    }
  }
  @media (min-width: 250px) and (max-width: 500px) {
    .maxium {
      display: none;
    }
    .small-join-section {
      display: block;
    }
  }
  @media (min-width: 765px) and (max-width: 1024px) {
    .join-teamm {
      text-align: center;
      margin-top: 5rem;
    }
  }
  @media (min-width: 250px) and (max-width: 500px) {
    .join-teamm {
      text-align: center;
      margin-top: 1rem;
    }
    .join-our{
      font-size: 34px;
    }
    .under-code {
      display: none;
    }
    .small-logo-section {
      margin-top: 2rem;
    }
  }

  /* .....................................our vision and our mission..media query: ..................... */
  @media (min-width: 990px) and (max-width: 1350px) {
  
    
    
    .mission-p-tag {
      font-size: 16px;
      width: 145%;
    }
    .our-head {
      font-size: 25px;
    }

    /* ...............................our state: .;.......................... */
    .section-one {
      width: 100%;
      padding-top: 37px;
      padding: 7px;
      /* height: 635px; */
      border-radius: 20px;
      /* margin-left: 3rem; */
      background: #f6f6f5;
    }
    .content-one {
      width: 100%;
      /* margin-left: 2rem; */
      padding: 16px;
      border-radius: 20px;
      background: #f6f6f5;
      padding-top: 37px;
    }
    .img-one-one {
      width: 92%;
      padding-top: 2rem;
    }
  }
  @media (min-width: 250px) and (max-width: 1024px) {
    .second-content {
     display: flex;
     justify-content: center;
     margin-top: 0rem;
    }}
  /* ....................small screen: .;.......................... */
  @media (min-width: 500px) and (max-width: 768px) {
    .section-one {
      width: 100%;
      padding-top: 37px;
      padding: 7px;

      border-radius: 20px;
      /* margin-left: 3rem; */
      background: #f6f6f5;
    }
    .content-one {
      width: 100%;
      /* margin-left: 2rem; */
      padding: 16px;
      border-radius: 20px;
      background: #f6f6f5;
      padding-top: 37px;
    }
    .img-one-one {
      width: 92%;
      padding-top: 2rem;
    }
  }
  @media (min-width: 150px) and (max-width: 1024px) {
.evalute-image , .row-second-ball{
  display: none;
}
  }
  @media (min-width: 250px) and (max-width: 500px) {
    .section-one {
      width: 100%;
      /* height: 173vh; */
      padding-top: 37px;
      padding: 7px;

      border-radius: 20px;
      /* margin-left: 3rem; */
      background: #f6f6f5;
    }
    .content-one {
      width: 100%;
      /* height: 173vh; */
      /* max-height: 267vh; */
      padding: 16px;
      border-radius: 20px;
      background: #f6f6f5;
      padding-top: 37px;
    }

    .img-page-two {
      padding-left: 4px;
    }
    .img-one-one {
      width: 92%;
      padding-top: 2rem;
    }
    .second-content {
      margin-top: 8px;
      margin-left: 0;
    }
  }

  @media (min-width: 1200px) and (max-width: 1400px) {
    .section-one {
      width: 100%;
      padding-top: 37px;
      padding: 7px;
      /* height: 635px; */
      border-radius: 20px;
      /* margin-left: 3rem; */
      background: #f6f6f5;
    }
    .content-one {
      width: 100%;
      /* margin-left: 2rem; */
      padding: 16px;
      border-radius: 20px;
      background: #f6f6f5;
      padding-top: 37px;
    }
    .img-one-one {
      width: 92%;
      padding-top: 2rem;
    }
  }
`;


export const AboutSection = styled.div`
  background: #fefbe9;
  width: 100%;

  margin-top: 10%;
  padding-top: 2rem;

  padding: 0px !important;
  .About-section {
    text-align: center;
    padding-top: 29px;
  }
  .about-p{
    font-weight: 600;
    color: rgba(8, 20, 41, 0.6);
    font-size: 16px;
  }

  @media (min-width: 375px) and (max-width: 768px) {
    /* height: 75rem; */
    .aboutImage {
    }

    .about {
      margin-top: 10px;
      margin-left: 40px;
      font-size: 19px;
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
      margin-top: 32px;
      text-align: center;
      align-items: center;
      justify-content: center;
    }
  }
  .AboutPtext {
    /* font-size: 16px; */

    font-size: 17px;
    line-height: 38px;
    letter-spacing: 0em;
    color: rgba(8, 20, 41, 0.6);
    text-align: left;
    font-weight: 500;
  }
  .about-p-center {
    display: flex;
    align-items: center;
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
  @media (min-width: 1024px) and (max-width: 1400px) {
    .AboutPtext {
    /* font-size: 16px; */

    font-size: 17px;
    line-height: 30px;
    letter-spacing: 0em;
    color: rgba(8, 20, 41, 0.6);
    text-align: left;
    font-weight: 500;
  }
  }

  @media (min-width: 769px) and (max-width: 1000px) {
    .AboutPtext {
      font-size: 18px;
      margin-top: 32px;
    }

    .about {
      margin-top: 10px;
      margin-left: 40px;
      font-size: 19px;
    }
  }

  @media (min-width: 990px) and (max-width: 1200px) {
    .AboutPtext {
      font-size: 13px;
      font-weight: 400;
      line-height: 30px;
      color: rgba(8, 20, 41, 0.6);
    }
  }

  /* @media (min-width:300px) and (max-width:400px){
        height: 79rem;
   
    .AboutPtext{
  
    margin-top: 32px;
    
}
    }
    @media (min-width:500px) and (max-width:600px){
        height: 71rem;
      
    
    } */
`;


