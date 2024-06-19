// // npx tsc -w
// // console.log("안녕 번역중이니?");

// // console.log("설치 끝!");

// // const data = 10 + "50";
// // console.log(data);

// // const price = 6000;
// // console.log(price + "원"-2);

// // 함축형 문법(implicit type assertion)
// // 값을 통해 타입을 알려주는 문법

// let strImpl = "string value"; // string
// let numImpl = 0.7; // number
// let boolImpl = false; // boolean
// let arrayImpl = [1, 2, 3, 4]; // number[]
// let arrayStrImpl = ["a", "b", "c", "d"]; // string[]

// console.log(strImpl);
// console.log(numImpl);
// console.log(boolImpl);
// console.log(arrayImpl);
// console.log(arrayStrImpl);

// // strImpl = 0;
// // numImpl = "invalid value"
// // boolImpl = 1;
// // arrayImpl.push("data")

// 설명형 문법(explicit type annotation)
let strExpl: string = "string value";
let numExpl: number = 52.555;
let boolExpl: boolean = true;
let arrayExpl: number[] = [1, 2, 3, 4];

console.log(strExpl);
console.log(numExpl);
console.log(boolExpl);
console.log(arrayExpl);
