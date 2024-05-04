import { createAction, handleActions } from "redux-actions";

// 1번실습
// type생성
const BIGGER = "font/BIGGER";
// action생성
export const bigger = createAction(BIGGER);

// 2번 예제
const INPUTBIGGER = "font/INPUTBIGGER";
export const inputBigger = createAction(INPUTBIGGER, (fontSize) => fontSize);

const initialState = {
    fontSize: "1rem",
};

const font = handleActions(
    {
        [BIGGER]: (state, action) => ({ fontSize: "3rem" }),
        [INPUTBIGGER]: (state, action) => ({ fontSize: action.payload }),
    },
    initialState
);

export default font;
