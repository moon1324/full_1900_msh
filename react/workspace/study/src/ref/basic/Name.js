import React, { useRef, useState } from "react";

// 사용자가 입력한 이름을 p태그에 실시간으로 작성되도록 구현
// 버튼을 클릭하면 이름 뒤에 "님" 이 붙도록 구현
// 입력 후 p태그에 반영
const Name = () => {
    // useState 사용
    const [result, setResult] = useState();
    // inputRef
    const inputRef = useRef();
    // nameRef
    const nameRef = useRef();
    // 버튼 클릭했을 시 작동함수
    const onClickToPutName = () => {
        // console.log로 inputRef 체크
        // console.log(inputRef.current.value);
        // input안의 값 + "님" 변경
        setResult(inputRef.current.value + "님");
        // p태그의 result값 + "님" 변경
        setResult(nameRef.current.innerText + "님");
    };
    const onChangeSetName = (e) => {
        // 변화가 생길때마다 event안에 담긴 value로 input태그 result값 변경
        setResult(e.target.value);
    };

    return (
        <>
            <input
                ref={inputRef}
                onChange={onChangeSetName}
                type="text"
                value={result}
            />
            <p ref={nameRef}>{result}</p>
            <button onClick={onClickToPutName}>완료 버튼</button>
        </>
    );
};

export default Name;
