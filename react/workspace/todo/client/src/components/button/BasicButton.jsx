import React from "react";
import Button from "./style";

// 버튼 컴포넌트 만들기
const BasicButton = ({ children, ...rest }) => {
    return (
        // prop...
        // variant = {variant} shape = {shape} size = {size} color = {color}
        <Button {...rest}>{children}</Button>
    );
};

export default BasicButton;
