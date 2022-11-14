// /* ************************** Import Packages *************************** **/
import styled from "styled-components";

export const H1 = styled.h1`
  
  font-weight: bold;

  font-style: normal;
  font-size: 64px;
  line-height: 72px;

  color: #081429;

  @media (min-width: 250px) and (max-width: 768px)  {
    font-size: 32px;
  line-height: 42px;
  text-align: center;
  font-weight: bold;
  justify-content: center;
  align-items: center;
  }
 
`;

export const Button = styled.button`
  left: 0%;
  right: 0%;
  top: 0%;
  bottom: 0%;
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
 /* transition-duration: 5s;
  transition-delay: 2s; */
   &:hover{
    .hello{
      display: inline-flex;
    justify-content: space-between;
    align-content: space-around;
  
    margin-left: 24px;
   
    
    color: white;
   
  
   
   
  
}} 
.hello{
    margin-left: 10px;
    display: none;
  }
  
   .hover-arrow{
  display: none;
}

  @media (min-width: 250px) and (max-width: 768px)  {
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
  
    @media (min-width: 250px) and (max-width: 768px)  {
  width: 100%;
  }
`

export const Image = styled.img`
  
  @media (min-width: 250px) and (max-width: 768px)  {
    margin-top: 77%;
    width: 100%;
  
   
  }
  @media (min-width: 769px) and (max-width: 1024px)  {
    margin-top: 120%;
   
 
  }
  @media (min-width: 769px) and (max-width: 1024px)  {
    margin-top: 53%;

 
  }
`
;
export const BannerText = styled.div`
  position: absolute;
  /* width: 890px; */
  height: 190px;

  top: 147px;
  z-index: 99;
  padding-left: 130px;
 
  
  
  @media (min-width: 250px) and (max-width: 768px)  {

  width: 100%;
    top: 67px;
 font-size: 10px;
 padding-left: 10px;
 
 
 


 



    
    
  
    }
  
    @media (min-width: 769px) and (max-width: 1024px)  {
      
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
  line-height: 32px;
  letter-spacing: 0em;
  text-align: left;
  @media (min-width: 250px) and (max-width: 768px)  {
    font-size: 15px;
  line-height: 32px;
  text-align: center;
  font-weight: 600;
  }
  @media (min-width: 769px) and (max-width: 1024px)  {
    
    text-align: center;
    justify-content: center;
    align-items: center;
  }
   
`;
export const BannerPage = styled.div `
 @media (min-width: 769px) and (max-width: 1024px)  {
  display: none;
 }
 
 @media (min-width: 250px) and (max-width: 768px)  {
  display: none;
 }
 @media (min-width: 1025px) and (max-width: 1400px) 
{
display: none;
}

`;
  
 

export const Smbanner = styled.div`
display: none;
@media (min-width: 769px) and (max-width: 1024px)  {
  display: block;
  .smimages{
    width: 100%;
    margin-top: 20px;
  }
  .btn-small{
    background: #081429;
    height: 46px;
width: 149px;
left: 113px;
top: 370px;
border-radius: 16px;
color: #FFFFFF;
  }
  .smText{
  
    margin-top: 10%;
    text-align: center;
  }
  
 }
 @media (min-width: 250px) and (max-width: 768px)  {
  display: block;
  .smimages{
    width: 100%;
    margin-top: 12px;
  }
  h1{
    font-style: normal;
font-weight: 600;
font-size: 34px;
line-height: 46px;

color: #081429;
  }
  p{
    font-weight: 500;
font-size: 16px;
line-height: 22px;

color: rgba(8, 20, 41, 0.6);
margin-top: 30px;
  }
  .smText{
    margin-top: 23%;
    text-align: center;
  }
  .btn-small{
    background: #081429;
    height: 46px;
width: 149px;
left: 113px;
top: 370px;
border-radius: 16px;
color: #FFFFFF;
margin-top: 12px;
  }
 }
`

export const Medium = styled.div`
display: none;
.btn-medium{
  
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
.smText{
padding-left: 32px;
margin-top: 7rem;
}
h1{
  font-style: normal;
font-weight: 600;
font-size: 44px;
line-height: 66px;
color: #050c18;
}
p{
  font-weight: 500;
font-size: 16px;
line-height: 22px;

color: rgba(8, 20, 41, 0.6);
margin-top: 30px;
}
@media (min-width: 1025px) and (max-width: 1400px) 
   {
display: block;

   }
`