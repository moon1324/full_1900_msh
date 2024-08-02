"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 1. myAnimal 이름과 나이 출력
const myAnimal = {
    name: "Benji",
    age: 8,
};
console.log(myAnimal.name);
console.log(myAnimal.age);
// 2. 고양이
// 이름, 나이, 취미, 울음소리 출력
const myCat = {
    name: "Henry",
    age: 4,
    hobby: "catch ball",
    speak: () => "야옹",
};
console.log(myCat.name);
console.log(myCat.age);
console.log(myCat.hobby);
console.log(myCat.speak());
// 3. 강아지 출력
// 이름, 나이, 잠, 개인기
const myDog = {
    name: "Benji",
    age: 8,
    sleep: ["대자로 누워 자기"],
    skill: () => "멍멍",
};
console.log(myDog.name, myDog.age, myDog.sleep, myDog.skill());
const myHybrid = {
    name: "Benji",
    age: 8,
    sleep: ["사람처럼 자기"],
    skill: () => "밥 줘",
    hobby: "5959",
    speak: () => "야옹 멍",
};
// 5. 하이브리드 이름, 나이, 취미, 울음소리, 개인기, feed 출력
// 취미 hobby // 5959
// 울음 spaek // '야옹 멍'
// 잠자기 sleep // [사람처럼 자기]
// 개인기 skill '밥 줘'
console.log(myHybrid.hobby, myHybrid.speak(), myHybrid.sleep, myHybrid.skill());
