import styled from "styled-components";

export const Div = styled.div`


.FIRST {
    margin-top: 10%;
  }
  .our-head{
    margin-left: 15px;
    margin-bottom: 19px;
    margin-top: 20px;
  }
  .second-content{
    margin-left: 7rem;
    margin-top: 4rem;
  }
  p{
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
  .content-one {
    width: 595px;
    height: 500px;

    border-radius: 20px;
    background: #f6f6f5;
    padding-left: 12px;

padding-top: 37px;
  
  }
  .evalute-image{

    display: flex;
    justify-content: center;
  }
  .section-one{
    width: 630px;
    height: 500px;
    padding-left: 12px;

    padding-top: 37px;

    border-radius: 20px;
    background: #f6f6f5;
  }
  .img-page-two{
    padding-left: 34px;
  }
  .first-row{
    padding-left: 25px;
  }
  .margin-section{
    margin-top: 4rem;
  }
  .margin-section-second{
    margin-top: 1rem;
  }
  .discover-p-tag{
    font-size: 16px;
    font-weight: 400;
    line-height: 36px;
  }
  .discover-h-three{
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
    font-family: "General Sans";
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 30px;
    /* identical to box height, or 167% */

    color: #ffffff;
  }

  .join-our{
    

text-align: center;
font-weight: 600;
font-size: 70px;
line-height: 95px;


color: #081429;

  }
  .join-team{
    text-align: center;
    position: absolute;
    /* margin-bottom: 6rem; */
    top: 232rem;
    z-index: 99;
    bottom: 0px;
  }
  .background-wave-image{
    display: flex;
    justify-content: center;
    margin-top: 10rem;
    position: relative;
  }
  .code-line{
    margin-left: 19rem;
    width: 155px;
    margin-top: -44px;
  }

  .small-logo-section{
  display: flex;
  flex-direction: row;
  justify-content: center;
  display: none;
}
@media (min-width:500px) and (max-width:1070px){
  .background-wave-image{
    display: none;

  }
  .small-logo-section{
  display: flex;
  flex-direction: row;
  justify-content: center;
  display: block;
  margin-top: 2rem;
}
.join-team{
    text-align: center;
  
    margin-top: 30rem;
  
  }
}
@media (min-width:250px) and (max-width:500px){
  .background-wave-image{
    display: none;

  }
  .small-logo-section{
  display: flex;
  flex-direction: column;
  justify-content: center;
  display: block;
  margin-top: 2rem;
}

}




/* .....................................our vision and our mission..media query: ..................... */
@media (min-width:990px) and (max-width:1440px){
  .second-content{
    margin-left: 7rem;
    margin-top: 1rem;
  }
  .mission-p-tag{
    font-size: 16px;

  }
  .our-head{
    font-size: 25px;
  }
}
@media (min-width:250px) and (max-width:600px){
  .second-content{
    margin-left: 2rem;
    margin-top: 1rem;
  }
 
  
}













`


export const Header = styled.div`
  left: 0px;
  top: 98px;
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
  /* @media (min-width: 769px) and (max-width: 1300px) {
    display: none;
  } */
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
    .ball-image {
      display: none;
    }
    .banner-image {
      width: 100%;
      margin-top: 32rem;
    }
  }
`;
export const AboutSection = styled.div`


background: #FEFBE9;
width:100%;
height: 39rem;
margin-top: 10%;
padding-top: 2rem;

padding: 0px !important;
.About-section{
    text-align: center;
    padding-top: 29px;
    
}

@media (min-width:375px) and (max-width:768px){
    height: 75rem;
    .aboutImage{
   
    }

    .about{
    margin-top: 10px;
    margin-left: 40px;
    font-size: 19px;
}
  
   
    background: #FEFBE9;
width:100%;


justify-content: center;
align-items: center;

    .Aboutsecond{
        margin-top: 20%;
      
    }
    .AboutPtext{
    font-size: 58px;
    margin-top: 32px;
    text-align: center;
    align-items: center;
    justify-content: center;
    
}
  

}
.AboutPtext{
       /* font-size: 16px; */
  
       font-size: 17px;
    line-height: 38px;
    letter-spacing: 0em;
    text-align: left;

    
}
.about-p-center{
  display: flex;
  align-items: center;
}
.Aboutsecond{
    margin-top: 10%;
    @media (min-width:769px) and (max-width:1024px){
      
        .Aboutsecond{
        margin-top: 20%;
      
    }
    
    .AboutPtext{
    font-size: 18px;
    margin-top: 32px;
    
}
}

  
}
@media (min-width:769px) and (max-width:1000px){
    height: 50rem;
  
    .AboutPtext{
    font-size: 18px;
    margin-top: 32px;
    
}

    .about{
    margin-top: 10px;
    margin-left: 40px;
    font-size: 19px;
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


`



export const SmallHeader = styled.div`
display: none;
@media (min-width: 250px) and (max-width: 768px) {
  display: block;
  background: #EFCE1E;
  width: 100%;
  height: auto;

  h1{
    font-size: 40px;
    padding-top: 3rem;
  }
  p{
    font-size: 26px;
    font-weight: 400;
    margin-top: 2rem;
  }
}
    
.Small-header{
  

}


`