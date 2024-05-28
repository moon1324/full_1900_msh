// 어떤 요청에도 "Good-Bye"를 응답하는 서버 제작하기
// 제작후 k6를 통해 100명이 10초동안 동시에 요청하는 성능테스트를 진행한다.

// import http from "http";

// const server = http.createServer((req, res) => {
//     res.setHeader("Content-Type", "text/html; charset=utf-8");
//     res.end("Good-Bye");
// });

// server.listen(8000);

import { createServer } from "http";
const server = createServer((req, res) => {
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.end("<h1>Good-Bye😎</h1>");
});

server.listen("8000", () => console.log("Server Start!"));
