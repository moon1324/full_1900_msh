"use strict";
// 인터페이스를 사용하는 이유
// 오브젝트의 선언 시 프로퍼티스가 많아지고 가독성이 떨어질 수 있다.
// 가독성을 높이기 위한 인터페이스를 사용한다.
Object.defineProperty(exports, "__esModule", { value: true });
const dog = {
    species: "Dog",
    canBark: true,
};
const cat = {
    species: "Cat",
    canBark: false,
};
const bird = {
    species: "Bird",
    canBark: false,
    numberOfWings: 2,
};
// const human: Mammal = {
const human = {
    species: "Human",
    canBark: true,
    name: "michael",
    age: 26,
};
console.log(human);
const machine = {
    powerLevel: 99999,
    // material: "no",
    material: "metal",
};
let unionVar = {
    // 섞어서 사용할 수는 없다.
    // powerLevel: 99999,
    // material: "metal",
    species: "Human",
    canBark: true,
    name: "michael",
    age: 26,
};
// let myStringOrNumber:StringOrNumber = 0;
let myStringOrNumber = "asdf";
function myUnionFunction(param) {
    return param;
}
let object = {
    prop1: 10,
    prop2: "필수사항",
    prop3: 3,
};
