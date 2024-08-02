import { combineReducers } from "redux";
import count from "./count";
import user from "./user";

const rootReducer = combineReducers({
    count,
    user,
});

export default rootReducer;

// Reducer의 return type
export type ReduxState = ReturnType<typeof rootReducer>;
