// /* ************************** Import Packages *************************** **/
import styled from "styled-components";

export const Card = styled.div`
  width: ${(props) => (props.width ? props.width : "auto")};
  height: ${(props) => (props.height ? props.height : "150px")};
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "white"};
  padding: ${(props) =>
    props.padding ? props.padding : "1rem 1rem 1rem 1rem"};
  margin: ${(props) => (props.margin ? props.margin : "1rem 1rem 1rem 1rem")};
  border-radius: ${(props) =>
    props.borderRadius ? props.borderRadius : "8px"};
`;
