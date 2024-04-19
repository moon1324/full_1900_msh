import React from "react";

const Food = (props) => {
    const { inputsRef, formRef, onClickAddFood } = props;
    return (
        <div>
            <form action="" ref={formRef}>
                <input
                    type="text"
                    name="koreanName"
                    ref={(element) => {
                        inputsRef.current[0] = element;
                    }}
                />
                <input
                    type="text"
                    name="englishName"
                    ref={(element) => {
                        inputsRef.current[1] = element;
                    }}
                />
                <button type="button" onClick={onClickAddFood}>
                    추가
                </button>
            </form>
        </div>
    );
};

export default Food;
