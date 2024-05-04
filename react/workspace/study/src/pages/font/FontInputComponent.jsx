import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { inputBigger } from "../../redux/modules/font";

const FontInputComponent = () => {
    // 사용자에게 입력받은 폰트사이즈
    // 폰트크기 변경하기

    const fontSize = useSelector((state) => state.fontSize);
    const dispatch = useDispatch();

    const [value, setValue] = useState("");
    const onChangeInput = (e) => {
        setValue(e.target.value);
        // console.log(value);
    };
    // const onKeyUpInput = (e) => {
    //     if(e.key === 'Enter'){
    //         dispatch(inputBigger(value))
    //     }
    // }

    return (
        <div>
            <h1 style={{ fontSize: fontSize }}>리덕스 실습!</h1>
            <input
                type="text"
                placeholder="글자크기를 입력하세요 ex) 1rem"
                value={value}
                onChange={onChangeInput}
            />
            <button
                onClick={() => {
                    dispatch(inputBigger(value));
                }}
            >
                확인
            </button>
        </div>
    );
};

export default FontInputComponent;
