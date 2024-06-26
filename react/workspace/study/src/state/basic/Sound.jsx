import React, { useState } from "react";

const Sound = () => {
    // 강아지 버튼, 고양이 버튼
    // 강아지 버튼을 눌렀을 때 강아지의 울음소리가 나오도록 출력
    // 고양이 버튼을 눌렀을 때 고양이의 울음소리가 나오도록 출력

    // useState 사용
    const [sound, setSound] = useState("");
    // 강아지 버튼 함수
    const dogButton = () => {
        // sound 변경
        setSound("멍 화요일 화난다! 🐶");
    };
    // 고양이 버튼 함수
    const catButton = () => {
        // sound 변경
        setSound("고양이는 야옹~ 😸");
    };

    return (
        <div>
            <p>{sound}</p>
            <button onClick={dogButton}>강아지 버튼</button>
            <button onClick={catButton}>고양이 버튼</button>
        </div>
    );
};

export default Sound;
