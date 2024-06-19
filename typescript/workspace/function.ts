// // 함축형 문법(implicit type assertion)
// // function implicitReturnFunction() {
// //     return 1234;
// // }

// // const implicitReturnArrowFunction = () => {
// //     return 1 + 1;
// // };

// // let implicitFunctionValue = implicitReturnFunction(); // number
// // implicitFunctionValue = "string"

// // 설명형 문법(explicit type annotation)
// // function explicitReturnFunction(): boolean {
// //     return false;
// // }

// // const explicitArrowFunction = (): string => {
// //     return "string value";
// // };

// // let explicitFunctionValue = explicitReturnFunction();
// // console.log(explicitFunctionValue);

// function functionWithParams(x: number, y: number, z: number): number {
//     return x + y + z;
// }

// const arrowFunctionWithParams = (x: number, y: number, z: number): string => {
//     return (x + y + z).toString();
// };

// console.log(functionWithParams(1, 2, 3), typeof functionWithParams(1, 2, 3));
// console.log(arrowFunctionWithParams(1, 2, 3), typeof arrowFunctionWithParams(1, 2, 3));

// // Optional Parameter
// const functionWithOptional = (x: number, y?: number, z?: number) => {
//     if (y == undefined) {
//         return x;
//     }
//     if (z == undefined) {
//         return x + y;
//     }
//     return x + y * z;
// };

// console.log("Optional Parameter");
// console.log(functionWithOptional(1));
// console.log(functionWithOptional(1, 2));
// console.log(functionWithOptional(1, 2, 3));

// Rest Parameter
// 기본 매개변수 값들 외의 Rest Parameter는

const functionWithRestParameter = (...numbers: number[]): number => {
    let total: number = 0;
    for (let number of numbers) {
        total += number;
    }
    console.log(numbers);
    return total;
};
console.log(functionWithRestParameter(7, 9, 0, 10, 8, 6, 5));
