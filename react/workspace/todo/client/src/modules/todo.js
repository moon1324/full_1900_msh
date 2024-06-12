// todo redux로 추가해보기
import { createAction, handleActions } from "redux-actions";

const todoInitialValue = {};

const todo = handleActions(
    {
        // reducer
    },
    todoInitialValue
);

export default todo;
