import React from "react";
import BasicButton from "../components/button/BasicButton";

const BasicContainer = () => {
    return (
        <div>
            <BasicButton
                variant={"primary"}
                shape={"round"}
                size={"large"}
                // onClick={}
            >
                제가 만든 베이직 버튼이에요😎
            </BasicButton>
        </div>
    );
};

export default BasicContainer;
