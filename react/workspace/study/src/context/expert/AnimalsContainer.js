import React from "react";
import { AnimalsProvider } from "../AnimalsContext";
import Animals from "./Animals";

const AnimalsContainer = () => {
    // Provider로 Context를 제공해야한다.
    return (
        <div>
            <AnimalsProvider>
                <Animals />
            </AnimalsProvider>
        </div>
    );
};

export default AnimalsContainer;
