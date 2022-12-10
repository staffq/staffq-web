// /* ************************** Import Packages *************************** **/
import styled from "styled-components";
export const ServiceBg = styled.div`
  /*  */
  @media (min-width: 900px) and (max-width: 1106px) {
    display: none;
  }
  @media (min-width: 1024px) and (max-width: 1200px) {
    .small-center {
      padding-right: 8rem;
    }

    .serviceImage {
      width: 521px !important;
      height: 323px;
      margin-top: 0rem;
    }
  }
  @media (min-width: 1024px) and (max-width: 1100px) {
    /* .sm-card{
      margin-right: 20px;
    } */
    .smcard-ONE {
      margin-right: 64px;
    }
  }

  background: #efce1e;
  width: 100%;
  margin-bottom: 20px;
  font-weight: 600;
  padding: 0px !important;
  .sm-scrren-p-tag {
    display: none;
  }

  .LeftArrow {
    padding-left: 10px;
    width: 35px;
  }
  .smcard-box {
    display: flex;
    justify-content: center;
  }
  .service-card-page {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
  .service-p-tag {
    font-size: 19px;
    line-height: 27px;
    font-weight: 500;
    color: #08142999;
  }
  .small-center {
    padding-left: 30px;
  }

  p {
    font-style: normal;

    width: 108%;
    font-size: 16px;
    font-weight: 500;

    color: rgba(8, 20, 41, 0.4);
  }
  .h-five {
    font-size: 22px;
    color: #081429;
    font-weight: 600;
  }
  h2 {
    font-size: 36px;
  }

  @media (min-width: 250px) and (max-width: 768px) {
    .service-card-page {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    .sm-scrren-p-tag {
      display: block;
      width: 87%;
      color: rgba(8, 20, 41, 0.6);
      font-weight: 600;
    }
    .service-p-tag {
      display: none;
    }

    .sm-card {
      display: flex;
      justify-content: center;
    }

    width: 100%;
  }
  @media (min-width: 769px) and (max-width: 1204px) {
    align-items: center;
    width: 100%;
    .small-center {
      text-align: center;
    }
  }
  /* @media (min-width: 1024px) and (max-width: 1200px) {
  
    align-items: center;
    width: 100%;
}
.service-card-page {
    display: flex;
    flex-direction: column;
    justify-content: center;
    
  } */
  .sm-card {
    display: flex;
    justify-content: center;
  }

  @media (min-width: 1301px) and (max-width: 1400px) {
    /* .service-p-tag {
    font-size: 16px;
    line-height: 27px;
    font-weight: 600;
    color: #08142999;
  }
   */
  }

  .learnmore:hover .VectorImage {
    display: block;
    margin-top: -19px;
  }
  .learnmore:hover {
    font-weight: bold;
  }

  .VectorImage-one {
    margin-top: -19px;
  }
  .VectorImage {
    margin-top: -19px;
    display: none;
  }
  .serviceImage {
    width: 100%;
  }

  @media (min-width: 250px) and (max-width: 768px) {
    .small-center {
      text-align: center;
      width: 100%;
    }

    .serviceImage {
      width: 100%;
      margin-top: 2rem;
    }

    .ServiceText {
      justify-content: center;
      align-items: center;
    }
    .serviceImage {
      overflow: hidden;
      width: 100%;
    }
  }
  @media (min-width: 1200px) and (max-width: 1400px) {
    .service-img-one{
height: 429px;
    }
  }
`;
export const cardhead = styled.div`

  background: red;
  width: 250px;
  height: 153px;
`;

export const Medium = styled.div`
  display: none;
  .service-we {
    font-size: 30px;
  }
  @media (min-width: 1000px) and (max-width: 120px) {
    .serviceImage {
      margin-left: 15rem;
    }
  }
  @media (min-width: 900px) and (max-width: 1000px) {
    .serviceImage {
      margin-left: 5rem;
    }
  }
  @media (min-width: 1000px) and (max-width: 1300px) {
    .serviceImage {
      margin-left: 15rem;
    }
  }
  @media (min-width: 600px) and (max-width: 900px) {
    .service-img-one {
      margin-left: 88px;
    }
    .serviceImage {
      margin-left: 4rem;
    }
  }

  @media (min-width: 900px) and (max-width: 1106px) {
    display: block;
    background: #efce1e;
    width: 100%;
    margin-bottom: 20px;

    padding: 0px !important;
    .one {
      display: flex;
      justify-content: center;
      flex-direction: row;
    }
    .small-center {
      text-align: center;
    }

    .two {
      display: flex;
      justify-content: center;
    }

    .LeftArrow {
      padding-left: 10px;
      width: 35px;
    }
    h5 {
      font-weight: 600;
    }
    .service-we {
      font-weight: 600;
      font-size: 36px;
      line-height: 49px;
      /* identical to box height */

      color: #081429;
    }
    .h-five {
      font-size: 22px;
      color: #081429;
      font-weight: 600;
    }
    .learnmore:hover .VectorImage {
      display: block;
      margin-top: -19px;

      cursor: pointer;
    }
    .learnmore:hover {
      font-weight: bold;
    }
    .lear {
      font-weight: bold;
    }
    .VectorImage-one {
      margin-top: -19px;
    }
    .VectorImage {
      margin-top: -19px;
      display: none;
    }

    p {
      font-style: normal;
      font-weight: 500;
      /* width: 108%; */
      font-size: 16px;

      color: rgba(8, 20, 41, 0.4);
    }
  }
  /* @media (min-width: 1301px) and (max-width: 1400px) {
  .service-p-tag{
    font-size: 14px;
line-height: 27px;
font-weight:500;
color: #08142999;

  }
  }
   */
`;
