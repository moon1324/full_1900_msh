import React from "react";
import Component1 from "./Component1";
import Component2 from "./Component2";
import Component3 from "./Component3";

// // Component1
// const Container = () => {
//     const name = "문승현";
//     const age = 26;

//     return (
//         <>
//             <Component1 name={name} age={age} />
//         </>
//     );
// };

// // Component2
// const Container = () => {
//     const style = {
//         color:"red "
//     }

//     return (
//         <>
//             <Component2 style={style}/>
//         </>
//     )
// }

// Component3
const Container = () => {
    // 컴포넌트 3을 만든 후 자식 컴포넌트에게 이름, 나이, 전화번호, 주소를 전달한 후 화면에 출력
    const user = {
        name: "문승현",
        age: "28",
        mobile: "010-1234-1234",
        address: "서울시 강남구 역삼동",
    };

    return (
        <>
            <Component3 user={user} />
        </>
    );
};

export default Container;
