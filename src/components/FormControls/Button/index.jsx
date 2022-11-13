/* ************************** Import Packages *************************** **/
import React, { useState, useEffect } from "react";

/* ************************** Import Style *************************** **/
import ButtonStyled from "./style";

const Button = ({ text, type, className, onClick }) => {
  const [customClass, setCustomClass] = useState("");

  useEffect(() => {
    switch (type) {
      case "primary":
        setCustomClass("primary-button");
        break;
      case "secondary":
        setCustomClass("secondary-button");
        break;
      default:
        setCustomClass("secondary-button");
        break;
    }
  }, [type]);

  return (
    <ButtonStyled
      type={type === "primary" ? "submit" : null}
      className={`custom-button rounded ${customClass} ${className}`}
      onClick={onClick}
    >
      {text}
    </ButtonStyled>
  );
};
export default Button;
