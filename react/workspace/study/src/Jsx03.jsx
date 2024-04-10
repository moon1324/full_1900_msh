// name, message 화면에 출력
// 이름은 내이름, message는 환영합니다

import React from "react";

const Jsx03 = () => {
    const name = "michael";
    const message = "welcome!";
    return (
        <>
            {name}, {message}
        </>
    );
};

export default Jsx03;
