import React, { useState } from "react";
import { StateUser } from "./models/user";

const GenericState = () => {
    const userData: StateUser = {
        name: "initial user",
        age: 0,
        status: [""],
    };
    const changeUser: StateUser = {
        name: "michael",
        age: 26,
        status: ["여러가지", true, "value", 30],
    };
    const [user, setUser] = useState<StateUser>(userData);
    const onClickToChangeUser = () => {
        setUser(changeUser);
    };
    return (
        <div>
            {user.name}
            <button onClick={onClickToChangeUser}>change</button>
        </div>
    );
};

export default GenericState;
