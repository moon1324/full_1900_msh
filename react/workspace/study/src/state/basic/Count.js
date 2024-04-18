import React, { useState } from "react";

const Count = () => {
    // number useState 사용, 초기값 0 설정
    const [number, setNumber] = useState(0);
    // 증가함수
    const increase = () => {
        // number+=1;
        setNumber(number + 1);
    };
    // 감소함수
    const decrease = () => {
        // number-=1;
        setNumber(number - 1);
    };

    return (
        <div>
            <button onClick={decrease}>감소</button>
            {number}
            <button onClick={increase}>증가</button>
        </div>
    );
};

export default Count;
