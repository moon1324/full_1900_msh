import React from "react";
import { useRef } from "react";
const Check = () => {
    // input들의 useRef 사용 초기값을 빈배열로 설정
    const inputRef = useRef([]);
    const formRef = useRef();

    // 전송 버튼 클릭 시 실행될 함수
    const onClickToCheck = () => {
        // inputRef안의 배열의 값 반복문으로 검사
        for (let input of inputRef.current) {
            // input의 value가 들어오지 않았을 시 에러메세지 출력
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
            <form ref={formRef}>
                <div>
                    <span>아이디</span>
                    <input
                        name="id"
                        ref={(element) => {
                            inputRef.current[0] = element;
                        }}
                    />
                </div>
                <div>
                    <span>비밀번호</span>
                    <input
                        name="password"
                        ref={(element) => {
                            inputRef.current[1] = element;
                        }}
                    />
                </div>
                <button type="button" onClick={onClickToCheck}>
                    전송
                </button>
            </form>
        </div>
    );
};

export default Check;
