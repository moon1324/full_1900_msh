import connect from "./connect.js";
// import가 되는대로 작성하면 안되고, 객체명으로 사용
// import user_schema from "./user_schema.js";
import User from "./user_schema.js";
import Post from "./post_schema.js";

// 연결
connect();

// 1개 추가 : collection.insert({})
// const user_inserted = await User.create({
//     email: "michaelm00n@naver.com",
//     name: "michael",
//     age: 28,
// });

// console.log(user_inserted);

// 여러 개 추가 : collection.insertMany([{},{},{},...])
// const user_inserted = await User.create(
//     {
//         email: "michaelm00n@naver.com",
//         name: "michael",
//         age: 28,
//     },
//     {
//         email: "gildonghong@naver.com",
//         name: "gildong",
//         age: 20,
//     },
//     {
//         email: "soonsinyi@naver.com",
//         name: "yi",
//         age: 60,
//     }
// );
// console.log(user_inserted);

// 전체 조회, collection.find().toArray()
// const users = await User.find();
// // [{}, {}, {}]
// for (let user of users) {
//     console.log(user._doc);
// }
// console.log(users);

// 이메일에 michael이 포함된 회원 조회
// const users = await User.find({ email: { $regex: "michael" } });
// for (let user of users) {
//     console.log(user._doc);
// }
// console.log(users)

// 1개 조회
// const user = await User.findOne({ name: "gildong" });
// console.log(user);

// 1개 수정
// const user = await User.findOne({ email: "soonsinyi@naver.com" });
// const userUpdated = await User.updateOne(user, { age: 20 });
// console.log(userUpdated);

// 여러개 수정
// const usersUpdated = await User.updateMany({ email: { $regex: "naver" } }, { age: "10" });
// console.log(usersUpdated);

// 1개 삭제
// const user = await User.findOne({ email: { $regex: "michael" } });
// const userDeleted = await User.deleteOne(user);
// console.log(userDeleted);

// 여러 개 삭제
// const userDeleted = await User.deleteMany({ email: { $regex: "naver" } });
// console.log(userDeleted);

// const user_insertOne = await User.create({
//     email: "michaelm00n@naver.com",
//     name: "michael",
//     age: "28",
// });

// console.log(user_insertOne);

// const users_inserted = await User.create(
//     {
//         email: "michaelshouldhope@gmail.com",
//         name: "michael",
//         age: 28,
//     },
//     {
//         email: "gildonghong@naver.com",
//         name: "gildong",
//         age: 20,
//     },
//     {
//         email: "soonsinyi@naver.com",
//         name: "yi",
//         age: 60,
//     }
// );
// console.log(users_inserted);

// 게시글 추가
// const user = await User.findOne({ email: "michaelm00n@naver.com" });
// console.log(user);

// const postCreated = await Post.create({
//     title: "test title 1",
//     content: "test content 1",
//     user: user,
// });
// console.log(postCreated);

// 유저 3명, 게시글 3개 추가
// // 2번게시판글 2번유저
// const user2 = await User.findOne({ email: "michaelshouldhope@gmail.com" });
// // 3번게시판글 3번
// const user3 = await User.findOne({ email: "gildonghong@naver.com" });
// // 4번게시판 글 4번
// const user4 = await User.findOne({ email: "soonsinyi@naver.com" });
// const postCreated = await Post.create(
//     {
//         title: "test title 2",
//         content: "test content 2",
//         user: user2,
//     },
//     {
//         title: "test title 3",
//         content: "test content 3",
//         user: user3,
//     },
//     {
//         title: "test title 4",
//         content: "test content 4",
//         user: user4,
//     }
// );
// console.log(postCreated);

// 게시글 전체 조회(연관관계 user)
// const post = await Post.find().populate("user");
// console.log(post);

// const user = await User.findOne({ name: "yi" });
// const posts = await Post.find().populate("user");

// for (let post of posts) {
//     if (post.user._id === user._id) {
//         await Post.deleteOne(post);
//     }
// }

// 회원정보 수정 후 게시글 전체 조회(연관관계 user)
// const userUpdated = await User.updateOne({ name: "yi" }, { name: "soonsinyi" });
// console.log(userUpdated);

// 실습
// 이름 front를 gildong으로 바꾸고
// 게시판 글 전체 조회
const user1 = await User.findOne({ name: "front" });
console.log(user1);
const userUpdated = await User.updateOne(user1, { name: "gildong" });
console.log(userUpdated);
const posts = await Post.find().populate("user");
for (let post of posts) {
    console.log(post.title, post.content);
    console.log(post.user.name);
}
