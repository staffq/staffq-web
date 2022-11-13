/* ************************** Import Packages *************************** **/
import styled from "styled-components";

export const SelectBoxStyled = styled.select`
  padding: ${(props) => (props.padding ? props.padding : "0.5rem")};
  position: relative;
  margin: ${(props) => props.margin};
  width: ${(props) => (props.width ? props.width : "546px")};
  height: ${(props) => (props.height ? props.height : "56px")};
  border: 0.5px solid rgba(0, 0, 0, 0.5);
  border-radius: 12px;
  background: #ffffff;
  margin-bottom: 20px;
  box-shadow: 0px 4px 16px rgba(8, 20, 41, 0.08);
  border: 1px solid rgba(8, 20, 41, 0.1);

  color: black;
`;
