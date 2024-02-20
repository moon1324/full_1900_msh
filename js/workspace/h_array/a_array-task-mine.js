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
let datas = [];
// datas에 1~10까지 담는다.
for (let i = 0; i < 10; i++) {
    datas[i] = i + 1;
}
// 홀수만 모두 2를 빼주기
for (data of datas) {
    if (data % 2 == 1) {
        datas.splice(data, data, data - 2);
    }
}
console.log(datas);
