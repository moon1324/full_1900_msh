import { createAction, handleActions } from "redux-actions";

// type 셍성
const SET_PREVIOUS_URL = "user/SET_PREVIOUS_URL";
const SET_USER = "user/SET_USER";
const SET_USER_STATUS = "user/SET_USER_STATUS";

// 초기값
const userInitialValue = {
    currentUser: {},
    isLogin: false,
    previousURL: "",
};

// action을 생성
export const setPreviousURL = createAction(SET_PREVIOUS_URL, (previousURL) => previousURL);
export const setUser = createAction(SET_USER, (currentUser) => currentUser);
export const setUserStatus = createAction(SET_USER_STATUS, (isLogin) => isLogin);

// reducer 생성
const user = handleActions(
    {
        [SET_PREVIOUS_URL]: (state = userInitialValue, action) => ({ ...state, previousURL: action.payload }),
        [SET_USER]: (state = userInitialValue, action) => ({ ...state, currentUser: action.payload }),
        [SET_USER_STATUS]: (state = userInitialValue, action) => ({ ...state, isLogin: action.payload }),
    },
    userInitialValue
);

export default user;
