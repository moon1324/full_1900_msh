import React from "react";

// const Component3 = (props) => {
//     console.log(props);

//     return (
//         <ul>
//             <li>이름: {props.user.name}</li>
//             <li>나이: {props.user.age}</li>
//             <li>전화번호: {props.user.mobile}</li>
//             <li>주소: {props.user.address}</li>
//         </ul>
//     );
// };

// 비구조화 할당
const Component3 = ({ user }) => {
    // const {user} = props;
    const { name, age, mobile, address } = user;

    return (
        <ul>
            <li>이름: {name}</li>
            <li>나이: {age}</li>
            <li>전화번호: {mobile}</li>
            <li>주소: {address}</li>
        </ul>
    );
};

export default Component3;
