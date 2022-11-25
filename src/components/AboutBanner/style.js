import styled from "styled-components";
export const Head = styled.div`
  /* position: relative; */
  .ballwave{
/* background-image: url('assets/images/Ball-waves-about.svg'); */


  }
.one{
  background-image: url('assets/images/Ball-waves-about.svg'); 
  background-repeat: no-repeat;
  background-position: center;
}
  .header {
    background: #efce1e;
    overflow: hidden;
    max-height: 180vh;
  }
  .third-ball {
    margin-left: 8rem;
    position: absolute;
    /* top: 43rem; */
    bottom: 3rem;
  }
  .second-ball {
    position: absolute;
    bottom: 15rem;

    margin-left: 36rem;
    width: 7%;
  }
  h1{
    font-style: normal;
    font-weight: 600;
    font-size: 56px;
    line-height: 70px;
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
    margin-top: 3px;
    /* or 170% */

    color: rgba(8, 20, 41, 0.6);
  }
  .content{
    /* margin-top: 13rem; */
  }
  .ball-one-page {
    /* position: absolute; */
    /* position: absolute; */
    padding-top: 9rem;
    /* margin-left: 7rem; */


  }
  .banner-image {
    width: 100%;
    margin-top: 37px;
    /* position: relative; */
  }
  .ball-image {
    margin-left: 9rem;
    width: 50%;
  }
.single-line-img{
  padding-left: 14rem;
    margin-top: 14rem;
}
@media (min-width: 1024px) and (max-width: 1450px) {
    h1{
        font-size: 40px;
    }
}




  /* @media (min-width: 1203px) and (max-width: 1450px) {
    .ballwave{
position: relative;
padding-left: 10rem;
width: 49%;

margin-left: -3rem;

    }
    .single-line-img {
    padding-left: 9rem;
    margin-top: 1rem;

}
    h1{
      font-size: 46px;
      margin-top: 4rem;
    }
    .ball-one-page {
   
    position:relative;
    top: 3rem;
    z-index: 999;
    margin-left: 7rem;
  }
  }
  @media (min-width: 1024px) and (max-width: 1203x) {
    h1{
      font-size: 38px;
      margin-top: 4rem;
    }
    .ball-one-page {
    position: relative;
    top: 1rem;
    z-index: 999;
    margin-left: 7rem;
  }
  .ballwave{
position: absolute;
padding-left: 7rem;
width: 49%;
margin-left: rem;

    }
    .single-line-img {
    padding-left: 9rem;
    margin-top: 1rem;
    width: 17vw;
}

  } */
  /* @media (min-width: 1025px) and (max-width: 1400px) {
    .header {
      background: #efce1e;
    }

    } 
    span
  {
      font-size: 43px;
      line-height: 60px;

    }
    p {
      margin-left: 4rem;
    } */
  
  @media (min-width: 250px) and (max-width: 1024px) {
    display: none;
    .header {
      text-align: center;
    }

    /* .ball-one-page {
      text-align: center;
    } */
  }
  @media (min-width: 1025px) and (max-width: 1400px) {
    /* .header {
      max-height: 132vh;
    }


    .ball-one-page {

    
    } */
  }
`;
export const SmallHeader = styled.div`
  display: none;
  @media (min-width: 250px) and (max-width: 1024px) {
    display: block;
    background: #efce1e;
    width: 100%;
    height: auto;
    padding-top: 2rem;

    h1 {
      font-size: 32px;
      padding-top: 7rem;
    }
    p {
      font-size: 26px;
      font-weight: 400;
      margin-top: 2rem;
    }
    .small-waves{
     background-image: url("assets/images/Ball-and-wa.svg");
     background-position: center;
     background-repeat: no-repeat;
     width: 100%;
     background-size: contain;
    }
    .samll-wave-contnet{
  
    }
  }


  .Small-header {
  }
`;