import mongoose from "mongoose";

const connection_url = `mongodb+srv://app:1234@app.gc8ei3h.mongodb.net/`;

const connect = () => {
    // 배포환경이 아니라면
    if (process.env.NODE_ENV !== "production") {
        // 디버그 true 설정해서 SQL문이 콘솔에 출력된다
        mongoose.set("debug", true);
    }

    mongoose
        .connect(connection_url, {
            // 컬렉션을 관리하는 database이름 설정
            dbName: "users",
        })
        .then(() => {
            console.log("Connected to MongoDB!");
        })
        .catch((err) => {
            // 연결 실패 시
            console.error("Connected fail to MongoDB");
            console.log(err);
        });
};

export default connect;
