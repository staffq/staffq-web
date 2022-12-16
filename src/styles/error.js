import styled from "styled-components";

export const Div = styled.div`
padding-top: 10rem;
padding-bottom: 10rem;
.btn{
    font-weight: 600;
font-size: 16px;
line-height: 22px;
/* identical to box height */



display: flex;
margin:  0 auto;

color: #FFFFFF;


/* Inside auto layout */

flex: none;
order: 0;
flex-grow: 0;
}
p{
color: #FFC70D;
font-size: 62px;
    font-weight: 600;
    text-align: center;
    display: flex;
    justify-content: space-around;
;
}
h1{
    color: #000000;
    text-align: center;
    font-size: 109px;
    font-weight: 600;
}
.one{
    display: grid;
    align-items: center;
}
@media (min-width:1200px ) and (max-width:1400px){
    h1{
        font-size: 106px;
    }
}
@media (min-width:1000px ) and (max-width:1200px){
    h1{
        font-size: 85px;
    }
    p{
font-size: 51px;
    }
}
@media (min-width:768px ) and (max-width:1200px){
    h1{
        font-size: 55px;
    }
    p{
font-size: 31px;
    }
}

@media (min-width:100px ) and (max-width:768px){
    h1{
        font-size: 30px;
    }
    p{
font-size: 21px;
    }
    .two{
        margin-top: 4rem;
    }
}
`