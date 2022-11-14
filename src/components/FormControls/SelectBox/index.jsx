/* ************************** Import Packages *************************** **/
import React from "react";
import {SelectBoxStyled} from "./style"
const SelectBox = ({ name, onChange, value, children, ...others }) => {
  return (
    <SelectBoxStyled
      name={name}
      className="select"
      value={value}
      onChange={onChange}
      {...others}
    >
      {children || <option>City</option> 

}
    </SelectBoxStyled>
  );
};

export default SelectBox;
