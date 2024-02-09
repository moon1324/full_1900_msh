// // 두 정수의 덧셈 결과 출력

// function addNumbers(number1, number2, callback) {
//     if (callback) {
//         callback(number1 + number2);
//     }
//     return number1 + number2;
// }

// function printResult(result) {
//     console.log(result);
// }

// addNumbers(number1, number2, printResult);

// addNumbers(number1, number2, function (result) {
//     console.log(result);
// });

// addNumbers(number1, number2);

// const printResult = (result) => {
//     console.log(result);
// };

// 두 정수의 곱셈을 구한 뒤 결과에 2를 곱한 뒤 출력

// function multiplyTwoNumbers(num1, num2, callback) {
//     if (callback) {
//         callback(num1 * num2);
//     }
//     return num1 * num2;
// }

// function multiplyByTwo(result) {
//     // return result * 2;
//     console.log(result * 2);
// }

// multiplyTwoNumbers(2, 3, multiplyByTwo);

// multiplyTwoNumbers(2, 3, (result) => {
//     console.log(result * 2);
// });

// const multiplyByTwo = (result) => {
//     console.log(result * 2);
// };

// multiplyTwoNumbers(2, 3, multiplyByTwo);

// function multiplyTwoNumbers(num1, num2, callback) {
//     if (callback) {
//         return callback(num1 * num2);
//     }
//     return num1 * num2;
// }

// const result = multiplyTwoNumbers(2, 3, (result) => result * 2);
// console.log(result);

// 성과 이름을 전달받아서 풀네임을 만든 뒤 "000님" 출력
// 전달 예: "이", "순신"
// 리턴 예: "이순신님"

// function getName(lastName, firstName, callback) {
//     if (callback) {
//         return callback(lastName + firstName);
//     }
// }

// const fullname = getName("문", "승현", (name) => `${name}님`);
// console.log(fullname);

// 상품 1개 가격과 총 가격을 입력받고 개수가 5개 이하면 true 아니면 false

// function getTotalProductNum(productPrice, totalPrice, callback) {
//     if (callback) {
//         return callback(totalPrice / productPrice);
//     }
//     return totalPrice / productPrice;
// }

// const NUMBER_OF_PRODUCT = getTotalProductNum(3000, 50000, (number) => {
//     if (number > 5) {
//         return false;
//     } else {
//         return true;
//     }
//     // (number) => number<=5 바로 값으로 써야한다.
// });

// console.log(NUMBER_OF_PRODUCT);

// 결제 상품 가격과 결제 상태를 전달받아서
// 결제 상태가 true일 때 "000원 결제 완료"
// 결제 상태가 false일 때 "000원 결제 취소" 출력

// 숙제
// 콜백함수 문제 3개씩 만들어오기
