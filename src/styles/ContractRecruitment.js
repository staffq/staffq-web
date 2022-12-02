import styled from "styled-components";

export const Div = styled.div`
.solution-p-tag {
    margin-top: 34px;

    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 40px;
    /* or 188% */
  }
  .hiring-tag{
    padding-top: 2rem;
  }


`
// export const SmallHeader = styled.div`




// `
// export const Header = styled.div`





export const Header = styled.div`
  left: 0px;
  top: 81px;
  position: relative;

  background: #efce1e;
  .ball-image {
    width: 100%;
  }
  h1 {
    left: 170px;
    top: 282px;

    font-style: normal;
    font-weight: 600;
    font-size: 60px;
    line-height: 81px;
    /* identical to box height */

    color: #081429;
  }
  p {
    height: 170px;
    width: 578px;

    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 34px;
    /* or 170% */

    color: rgba(8, 20, 41, 0.6);
  }
  .ball-one-page {
    position: absolute;
    top: 10rem;
    margin-left: 20px;
  }
  .banner-image {
    width: 507px;
    margin-top: 37px;
    position: relative;
  }

  .little {
    position: absolute;
    top: 4rem;
    right: 11rem;
  }
  @media (min-width: 769px) and (max-width: 1023px) {
    display: none;
  }
  @media (min-width: 250px) and (max-width: 768px) {
    display: none;
    .header {
      text-align: center;
    }
    .ball-image {
      display: none;
    }
    .little {
      display: none;
    }
    h1 {
      font-size: 24px;
      width: 291px;
    }
    p {
      width: 358px;
      font-size: 16;
    }
    .banner-image {
      width: 100%;
      margin-top: 32rem;
    }
    .ball-one-page {
      text-align: center;
      top: 10rem;
    }
  }
  @media (min-width: 769px) and (max-width: 1300px) {
    .little {
      display: none;
    }
    /* .ball-image {
      display: none;
    } */
    .banner-image {
      width: 100%;
    }
    .ball-one-page {
      text-align: center;
      top: 10rem;
    }
  }
  @media (min-width: 990px) and (max-width: 1200px) {
    .ball-one-page {
      text-align: center;
      top: 5rem;
      margin: 0;
    }
    h1 {
      left: 170px;
      top: 282px;

      font-style: normal;
      font-weight: 600;
      font-size: 54px;
      line-height: 81px;
      /* identical to box height */

      color: #081429;
    }
    .banner-image {
      width: 100%;
      margin-left: 2rem;
    }
  }
`;

export const Image = styled.div`
  /* margin-top: 8%; */
  @media (min-width: 250px) and (max-width: 1024px) {
    display: none;
  }
  .one {
    position: absolute;
  }
  .under-pic {
    width: 71%;
    margin-left: 91px;
    margin-top: 5rem;
    position: absolute;
  }
  .two {
    bottom: 0rem;
    position: relative;
  }
  .three {
  }
  h6 {
    width: 113px;
    height: 54px;

    margin-top: 2rem;
    margin-left: 2rem;

    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 27px;
    text-align: center;

    color: #081429;
  }
  h5 {
    color: #081429;
    width: 113px;
    height: 54px;
    line-height: 27px;

    font-weight: 600;
    font-size: 20px;
    margin-left: 2rem;
  }
  .second-imgaes-content {
    bottom: 68px;
    position: relative;
  }
  .horizontal {
    width: 40px;
    margin-left: 1rem;
    margin-top: 2rem;
    height: 83px;
    -webkit-transform: rotate(88deg);
    -ms-transform: rotate(88deg);
    transform: rotate(88deg);
  }
  .uder-cover-img {
    position: relative;
    bottom: 45px;
  }
  .round-img {
    width: 167px;
    height: 163px;
  }
  @media (min-width: 1024px) and (max-width: 1050px) {
   .under-pic{
  margin-left: 149px;
   }
  }
  @media (min-width: 1050px) and (max-width: 1100px) {
   .under-pic{
  margin-left: 108px;
   }
  
  }
  @media (min-width: 1156px) and (max-width: 1170px) {
   .under-pic{
  margin-left: 60px;
   }}
   @media (min-width: 1170px) and (max-width: 1200px) {
   .under-pic{
  margin-left: 45px;
   }}
   @media (min-width: 1200px) and (max-width: 1250px) {
   .under-pic{
  margin-left: 158px;
   }}
   @media (min-width: 1250px) and (max-width: 1290px) {
   .under-pic{
  margin-left: 117px;
   }}
   @media (min-width: 1290px) and (max-width:1320px) {
   .under-pic{
  margin-left: 98px;
   }}
   @media (min-width: 1320px) and (max-width: 1360px) {
   .under-pic{
  margin-left: 98px;
   }}
   @media (min-width: 1400px) and (max-width: 1475px) {
   .under-pic{
  margin-left: 164px;
   }}
   @media (min-width: 1475px) and (max-width: 1500px) {
   .under-pic{
  margin-left: 130px;
   }}
`;

export const SmallHeader = styled.div`
  background: #efce1e;
  /* margin-top: 12rem; */
  text-align: center;
  display: none;
  margin-top: 5rem;
/* .small-img{
  background-image: url("assets/images/banner-param.png");
  background-size: contain;
  background-repeat: no-repeat;
  width: 100%;
  background-position: center;} */
  .banner-image {
    width: 100%;
  }
  .small-img{
    position: absolute;
    
  }
  .ball-sm-page {
      position: relative;
      top: 4rem;
      padding-top: 3rem;
    }
  @media (min-width: 250px) and (max-width: 768px) {
    display: block;
  }
  @media (min-width: 769px) and (max-width: 1023px) {
    display: block;
   
  }
`;