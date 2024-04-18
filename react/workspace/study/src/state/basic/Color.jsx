import React, { useState } from "react";

// 빨간색 버튼을 누르면 글자색을 빨갛게
// 파란색 버튼을 누르면 글자색을 파랗게
// 핑크색 입력 시 글자의 색갈을 없앤다.

const Color = () => {
    // color useState 사용, 초기값 "" 설정
    const [color, setColor] = useState("");
    // result useState 사용, 초기값 "초기값" 설정
    const [result, setResult] = useState("초기값");
    // 빨간색
    const setColorRed = () => {
        setColor("red");
    };
    // 파란색
    const setColorBlue = () => {
        setColor("blue");
    };
    // 입력한 키 value에 입력
    const onResult = (e) => {
        // value에 input의 입력값 담기
        let value = e.target.value;
        // value가 "핑크색" 일 때
        if (value === "핑크색") {
            // ""반환해서 color초기화
            setColor("");
        }
        return setResult(value);
    };

    return (
        <div>
            {/* 스타일 객체 안의 color??? */}
            <p style={{ color }}>{result}</p>
            <button onClick={setColorRed}>빨간색</button>
            <button onClick={setColorBlue}>파란색</button>
            <input type="text" onChange={onResult} />
        </div>
    );
};

// const Color = () => {
//     const [style, setStyle] = useState({});
//     const [result, setResult] = useState("초기값");
//     const setColorRed = () => {
//         setStyle({
//             color: "red",
//         });
//     };
//     const setColorBlue = () => {
//         setStyle({
//             color: "blue",
//         });
//     };
//     const pinkInput = (e) => {
//         setResult(e.target.value);
//         e.target.value === "핑크색" && setStyle({});
//     };

//     return (
//         <div>
//             <p style={style}>{result}</p>
//             <button onClick={setColorRed}>빨간색</button>
//             <button onClick={setColorBlue}>파란색</button>
//             <input type="text" onChange={pinkInput} />
//         </div>
//     );
// };

export default Color;
