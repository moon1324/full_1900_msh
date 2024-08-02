// React 18 이상에서 React.FC children이 사라졌다
// PropsWithChildren으로 명시한다

import React from "react";

type BasicProps = {
    printConsoleName: () => void;
};

const Basic = ({ printConsoleName }: BasicProps) => {
    return (
        <div>
            <button onClick={printConsoleName}>버튼</button>
        </div>
    );
};

export default Basic;
