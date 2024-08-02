import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ReduxState } from "../modules";
import { AppDispatch } from "..";
import { userInsert, showPhone } from "../modules/user";

/* 
    #1 버튼을 누르면 유저의 정보를 redux에 추가후
    state값 콘솔에 출력하기

    userInsert
    myUser = {
        name : "김세환",
        email : "codefuling@gmail.com",
        address : "경기도 구리시",
        phone : ""
    }


 #2 유저에게 연락처를 입력 받아서 화면에 h1태그로 출력하기
    showPhone
*/

const User = () => {
    const userProfile = useSelector((state: ReduxState) => state.user.user);
    // console.log(userProfile);
    const dispatch = useDispatch<AppDispatch>();

    type UserProps = {
        [index: string]: string;
    };

    const myUser: UserProps = {
        name: "michael",
        email: "michaelm00n@naver.com",
        address: "서울시 서초구",
        phone: "",
    };

    const onClickUserInsert = () => {
        dispatch(userInsert(myUser));
    };

    const [value, setValue] = useState("");
    const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };

    const myPhone: UserProps = {
        ...myUser,
        phone: value,
    };

    const onClickShowPhone = () => {
        dispatch(showPhone(myPhone));
    };
    return (
        <div>
            <div>
                <h1>{userProfile && userProfile.name}</h1>
                <h1>{userProfile && userProfile.email}</h1>
                <h1>{userProfile && userProfile.address}</h1>
                <h1>{userProfile && userProfile.phone}</h1>
            </div>

            <button onClick={onClickUserInsert}>User Insert</button>

            <input type="text" onChange={onChangeValue} value={value} />
            <button onClick={onClickShowPhone}>Show Phone</button>
        </div>
    );
};

export default User;
