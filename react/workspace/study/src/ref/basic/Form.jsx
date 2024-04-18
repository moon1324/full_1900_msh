import React from "react";

const Form = (props) => {
    // 실습
    // props 받아서 form태그에
    // input태그 4개 이름, 나이, 핸드폰번호, 이메일
    // 화면쪽에서 유효값 검사

    // 비구조화 할당
    const { inputsRef, formRef, onClickInputValue, style } = props;
    return (
        <div>
            <form style={style} action="" ref={formRef}>
                <div>
                    <span>아이디</span>
                    <input
                        type="text"
                        name="userName"
                        ref={(element) => {
                            inputsRef.current[0] = element;
                        }}
                    />
                </div>

                <div>
                    <span>나이</span>
                    <input
                        type="text"
                        name="age"
                        ref={(element) => {
                            inputsRef.current[1] = element;
                        }}
                    />
                </div>

                <div>
                    <span>폰번호</span>
                    <input
                        type="text"
                        name="mobile"
                        ref={(element) => {
                            inputsRef.current[2] = element;
                        }}
                    />
                </div>

                <div>
                    <span>이메일</span>
                    <input
                        type="text"
                        name="email"
                        ref={(element) => {
                            inputsRef.current[3] = element;
                        }}
                    />
                </div>

                <button type="button" onClick={onClickInputValue}>
                    전송
                </button>
            </form>
        </div>
    );
};

export default Form;
