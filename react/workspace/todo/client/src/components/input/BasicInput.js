import React from "react";
import Input from "./style";

const BasicInput = ({ ...rest }) => {
    // variant = {variant} shape = {shape} size = {size} color = {color}
    return <Input {...rest} />;
};

export default BasicInput;
