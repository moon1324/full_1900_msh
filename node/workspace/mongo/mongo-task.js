import { MongoClient } from "mongodb";

// 접근하기위한 mongo url 주소
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

// 상품 3개 추가
// 상품명(name), 가격(price), 재고(stock), 제조국가(made_in), 거래처(mou), 등록인(user)
// insertMany

// 상품 1개 정보 예시
// {
//     name : "사과",
//     price : 3000,
//     stock : 30,
//     made_in : ["korea", "America"],
//     mou : [
//         { name : "이마트", address : "역삼동" },
//         { name : "하이마트", address : "봉천동" },
//         { name : "롯데마트", address : "목동" },
//     ],
//     user : { name : "홍길동", position : "대리" },
// }

// 전체 조회
// "사과" 정보 조회
// 재고가 100개 이상인 상품 조회
// 제조 국가가 Korea인 상품 조회
// 등록자 중 "대리" 직급의 상품 조회
// 거래처 주소에 역삼동이 있는 상품 조회
// 상품 정보 중 _id, made_in만 전체 조회
// 상품 중, 거래처 이름에 백화점이 포함된 상품 조회
// 상품 중, 등록자의 직급이 대리가 아닌 상품 모두 삭제
// "사과" 1개 조회
// "사과" 재고 1개 추가
// 삭제
