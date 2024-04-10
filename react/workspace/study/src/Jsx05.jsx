import React from "react";

// age는 상수로 나이를 설정
// 19세 이하라면 "입장 불가"
// 성인이라면 "입장 가능"
// age가 짝수라면 "당첨"
// 짝수가 아니라면 "꽝"을 화면에 출력

const Jsx05 = () => {
    const age = 21;
    // 비구조화 할당
    const [pass, fail, lucky, unlucky] = ["입장가능", "입장불가", "당첨", "꽝"];

    // 조건식 변수에 담음
    const isAdult = age >= 19;
    const isEven = age % 2 === 0;

    // 컴포넌트 제작
    const passComponent = <div>{pass}</div>;
    const failComponent = <div>{fail}</div>;
    const luckyComponent = <div>{lucky}</div>;
    const unluckyComponent = <div>{unlucky}</div>;

    // 삼항연산자
    const enter = isAdult ? passComponent : failComponent;
    const win = isEven ? luckyComponent : unluckyComponent;

    // JSX는 if문을 사용할 수 없기 때문에 삼항 연산자를 지원한다.
    // [조건식] ? [참일 때 렌더링할 JSX] : [거짓일 때 랜더링할 JSX]
    // [조건식] && [참일때 랜더링할 JSX], 거짓이면 아무것도 출력되지 않음
    // && 연산자 앞의 조건식이 false이면 뒤를 실행하지 않으며, false라는 값은 랜더링 되지 않음
    return (
        <div>
            {/* <div>나이 : {age}</div>
            <div>입장여부 : {age < 19 ? <>입장 불가</> : <>입장 가능</>}</div>
            <div>당첨여부 : {age % 2 === 0 ? <>당첨</> : <>꽝</>}</div> */}
            {enter}
            {win}
        </div>
    );
};

export default Jsx05;
