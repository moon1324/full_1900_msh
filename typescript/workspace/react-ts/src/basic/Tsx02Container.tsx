import React from "react";
import Tsx02 from "./Tsx02";
import { User } from "./models/User";

// React.FC란
// React에서 함수형 컴포넌트를 정의할 때 사용하는 Typescript의 Type이다
const Tsx02Container: React.FC = () => {
    const user: User = {
        name: "michael",
        age: 20,
        address: "서울시 서초구",
        hobby: {
            main: "cooking",
            sub: "golf",
        },
        phone: "01036542969",
        recommender: [
            { name: "paul", age: 20, address: "auckland" },
            { name: "steve", age: 20, address: "전라북도 전주시" },
        ],
    };
    return (
        <div>
            <Tsx02 user={user} />
        </div>
    );
};

export default Tsx02Container;
