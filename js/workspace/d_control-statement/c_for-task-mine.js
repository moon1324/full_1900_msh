// 시작 인덱스(i)값은 0으로 설정한다.

// 1-100까지 출력
// for (let i = 0; i < 100; i++) {
//     console.log(i + 1);
// }

// 100-1까지 출력
// for (let i = 0; i > -100; i--) {
//     console.log(100 + i);
// }?????
// for (let i = 0; i < 100; i++) {
//     console.log(100 - i);
// }

// 1-100까지 중 짝수만 출력
// for (let i = 0; i < 100; i++) {
//     if (i % 2) {
//         console.log(i + 1);
//     }
// }
// for (let i = 0; i < 50; i++) {
//     console.log((i + 1) * 2);
// }

// 1-count 까지 합 출력

let count = 100;
let sum = 0;
for (let i = 0; i < count; i++) {
    // sum = sum + (i + 1);
    sum += i + 1;
}
console.log(sum);

// 0 1 2 3 4 0 1 2 3 4 0 1 2 3 4 출력
let result = "";
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 5; j++) {
        // result = result + j + " ";
        result += `${j} `;
    }
}
console.log(result);

// 1-10까지 중 5 제외 출력
let num = "";
for (let i = 0; i < 10; i++) {
    if (i !== 4) {
        // num = num + (i + 1) + " ";
        num += `${i + 1} `;
    }
}
console.log(num);

// aBcDeFg...Z 출력
