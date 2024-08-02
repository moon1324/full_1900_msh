"use strict";
// enum이란?
// 상수를 모아놓은 형태이며, 값에 의미를 부여함으로써 오타를 방지하기 위해 사용한다.
// 기본적으로 인덱스는 0으로 시작해서 1씩 증가한다
var BasicDirection;
(function (BasicDirection) {
    BasicDirection[BasicDirection["UP"] = 0] = "UP";
    BasicDirection[BasicDirection["DOWN"] = 1] = "DOWN";
    BasicDirection[BasicDirection["LEFT"] = 2] = "LEFT";
    BasicDirection[BasicDirection["RIGHT"] = 3] = "RIGHT";
})(BasicDirection || (BasicDirection = {}));
// console.log(BasicDirection.UP);
// 젓 번째 인덱스만 설정해도 다음 인덕스는 자동으로 이전 인덱스의 +!로 설정된다
var ImplicitDerection;
(function (ImplicitDerection) {
    ImplicitDerection[ImplicitDerection["UP"] = 8] = "UP";
    ImplicitDerection[ImplicitDerection["DOWN"] = 9] = "DOWN";
    ImplicitDerection[ImplicitDerection["LEFT"] = 10] = "LEFT";
    ImplicitDerection[ImplicitDerection["RIGHT"] = 11] = "RIGHT";
})(ImplicitDerection || (ImplicitDerection = {}));
console.log(ImplicitDerection.LEFT);
var StringDirection;
(function (StringDirection) {
    StringDirection["UP"] = "UP";
    StringDirection["DOWN"] = "DOWN";
    StringDirection["LEFT"] = "LEFT";
    StringDirection["RIGHT"] = "RIGHT";
})(StringDirection || (StringDirection = {}));
console.log(StringDirection.DOWN);
const myStringEnumVar = StringDirection["UP"];
const myEnumFunc = (direction) => {
    console.log(`We are going ${direction}`);
};
myEnumFunc(StringDirection.UP);
