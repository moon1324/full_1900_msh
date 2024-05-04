import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { bigger } from "../../redux/modules/font";

const FontButtonComponent = () => {
    // const fontSize = "1rem"
    // 리턴이 있으면 전체를 값으로 봐라
    const fontSize = useSelector((state) => state.fontSize);
    const dispatch = useDispatch();

    return (
        <div>
            <p style={{ fontSize: fontSize }}>리덕스 실습!</p>
            <button onClick={() => dispatch(bigger())}>글자 키우기!</button>
        </div>
    );
};

export default FontButtonComponent;
