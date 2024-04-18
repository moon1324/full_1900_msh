import React, { useRef } from "react";
import Form from "./Form";
const CheckInput = () => {
    // form의 스타일
    const style = {
        display: "flex",
        flexDirection: "column",
        width: "200px",
    };

    // input들의 useRef 사용 초기값을 빈배열로 설정
    const inputsRef = useRef([]);
    const formRef = useRef();
    // 클릭했을시 form의 값들을 전송하는 함수
    const onClickInputValue = () => {
        // 유효성검사
        for (let input of inputsRef.current) {
            // input에 value가 들어오지 않았을 시 에러메세지 출력
            if (!input.value) {
                console.log(input.name + " error");
                return;
            }
        }
        // form 전송
        formRef.current.submit();
    };

    return (
        <div>
            <Form
                style={style}
                inputsRef={inputsRef}
                formRef={formRef}
                onClickInputValue={onClickInputValue}
            />
        </div>
    );
};

export default CheckInput;
