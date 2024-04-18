import React, { useState } from "react";

const Checkbox = () => {
    // useState사용, 초기값 빈 배열 설정
    const [message, setMessage] = useState([]);
    // 체크박스 클릭했을 시 실행될 함수
    const onClickToCheck = (e) => {
        // event console.log로 확인
        // console.log(e);
        // 체크박스가 체크된 상태일 시
        if (e.target.checked) {
            // 체크박스가 가지고있는 값을 value에 저장
            let value = e.target.value;
            // message에 클릭된 값을 추가한 배열을 새로 반환
            setMessage(message.concat(value));
            // setMessage([...message, value]);
        } else {
            // 체크박스 체크 해제 시 message에서 체크해제된 체크박스의 갑만 제외한 나머지 반환
            setMessage(
                message.filter((message) => message !== "e.target.value")
            );
        }
    };
    return (
        <div>
            <div>
                <span>front-end</span>
                <input
                    type="checkbox"
                    value="front-end"
                    onClick={onClickToCheck}
                />
            </div>
            <div>
                <span>back-end</span>
                <input
                    type="checkbox"
                    value="back-end"
                    onClick={onClickToCheck}
                />
            </div>
            <div>
                <span>ai</span>
                <input type="checkbox" value="ai" onClick={onClickToCheck} />
            </div>
            <div>
                <h1>
                    {message.map((message, i) => (
                        <p key={i}>{message}</p>
                    ))}
                </h1>
            </div>
        </div>
    );
};

export default Checkbox;
