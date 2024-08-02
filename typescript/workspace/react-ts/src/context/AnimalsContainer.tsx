import React from "react";
import { AnimalsProvider } from "./AnimalsContext";
import Animals from "./Animals";

const AnimalsContainer = () => {
    return (
        <AnimalsProvider>
            <Animals />
        </AnimalsProvider>
    );
};

export default AnimalsContainer;
