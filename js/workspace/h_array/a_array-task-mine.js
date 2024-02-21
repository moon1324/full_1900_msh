// let datas = [];
// for (let i = 0; i < 5; i++) {
//     datas.push(`${i + 1}`);
//     console.log(datas);
// }
// for (let i = 0; i < datas.length; i++) {
//     datas[`${i}`] = datas[`${i}`] + 5;
//     datas.splice(`${i}`, `${i + 6}`);
//     console.log(datas[`${i}`]);
// }

// // datas라는 Array객체를 한 개 선언한다.
// // datas에 1~10까지 중 짝수만 담는다.
// // datas의 모든 요소(값)를 ":"으로 연결하여 출력한다.

// let datas = [];

// // i로 반복을 돌려서 짝수가 아닌경우 빈방이된다
// // 5번 반복을 돌려야 맞다
// for (let i = 0; i < 10; i++) {
//     if (i % 2) {
//         datas[i] = i + 1;
//     }
// }
// console.log(datas);

// console.log(datas.join(":"));

// // datas라는 Array객체를 한 개 선언한다.
// let datas = [];
// // // datas에 1~10까지 담는다.
// for (let i = 0; i < 10; i++) {
//     datas[i] = i + 1;
// }
// console.log(datas);
// // // 첫 번째 값을 제외한 나머지 요소(값)를 추출한다.
// console.log(datas.slice(1));
// // // 추출한 Array객체에서 홀수만 출력한다.
// for (let i = 0; i < datas.length; i++) {
//     if (i % 2 === 0) {
//         console.log(datas[i]);
//     }
// }

// // datas라는 Array객체를 한 개 선언한다.
// let datas = [];
// // datas에 1~10까지 담는다.
// for (let i = 0; i < 10; i++) {
//     datas[i] = i + 1;
// }
// console.log(datas);
// // datas에서 짝수만 삭제한다.
// for (data in datas) {
//     console.log(data);
//     if (data % 2) {
//         datas.splice(data, 1);
//     }
// }
// console.log(datas);

// datas라는 Array객체를 한 개 선언한다.
// let datas = [];
// // datas에 1~10까지 담는다.
// for (let i = 0; i < 10; i++) {
//     datas[i] = i + 1;
// }
// // 홀수만 모두 2를 빼주기
// for (data of datas) {
//     if (data % 2 == 1) {
//         datas.splice(data, data, data - 2);
//     }
// }
// console.log(datas);

// 회원정보
// 번호, 이름, 나이
// 1, user1, 18
// 2, user2, 19
// 3, user3, 20

function User(id, name, age) {
    this.id = id;
    this.name = name;
    this.age = age;
}

let user_1 = new User(1, "user1", 18);
let user_2 = new User(2, "user2", 19);
let user_3 = new User(3, "user3", 20);

let users = [user_1, user_2, user_3];

// // 회원 목록중 회원 이름만 출력
// 내가한 것
// function printName(User) {
//     console.log(User.name);
// }

// for (data of datas) {
//     console.log(data);
//     printName(data.name);
// }

// 정답
users.forEach((user) => {
    console.log(user.name);
});

// 회원 목록중 나이가 20살 이상인 회원 추출 후 전체 정보 출력

// 정답
users
    .filter((user) => user.age >= 20)
    .forEach((user) => {
        console.log(`${user.id}. ${user.name}: ${user.age}세`);
    });

// 상품정보
// 번호, 상품명, 가격, 구매회원
// 3, 상품1, 3000, user1
// 8, 상품3, 1000, user2
// function User(id, name, age) {
//     this.id = id;
//     this.name = name;
//     this.age = age;
// }
// let user_1 = new User(1, "user1", 18);
// let user_2 = new User(2, "user2", 19);

// 내가한것
// function Product(id, name, price, User) {
//     this.id = id;
//     this.name = name;
//     this.price = price;
//     this.User = User;
// }
// 내가한것
// let product_1 = new Product(3, "상품1", 3000, user_1);
// let product_2 = new Product(8, "상품3", 1000, user_2);

// // 상품목록을 상품을 구매한 구매 회원의 목록으로 기존 상품목록을 변경한다
// // 내가한것
// let products = [product_1, product_2];

// // 내가한것
// const users = products.map((products) => products.User.name);
// console.log(users);

// // 구매자의 전체 정보를 출력한다.

// 정답
function Product(number, name, price, user) {
    this.number = number;
    this.name = name;
    this.price = price;
    this.user = user;
}

let products = [
    new Product(3, "상품1", 3000, users[0]),
    new Product(8, "상품3", 1000, users[1]),
];

// 상품 목록을, 상품을 구매한 구매 회원의 목록으로 변경한다.
let buyers = products.map((product) => product.user);

// 구매자의 전체 정보를 출력한다.
buyers.forEach((buyer) => {
    console.log(`${buyer.id}. ${buyer.name}: ${buyer.age}살`);
});

// 1-100까지 합을 출력
// let numbers = new Array();
// for (let i = 0; i < 100; i++) {
//     numbers[i] = i + 1;
// }
// console.log(numbers);

let numbers = new Array(100).fill(0).map((_, i) => i + 1);
const total = numbers.reduce((total, number) => total + number);
console.log(total);
