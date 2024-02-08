// 1-10까지 출력하는 함수
function printOneToTen() {
    let num_string = "";
    for (let i = 0; i < 10; i++) {
        num_string += `${i + 1} `;
    }
    console.log(num_string);
}

printOneToTen();

// 홍길동을 n번 출력하는 함수
function printGilDong(n) {
    let name_string = "";
    for (let i = 0; i < n; i++) {
        name_string += "홍길동 ";
    }
    console.log(name_string);
}

printGilDong(5);

// 이름을 n번 출력하는 함수
function printName(name, n) {
    let name_string = "";
    for (let i = 0; i < n; i++) {
        name_string += `${name} `;
    }
    console.log(name_string);
}

printName("michael", 5);
