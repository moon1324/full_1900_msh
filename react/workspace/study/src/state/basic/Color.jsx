import React, { useState } from "react";

// 빨간색 버튼을 누르면 글자색을 빨갛게
// 파란색 버튼을 누르면 글자색을 파랗게
// 핑크색 입력 시 글자의 색갈을 없앤다.

const Color = () => {
    const [style, setStyle] = useState({});
    const [result, setResult] = useState("초기값");
    const setColorRed = () => {
        setStyle({
            color: "red",
        });
    };
    const setColorBlue = () => {
        setStyle({
            color: "blue",
        });
    };
    const pinkInput = (e) => {
        setResult(e.target.value);
        e.target.value === "핑크색" && setStyle({});
    };

    return (
        <div>
            <p style={style}>{result}</p>
            <button onClick={setColorRed}>빨간색</button>
            <button onClick={setColorBlue}>파란색</button>
            <input type="text" onChange={pinkInput} />
        </div>
    );
};

export default Color;
