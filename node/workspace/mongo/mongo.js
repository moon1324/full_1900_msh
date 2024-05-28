import { MongoClient } from "mongodb";

// 접근하기위한 mongo url 주소
// michael
// const connection_url = `mongodb+srv://app:1234@app.zi9auiq.mongodb.net/`;
// gcs1683
const connection_url = `#mongodb+srv://app:1234@app.gc8ei3h.mongodb.net/`;
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
await collection.insertOne({ name: "michael" });
