import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Tsx01 from "./basic/Tsx01";
import Tsx02Container from "./basic/Tsx02Container";
import Container from "./basic/Container";
import CountContainer from "./state/CountContainer";
import GenericState from "./state/GenericState";
import PostContainer from "./fetch/PostContainer";
import B from "./context/basic/B";
import UserContainer from "./fetch/task/UserContainer";
import AnimalsContainer from "./context/AnimalsContainer";
import Counter from "./redux/Counter";
import User from "./redux/User";

function App() {
    return (
        <>
            {/* <Tsx01 /> */}
            {/* <Tsx02Container /> */}
            {/* <Container /> */}
            {/* <CountContainer /> */}
            {/* <GenericState /> */}
            {/* <PostContainer /> */}
            {/* <UserContainer /> */}
            {/* <AProvider>
                <B/>
            </AProvider> */}
            {/* <AnimalsContainer /> */}
            {/* <Counter /> */}
            <User />
        </>
    );
}

export default App;
