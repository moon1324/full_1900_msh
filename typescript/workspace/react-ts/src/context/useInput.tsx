import { useState } from "react";

const useInput = (initlalValue: any) => {
    const [input, setInput] = useState(initlalValue);

    // const onChangeInput = (e:React.ChangeEvent<HTMLInputElement>) => {
    const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
    };

    return [input, onChangeInput];
};

export default useInput;
