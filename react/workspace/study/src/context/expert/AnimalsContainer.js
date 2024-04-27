import React from "react";

const AnimalsContainer = () => {
    // Provider로 Context를 제공해야한다.
    return (
        <div>
            // Context에 저장된 동물 세마리를 버튼으로 출력 // 동물 세마리의
            초기 값 "누렁이", "점박이", "야옹이" // input에 동물을 입력 후
            엔터를 치면 동물 버튼을 추가 // 동물 버튼을 클릭하면 해당 버튼을
            삭제 // 각 context에 선언된 insert(), delete() 메서드를 사용
        </div>
    );
};

export default AnimalsContainer;