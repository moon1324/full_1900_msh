import React from "react";
import Basic from "./Basic";

const Container: React.FC = () => {
    const name: string = "michael";
    const printConsoleName = () => {
        console.log(name);
    };
    return (
        <div>
            <Basic printConsoleName={printConsoleName} />
        </div>
    );
};

export default Container;
