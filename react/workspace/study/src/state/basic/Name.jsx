import React, { useState } from "react";

const Name = () => {
    // result useState 사용
    const [result, setResult] = useState("초기값");
    // input의 onchange를 위한 viewResult 함수
    const viewResult = (e) => {
        // event console.log로 체크
        console.log(e);
        // target에 담긴 value로 result값 변경
        setResult(e.target.value);
    };
    return (
        <div>
            <p>{result}</p>
            <input type="text" onChange={viewResult} />
        </div>
    );
};

export default Name;
