import React, { useContext } from "react";
import { AnimalsContext } from "./AnimalsContext";

// type Props = {
//     display?: string;
//     listStyle?: string;
// };

// const Animal = ({ styleFlex, styleList }: { styleFlex: Props; styleList: Props }) => {
//     return <div></div>;
// };

type Props = {
    styleFlex: {
        display?: string;
    };

    styleList: {
        listStyle?: string;
    };
};

const Animal = ({ styleFlex, styleList }: Props) => {
    const { state, actions } = useContext(AnimalsContext);
    const AnimalsList = state.animals.map((animal, i) => (
        <li key={i} style={styleList}>
            <button
                onClick={() => {
                    actions.remove(i);
                }}
            >
                {animal}
            </button>
        </li>
    ));
    return <ul style={styleFlex}>{AnimalsList}</ul>;
};

export default Animal;
