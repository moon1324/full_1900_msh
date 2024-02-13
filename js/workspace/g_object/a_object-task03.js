// 게시글
// 번호, 제목, 내용
let post = {
    number: 1,
    title: "피자스쿨",
    content: "빠른 배송! 기가막힌 맛!",
};

// 후기
// 번호, 내용, 별점(0-5)
let review = {
    number: 1,
    content: "맛있어요~",
    star: 5,
    post: post,
};

console.log(review.post.title);
