import React from "react";
import User from "./User";
import Users from "./Users";
import { useAsync } from "react-async";

// useAsync 안됨..
// const { value, isResolved } = useAsync({ promiseFn: getUsers });
// console.log(value);

// const getUsers = async () => {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const users = await response.json();
//     return users;
// };

// const userList = getUsers().then((users) =>
//     users.map((user) => <div>{user.name}</div>)
// );

const UserContainer = () => {
    const users = [
        {
            id: 1,
            name: "문승현",
            email: "test@test.com",
        },
        {
            id: 2,
            name: "문지현",
            email: "mjh@test.com",
        },
        {
            id: 3,
            name: "문수현",
            email: "msh@test.com",
        },
        {
            id: 4,
            name: "홍길동",
            email: "hgd@test.com",
        },
        {
            id: 5,
            name: "장보고",
            email: "jbg@test.com",
        },
    ];

    // 화면쪽에서 컨테이너로만 유저의 이름과 이메일 출력

    const userList = <Users users={users} />;
    return <div>{userList}</div>;
};

export default UserContainer;
