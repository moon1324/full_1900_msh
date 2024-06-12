import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const MyPage = () => {
    // redux 상태
    const previousURL = useSelector((state) => state.user.previousURL);
    const currentLogin = useSelector((state) => state.user.isLogin);
    const currentUser = useSelector((state) => state.user.currentUser);
    // 현재 로그인 상태를 확인하여 아닌경우
    if (!currentLogin) {
        // replace 왔던 기록을 없애버린다. history
        return <Navigate to={previousURL} replace={true} />;
    }

    return (
        <div>
            <div>{currentUser.email}</div>
            <div>{currentUser.email}</div>
            <div>{currentUser.email}</div>
        </div>
    );
};

export default MyPage;
