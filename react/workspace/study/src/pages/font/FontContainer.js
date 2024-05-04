import React from "react";
import FontButtonComponent from "./FontButtonComponent";
import FontInputComponent from "./FontInputComponent";
import FontInputHooks from "./FontInputHooks";

const FontContainer = () => {
    // 폰트의 기본 글자크기가 1rem
    // redux를 이용해서 버튼을 눌렀을 때 3rem으로 변경
    // FontButtonComponent로 만들기

    return (
        <div>
            {/* <FontButtonComponent /> */}
            {/* <FontInputComponent /> */}
            <FontInputHooks />
        </div>
    );
};

export default FontContainer;
