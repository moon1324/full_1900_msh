import { MongoClient } from "mongodb";

// 접근하기위한 mongo url 주소
// michael
// const connection_url = `mongodb+srv://app:1234@app.zi9auiq.mongodb.net/`;
// gcs1683
const connection_url = `mongodb+srv://app:1234@app.gc8ei3h.mongodb.net/`;
// connection
const client = await MongoClient.connect(connection_url);

// Database 가져오기, 없으면 생성 후 가져온다
const db = client.db("member");

// 컬렉션(테이블) 생성
await db.createCollection("member");

// 컬렉션 가져오기
const collection = db.collection("member");

// 데이터 추가 CRUD
// 단일데이터 추가
// await collection.insertOne({ name: "michael" });

// 다중데이터 추가
// await collection.insertMany([{ name: "michael" }, { name: "zion" }, { name: "steve" }, { name: "lalo" }]);

// Read, 데이터 조회
// 총 멤버 수 조회
// const count = await collection.countDocuments();
// console.log(count);

// 모든 멤버의 데이터 조회
// const members = await collection.find().toArray();
// console.log(members);

// $eq: 일치하는 값 모두 조회
// const member = await collection.find({ name: { $eq: "michael" } }).toArray();
// console.log(member);

// $ne : 일치하지 않는 값 모두 조회
// const members = await collection.find({ name: { $ne: "michael" } }).toArray();
// console.log(members);

// $in : 여러 값 중 하나와 일치하는 값 조회
// const members = await collection.find({ name: { $in: ["michael", "lalo"] } }).toArray();
// console.log(members);

// $nin : 여러 값과 일치하지 않는 값 조회
// const members = await collection.find({ name: { $nin: ["michael", "zion"] } }).toArray();
// console.log(members);

// $not : false를 true, true를 false로 바꿔서 조회
// const members = await collection.find({ name: { $not: { $eq: "lalo" } } }).toArray();
// console.log(members);

// Delete 삭제
// 내용 전체 삭제 (주의요망)
// await collection.deleteMany();

// name: kim, age:20
// name: laura, age:25
// name: lindy, age:30
// await collection.insertMany([
//     { name: "kim", age: 20 },
//     { name: "laura", age: 25 },
//     { name: "lindy", age: 30 },
// ]);

// $gt: 지정한 값보다 큰 값을 조회
// const members = await collection.find({ age: { $gt: 25 } }).toArray();
// console.log(members);

// $gte: 지정한 값보다 크거나 같은 값을 조회
// const members = await collection.find({ age: { $gte: 25 } }).toArray();
// console.log(members);

// $lt: 지정한 값보다 작은 값을 조회
// const members = await collection.find({ age: { $lt: 25 } }).toArray();
// console.log(members);

// $lte: 지정한 값보다 작거나 같은 값을 조회
// const members = await collection.find({ age: { $lte: 25 } }).toArray();
// console.log(members);

// $or : 하나라도 true면 true
// const members = await collection.find({ $or: [{ name: "laura" }, { name: "kim" }] }).toArray();
// console.log(members);

// $and : 모두 true라면 true
// const members = await collection.find({ $and: [{ name: "laura" }, { age: 25 }] }).toArray();
// console.log(members);

// $nor : 모두 false라면 true
// const members = await collection.find({ $nor: [{ name: "laura" }, { name: "kim" }] }).toArray();
// console.log(members);

// 전체 삭제
// await collection.deleteMany();

// 데이터 추가
// await collection.insertMany([
//     {
//         name: "michael",
//         age: 28,
//         address: [
//             { main: "서울", detail: "양재" },
//             { main: "전라북도", detail: "전주" },
//         ],
//         hobby: ["golf", "cook"],
//         company: { name: "newComp", department: "dev" },
//     },
//     {
//         name: "kim",
//         age: 17,
//         address: [
//             { main: "서울", detail: "강남" },
//             { main: "경기", detail: "구리" },
//         ],
//         hobby: ["eat", "sleep"],
//         company: { name: "google", department: "개발" },
//     },
//     {
//         name: "laura",
//         age: 25,
//         address: [
//             { main: "강원", detail: "춘천" },
//             { main: "서울", detail: "용산" },
//         ],
//         hobby: ["미술", "음악"],
//         company: { name: "LG", department: "고객서비스" },
//     },
//     {
//         name: "lindy",
//         age: 30,
//         address: [
//             { main: "경북", detail: "대구" },
//             { main: "전북", detail: "전주" },
//         ],
//         hobby: ["게임", "술"],
//         company: { name: "naver", department: "클라우드" },
//     },
// ]);

// value에 여러 정보(객체)가 있을 때
// const members = await collection.find({ "company.name": "google" }).toArray();
// console.log(members);

// list:value에 여러 값이 list 형태로 있을 때
// const members = await collection.find({ address: { $elemMatch: { main: "서울" } } }).toArray();
// console.log(members);

// Update 수정
// 내용삭제
// await collection.deleteMany();
// 내용추가
// await collection.insertMany([
//     { name: "kim", age: 20 },
//     { name: "laura", age: 25 },
//     { name: "lindy", age: 30 },
// ]);
// 단일조회
// const member = await collection.findOne({ name: "kim" });
// console.log(member);

// 수정
// $set
// await collection.updateOne({ _id: member._id }, { $set: { name: "michael" } });
// const updated_member = await collection.findOne({ name: "michael" });
// console.log(updated_member);

// 삭제
// await collection.deleteOne({ name: "michael" });
// const members = await collection.find().toArray();
// console.log(members);
