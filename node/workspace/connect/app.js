import { createServer } from "http";
import { parse } from "url";
import connect from "./connect.js";

// MongoDB연결
connect();

// 서버를 구성
const server = createServer((req, res) => {
    // uri 분리
    const path = parse(req.url, true).pathname;
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.statusCode = 200;

    // 라우팅 사용
    if (path in pathMap) {
        pathMap[path](req, res);
    } else {
        pageNotFound(req, res);
    }
});

// 서버를 실행
server.listen(8000, () => console.log("Router Server Start!!!"));

// 각각의 라우트 컨트롤러 구성
const main = async (req, res) => {
    res.statusCode = 200;
    res.end("<h1 style='text-align:center'> Node with MongoDB 최종실습!</h1>");
};

const join = async (req, res) => {};

const login = async (req, res) => {};

const pageNotFound = (req, res) => {
    res.statusCode = 404;
    res.end("<h1 style='text-align:center'>페이지를 찾을 수 없습니다... 😢</h1>");
};

// 라우팅 구성
const pathMap = {
    "/": main,
    "/join": join,
    "/login": login,
};
