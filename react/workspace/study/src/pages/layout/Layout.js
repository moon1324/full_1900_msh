import React from "react";
import { Outlet } from "react-router-dom";
// Outlet의 역할
// 라우팅에서 children으로 들어오는 컴포넌트를 모두 화면에 뿌려주는 컴포넌트
// {Outlet}으로 불러오는게 아니라 <Outlet />으로 불러온다

const Layout = () => {
    return (
        <div>
            <header>헤더</header>
            <main>
                <Outlet />
            </main>
            <footer>푸터</footer>
        </div>
    );
};

export default Layout;
