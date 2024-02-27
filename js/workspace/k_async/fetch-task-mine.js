// https://jsonplaceholder.typicode.com/users
// zipcode만 추출해서 출력하기

fetch("https://jsonplaceholder.typicode.com/users/1").then((response) =>
    response.json().then((users) => console.log(users.address.zipcode))
);

// https://jsonplaceholder.typicode.com/comments
// 게시글 번호(postId)가 10번인 댓글 전체 출력
// fetch("https://jsonplaceholder.typicode.com/comments/?postId=10").then(
//     (response) => response.json().then((comments) => console.log(comments))
// );

// 각 결과다음 console.log(1)이 출력되게 하기
// 이떄 직접 만든 함수에서 작업한다.
