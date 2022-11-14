import styled from "styled-components";


export const AboutBg = styled.div`

@media (min-width:769px) and (max-width:1200px){
    display: none;
}
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
.aboutbtn{
    width: 158px;
height: 62px;
color: white;
font-size:18px;

background: #081429;
border-radius: 16px;
}
@media (min-width:375px) and (max-width:768px){
    height: 75rem;
    .aboutImage{
   
    }
    .aboutbtn{
        margin: 0 auto;
        display: flex;
        text-align: center;
        /* margin-left: 98px; */
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
    /* .aboutbtn{
        margin-left: 290px;
        margin-top: 12px;
        margin-bottom: 20px;
    } */
    .AboutPtext{
    font-size: 18px;
    margin-top: 32px;
    
}
.aboutbtn{
        margin: 0 auto;
        display: flex;
        text-align: center;
        /* margin-left: 98px; */
    }
    .about{
    margin-top: 10px;
    margin-left: 40px;
    font-size: 19px;
}
       
    }
    @media (min-width:300px) and (max-width:400px){
        height: 79rem;
    /* .aboutbtn{
        margin-left: 80px;
    } */
    .AboutPtext{
  
    margin-top: 32px;
    
}
    }
    @media (min-width:500px) and (max-width:600px){
        height: 71rem;
        /* .aboutbtn{
        margin-left: 140px;
    } */
    }


`
export const Medium = styled.div`
display: none;
@media (min-width:769px) and (max-width:1200px){
    display: inline-block;
    background: #FEFBE9;
width:100%;
height: 70rem;
margin-top: 10%;

padding: 0px !important;
.About-section{
    text-align: center;
    padding-top: 40px;
}
.aboutbtn{
    width: 158px;
height: 62px;
color: white;
font-size:18px;
margin: 0 auto;
display: flex;
background: #081429;
border-radius: 16px;
}
.AboutPtext{
    font-size: 18px;
    margin-top: 32px;
    line-height: 30px;

  

    text-align: left;
    
    
}
.aboutImage{
width: 596px;
margin: 0 auto;
}
.about{
    margin-top: 10px;
    margin-left: 40px;
    font-size: 19px;
}
}
`

