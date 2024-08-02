// 인터페이스를 사용하는 이유
// 오브젝트의 선언 시 프로퍼티스가 많아지고 가독성이 떨어질 수 있다.
// 가독성을 높이기 위한 인터페이스를 사용한다.

// 인터페이스(interface)란?
// 인터페이스는 객체로 구현하기위한 하나의 틀이다.
// key와 type을 미리 선언해놓고, 가독성 및 재사용성을 향상시키기 위해서 사용한다.

export interface Animal {
    species: string;
    canBark: boolean;
    numberOfWings?: number;
}

const dog: Animal = {
    species: "Dog",
    canBark: true,
};

const cat: Animal = {
    species: "Cat",
    canBark: false,
};

const bird: Animal = {
    species: "Bird",
    canBark: false,
    numberOfWings: 2,
};

// 상속
// 인터페이스 상속을 어떻게 쓸까
// extends

interface Mammal extends Animal {
    name: string;
    age: number;
}

type AnimalAlias = Mammal;

// const human: Mammal = {
const human: AnimalAlias = {
    species: "Human",
    canBark: true,
    name: "michael",
    age: 26,
};
console.log(human);

// Fixed Value
// |
interface Machine {
    powerLevel: number;
    material: "metal" | "plastic";
}

const machine: Machine = {
    powerLevel: 99999,
    // material: "no",
    material: "metal",
};

// Union Types
// 셋중 하나의 타입을 언제든지 바꿀수 있다

type UnionType = Animal | Mammal | Machine;

let unionVar: UnionType = {
    // 섞어서 사용할 수는 없다.
    // powerLevel: 99999,
    // material: "metal",
    species: "Human",
    canBark: true,
    name: "michael",
    age: 26,
};

// 일반 자료형도 Union Type으로 만들어보기
type StringOrNumber = string | number;
// let myStringOrNumber:StringOrNumber = 0;
let myStringOrNumber: StringOrNumber = "asdf";

function myUnionFunction(param: string | number): string | number {
    return param;
}

// Type Intersect
// 여러 타입을 하나의 타입으로 합쳐서 사용하고 싶을 때
// 이때 겹치는 프로퍼티의 type은 같아야하고
// 선택사항은 필수 사항으로 바뀐다

interface Type1 {
    prop1: number;
    prop2: string;
}

interface Type2 {
    prop3: number;
    prop2?: string;
}

type NewType = Type1 & Type2;

let object: NewType = {
    prop1: 10,
    prop2: "필수사항",
    prop3: 3,
};
