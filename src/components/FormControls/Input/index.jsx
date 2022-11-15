/* ************************** Import Packages *************************** **/
import React from "react";
import { FiSearch } from "react-icons/fi";
/* ************************** Import Styles *************************** **/
import { InputStyled, Icon } from "./style";

const Input = ({
  onClick,
  onChange,
  placeholder,
  name,
  value,
  type,
  onMouseEnter,
  onMouseLeave,
  onBlur,
  width,
  height,
  padding,
  icon,
  ...others
}) => {
  return (
    <div>
      <InputStyled
        value={value}
        name={name}
        onClick={onClick}
        onChange={onChange}       
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onBlur={onBlur}
        width={width}
        height={height}
        placeholder={placeholder}
        padding={padding}
        {...others}
      />
{icon? <Icon>
        <FiSearch style={{ width: "18px", height: "18px" }} />
      </Icon>:null}
      
    </div>
  );
};

export default Input;
