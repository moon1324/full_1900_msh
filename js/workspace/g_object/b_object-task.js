// 회원
// 번호, 이름
let user = new Object();
user.number = 3;
user.name = "michael";

// 게시글
// 번호, 제목, 내용
let article = new Object();
article.number = 1212;
article.title = "test article";
article.content = "test content";
article.user = user;

// 좋아요
// 번호
let liked = new Object();
liked.number = 12341234;
liked.user = user;
liked.article = article;

// 이건 안된다.
// console.log(liked.user.article);
console.log(liked.article.user.name);

// 숙제
// 중고차 시장에서 다음과같은 데이터가 필요하다.

// 자동차
// 차주
