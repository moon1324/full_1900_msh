import React from "react";

const Tsx01 = () => {
    // 설명형 문법
    const name: string = "michael";
    const message: string = "welcome!";
    const isTrue: boolean = true;
    const arr: [] = [];
    const numArr: number[] = [1, 2, 3];
    const strArr: string[] = ["michael", "paul", "steve"];
    return (
        <div>
            <h1>
                {name}, {message}
            </h1>
        </div>
    );
};

export default Tsx01;
