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
import { act } from "react";
import { createAction, handleActions } from "redux-actions";

const USER_INSERT = "user/USER_INSERT" as const;
const SHOW_PHONE = "user/SHOW_PHONE" as const;

export const userInsert = createAction(USER_INSERT);
export const showPhone = createAction(SHOW_PHONE);

type UserAction = ReturnType<typeof userInsert> | ReturnType<typeof showPhone>;

type InitialProps = {
    user: { [index: string]: string };
    // name: string;
    // email: string;
    // address: string;
    // phone: string;
};

const initialState: InitialProps = {
    user: {
        name: "",
        email: "",
        address: "",
        phone: "",
    },
};

const user = handleActions<InitialProps>(
    {
        [USER_INSERT]: (state: InitialProps, action: UserAction) => ({ user: action.payload }),
        [SHOW_PHONE]: (state: InitialProps, action: UserAction) => ({ ...state, user: action.payload }),
    },
    initialState
);

export default user;
