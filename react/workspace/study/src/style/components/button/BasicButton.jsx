import React from "react";
import Button from "./style";

const BasicButton = ({ variant, shape, size, children, ...rest }) => {
    return (
        <Button variant={variant} shape={shape} size={size} {...rest}>
            {children}
        </Button>
    );
};

export default BasicButton;
