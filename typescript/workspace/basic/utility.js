"use strict";
// 1. Partial
// 인터페이스에서 타입들을 optional로 지정하는 속성
const me = {
    email: "michaelm00n@naver.com",
    address: "서울시 서초구",
    // mobile: "01036542969",
};
const myLaptop = {
    id: 1,
    name: "laptop",
    price: 1000000,
    brand: "apple",
};
const myProduct = {
    id: 1,
    name: "laptop",
    price: 1000000,
    brand: "apple",
};
const myProduct2 = {
    id: 1,
    name: "laptop",
    price: 1000000,
};
const myLaptop2 = {
    id: 10,
};
const myLaptop3 = {
    price: 5000,
    stock: 1,
};
