// 선언과 동시에 사용, 리턴값이 userService에 담긴다
// 이 모듈의 목적은 통신
// 목적에 맞게 통신만 한뒤 끝내자
const userService = (() => {
    const findAll = async (callback) => {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users",
            {
                method: "get",
            }
        );
        const users = await response.json();
        // callback에 전달한 users는 array객체
        // callback이 사용에 더 편하다
        if (callback) {
            return callback(users);
        }
        // return에 작성한 users는 promise객체
        // return users;
    };

    // 회원가입
    // 화면에서 입력한 회원 정보를 user 객체로 한번에 받는다.
    const create = async (user, callback) => {
        // 전달받은 회원 정보를 서버에 전달한다.
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users",
            {
                method: "post",
                body: JSON.stringify(user),
                headers: {
                    "Content-Type": "application/json; charset=utf-8",
                },
            }
        );
        // 추가된 회원의 정보를 createdUser(객체)에 담는다.
        const createdUser = await response.json();
        if (callback) {
            // callback 함수에 추가된 회원 객체를 전달한다.
            return callback(createdUser);
        }
    };

    return { findAll: findAll, create: create };
})();
