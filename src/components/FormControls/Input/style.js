/* ************************** Import Packages *************************** **/
import styled from "styled-components";

export const InputStyled = styled.input`
  padding: ${(props) => (props.padding ? props.padding : "0.5rem")};
  position: relative;
  margin: ${(props) => props.margin};
  width: ${(props) => (props.width ? props.width : "100%")};
  height: ${(props) => (props.height ? props.height : "56px")};
  border: 0.5px solid rgba(0, 0, 0, 0.5);
  border-radius: 12px;
  background: #ffffff;
  margin-bottom: 20px;
  box-shadow: 0px 4px 16px rgba(8, 20, 41, 0.08);
  border: 1px solid rgba(8, 20, 41, 0.1);

  color: black;

  @media (min-width: 250px) and (max-width: 768px) {
    width: 100%;
    justify-content: center;
    display: flex;
  }
  @media (min-width: 769px) and (max-width: 990px) {
    width: 100%;
  }
`;

export const Icon = styled.div`
  color: black;
  width: 40px;
  height: 40px;
  top: 26.5rem;
  /* position: absolute; */
  /* opacity: 0.5; */
  left: 8rem;
  .one{  width: 46px;
  height: 21px;

  margin-top: -123px;

  position: relative;
  padding-left: 1px;
}

`;


