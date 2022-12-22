// /* ************************** Import Packages *************************** **/
import styled from "styled-components";
export const Margin = styled.div`
  margin-top: 1%;
`;

export const Flex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  padding-left: 143px;
  margin-top: 25px;

  @media (min-width: 1001px) and (max-width: 1024px) {
    .icons-one {
      width: 72px;
    }
    .icons-two {
      width: 106%;
    }
    .icons-three {
      width: 9rem;
    }
    .icons-four {
      width: 143px;
    }
    .icons-five {
      width: 130px;
    }
    .icons-second-one {
      width: 103px;
    }
    .icons-second-two {
      width: 162px;
    }
    .icons-second-three {
      width: 125px;
    }
    .icons-second-four {
      width: 159px;
    }
  }

  @media (min-width: 375px) and (max-width: 768px) {
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    display: flex;
    overflow: hidden;
    padding: 0px;
    margin-bottom: 29px;
  }
`;
export const Fle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;

  padding-left: 39px;
  .icons-one {
    width: 72px;
  }
  .icons-two {
    width: 109%;
  }
  .icons-three {
    width: 11rem;
  }
  .icons-four {
    width: 149px;
  }
  .icons-five {
    width: 133px;
  }

  @media (min-width: 1000px) and (max-width: 1024px) {
    .icons-one {
      width: 72px;
    }
    .icons-two {
      width: 106%;
    }
    .icons-three {
      width: 9rem;
    }
    .icons-four {
      width: 143px;
    }
    .icons-five {
      width: 130px;
    }
  }
  .icons-two {
    width: 94%;
    padding-left: 31px;
  }
  .icons-three {
    width: 117px;
    padding-left: 14px;
    width: 117px;
  }
  .icons-four {
    width: 123px;
    margin-left: -19px;
  }
  .icon-five {
    margin-left: -29px;
    width: 115px;
  }

  .PartnerImage {
    width: 179px;
  }
  .PartnerImages {
    margin-left: 60px;
  }

  @media (min-width: 375px) and (max-width: 768px) {
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-between;

    margin-bottom: 0px;
    margin-right: 0px;

    padding-left: 11px;

    .Agilisum {
      margin-top: 39px;
      margin-left: 92px;
    }
  }
`;
export const Section = styled.div`
  @media (min-width: 769px) and (max-width: 1000px) {
    display: none;
  }
  @media (min-width: 250px) and (max-width: 768px) {
    display: none;
  }
  @media (min-width: 1001px) and (max-width: 1024px) {
    .icons-second-one {
      width: 103px;
    }
    .icons-second-two {
      width: 162px;
    }
    .icons-second-three {
      width: 125px;
    }
    .icons-second-four {
      width: 159px;
    }
  }
  p{
    font-weight: 600;
font-size: 20px;
line-height: 27px;
/* identical to box height */


color: rgba(8, 20, 41, 0.7);
  }

`;
export const SmallSection = styled.div`
  display: none;
  @media (min-width: 250px) and (max-width: 768px) {
    display: block;
    font-size: 26px;
line-height: 27px;
padding-bottom: 3rem;
    padding-top: 3rem;
/* identical to box height */


color: rgba(8, 20, 41, 1);
    }

    .logo-one{
      padding-top: 1rem;
    }
    
    .logo-two{
      padding-top: 1rem;
    }
    
    .logo-three{
      padding-top: 1rem;
    }
    
    .logo-four{
      padding-top: 1rem;
    }
  .kovai{
    width: 108px;
  }

  .small-one-first {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
  .small-one-two {
    display: flex;
    justify-content: center;
  }
  @media (min-width: 769px) and (max-width: 1000px) {
    display: block;
    .our-partner{
      font-size: 26px;
line-height: 27px;
/* identical to box height */


color: rgba(8, 20, 41, 0.7);
    }
    .small-one-first {
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
    }
    .small-one-two {
      display: flex;
      justify-content: center;
    }
  }

  /* @media (min-width: 769px) and (max-width: px)  {
  display: block;} */
`;
