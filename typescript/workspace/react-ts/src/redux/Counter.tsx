import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ReduxState } from "../modules";
import { AppDispatch } from "..";
import { decrease, increase } from "../modules/count";

const Counter = () => {
    const number = useSelector((state: ReduxState) => state.count.number);
    const dispatch = useDispatch<AppDispatch>();

    return (
        <div>
            <button
                onClick={() => {
                    dispatch(decrease());
                }}
            >
                -1감소
            </button>
            <h1>{number}</h1>
            <button
                onClick={() => {
                    dispatch(increase());
                }}
            >
                +1증가
            </button>
        </div>
    );
};

export default Counter;
