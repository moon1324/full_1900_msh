// 설명형 문법(explicit type annotation)
// 1)성과 이름을 받아서 성이름을 붙여서 출력해주는 함수

const getFullName = (firstName: string, lastName: string): string => {
    return firstName + " " + lastName;
};
console.log(getFullName("Michael", "Moon"));

// 2)두 수를 받아서 사칙연산을 배열로 리턴해주는 함수
const getCalculation = (firstNum: number, secondNum: number): number[] => {
    const add = firstNum + secondNum;
    const subtract = firstNum - secondNum;
    const multiply = firstNum * secondNum;
    const divide = firstNum / secondNum + (firstNum % secondNum);

    return [add, subtract, multiply, divide];
};
console.log(getCalculation(9, 8));

// 3)두 수를 받아서 A와 B를 비교하여 A가 크면 true, B가 크면 false를 리턴해주는 함수
const compareNumbers = (a: number, b: number): boolean | string => {
    // let result = a>b ? true:false;
    if (a > b) {
        return true;
    } else if (a < b) {
        return false;
    } else {
        return "두수가 같다";
    }
};
console.log(compareNumbers(1, 2));
// 4)입력한 값을 모두 문자열로 붙여주는 함수
const concatAllInputs = (...inputs: string[]): string => {
    console.log(inputs);
    let result = "";
    for (let input of inputs) {
        result += input;
    }
    return result;
};
console.log(concatAllInputs("a", "b", "c"));
// ex)myFunc("가", "나", "다")
// 결과:가나다
