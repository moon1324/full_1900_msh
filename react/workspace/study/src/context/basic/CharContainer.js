import React from "react";
import A from "./A";
import CharContext from "../CharContext";

const CharContainer = () => {
    return (
        <div>
            <CharContext.Provider value={{ fontSize: "2rem" }}>
                <A />
            </CharContext.Provider>
        </div>
    );
};

export default CharContainer;
