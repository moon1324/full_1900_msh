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
// const getPaymentStatus = (itemPrice, paymentStatus, callback) => {
//     if (callback) {
// return붙여주기
//         callback(itemPrice, paymentStatus);
//     }
//     return itemPrice, paymentStatus;
// };
// status자리에 itemPrice, paymentStatus넣고, itemPrice, paymentStatus 자리에 값 넣어주기
// const paymentCheck = getPaymentStatus(itemPrice, paymentStatus, (status) =>
//     paymentStatus ? `${itemPrice}원 결제완료` : `${itemPrice}원 결제취소`
// );

// const getPaymentStatus = (itemPrice, paymentStatus, callback) => {
//     if (callback) {
//         return callback(itemPrice, paymentStatus);
//     }
//     return itemPrice, paymentStatus;
// };

// const checkPayment = getPaymentStatus(2000, false, (itemPrice, paymentStatus) =>
//     paymentStatus ? `${itemPrice}원 결제 완료` : `${itemPrice}원 결제 취소`
// );
// console.log(checkPayment);
// 숙제
// 콜백함수 문제 3개씩 만들어오기

// const getPaymentStatus = (itemPrice, paymentStatus, callback) => {
//     if (callback) {
// return붙여주기
//         callback(itemPrice, paymentStatus);
//     }
//     return itemPrice, paymentStatus;
// };
// status자리에 itemPrice, paymentStatus넣고, itemPrice, paymentStatus 자리에 값 넣어주기
// const paymentCheck = getPaymentStatus(itemPrice, paymentStatus, (status) =>
//     paymentStatus ? `${itemPrice}원 결제완료` : `${itemPrice}원 결제취소`
// );

const getPaymentStatus = (itemPrice, paymentStatus, callback) => {
    if (callback) {
        return callback(itemPrice, paymentStatus);
    }
    return itemPrice, paymentStatus;
};

const checkPayment = getPaymentStatus(2000, false, (itemPrice, paymentStatus) =>
    paymentStatus ? `${itemPrice}원 결제 완료` : `${itemPrice}원 결제 취소`
);
console.log(checkPayment);

// 숙제
// 콜백함수 문제 3개씩 만들어오기

// 풋살희망인원을 받아서 10명 이상이고 비가 안오면 풋살 진행, 10명 미만이거나 비가오면 풋살 취소 알림

const getMatchCondition = (numberOfPlayer, isRaning, callback) => {
    if (callback) {
        return callback(numberOfPlayer, isRaning);
    }
    return numberOfPlayer, isRaning;
};

const checkMatchCondition = getMatchCondition(
    12,
    false,
    (numberOfPlayer, isRaning) =>
        numberOfPlayer > 10 && isRaning === false
            ? `풋살 진행 가능합니다!`
            : `풋살 진행 불가능합니다`
);
console.log(checkMatchCondition);

// 결제할 때 3개월 이상이면(장기결제) 20% 할인된 가격으로 결제 진행, 3개월 미만이면 정상가격으로 결제 진행
const getSubscriptionOrder = (
    subscriptionPrice,
    subscriptionPeriod,
    callback
) => {
    let totalSubscriptionPrice = subscriptionPrice * subscriptionPeriod;
    if (callback) {
        return callback(totalSubscriptionPrice, subscriptionPeriod);
    }

    return totalSubscriptionPrice, subscriptionPeriod;
};

const checkSubscriptionOrder = getSubscriptionOrder(
    30000,
    3,
    (totalSubscriptionPrice, subscriptionPeriod) =>
        subscriptionPeriod >= 3
            ? totalSubscriptionPrice * 0.8
            : totalSubscriptionPrice
    // {
    //     if (subscriptionPeriod >= 3) {
    //         totalSubscriptionPrice = totalSubscriptionPrice * 0.8;
    //     }
    //     return totalSubscriptionPrice;
    // }
);
console.log(checkSubscriptionOrder);

// 로그인할때 아이디와 비밀번호 일치 시 로그인, 일치하지 않을때 로그인 실패

const getLoginStatus = (id, pw, callback) => {
    if (callback) {
        return callback(id, pw);
    }
    return id, pw;
};

var userId = "michael";
var userPw = "1234";

const checkLoginStatus = getLoginStatus("michael", "1234", (id, pw) => {
    // userId === id && userPw === pw ? "로그인 성공" : "로그인 실패";
    if (userId === id && userPw === pw) {
        return "로그인 성공";
    } else {
        return "로그인 실패";
    }
});
console.log(checkLoginStatus);
