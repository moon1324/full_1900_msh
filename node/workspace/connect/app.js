import { createServer } from "http";
import { parse } from "url";
import connect from "./connect.js";
import User from "./user_schema.js";
import path from "path";

import fs from "node:fs";
import qs from "node:querystring";
// 폴더와 파일의 경로를 지정해주는 모듈로, join(), resolve()를 통해서 위치한 경로를 절대경로로 알려준다
// join('/a', '/b')은 전달한 경로로 a, b를 무조건 a/b/ 붙여주어야 하지만,
// resolve('/a', '/b')는 전달한 경로중 절대경로 (/부터 시작)가 있다면 앞의 경로를 무시한다.
// resolve의 결과: '/b'

// 내가 VScode에서 openfolder로 연 경로가 절대경로가 된다.
const __dirname = path.resolve();

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

const join = async (req, res) => {
    // GET
    if (req.method === "GET") {
        fs.readFile(__dirname + "/join.html", (err, result) => {
            if (err) {
                console("read error, " + err.message);
                res.writeHead(404, { "Content-Type": "text/html" });
                ("<h1 style='text-align:center;'>페이지를 찾을 수 없습니다. </h1>");
            } else {
                res.writeHead(200, { "Content-Type": "text/html" });
                res.end(result);
            }
        });
        // POST
    } else if (req.method === "POST") {
        let body = "";
        req.on("data", function (data) {
            // body에 해당 내용을 문자열로 담는다.
            body += data;
        });
        req.on("end", async function () {
            // qs(queryString)객체의 parse()를 통해서 객체로 변환해준다.
            let data = qs.parse(body);
            // mongoose 문법을 사용해서 전달받은 정보를 collection에 추가한다.
            const userCreated = await User.create(data);
            console.log(userCreated);

            // 화면쪽에 보여줄 내용
            fs.readFile(__dirname + "/login.html", function (err, result) {
                if (err) {
                    console.log("file read failed... " + err.message);
                    res.writeHead(404, { "Content-Type": "text/html" });
                    ("<h1 style='text-align:center;'>페이지를 찾을 수 없습니다. </h1>");
                } else {
                    res.writeHead(200, { "Content-Type": "text/html" });
                    res.end(result);
                }
            });
        });
    }
};

const login = async (req, res) => {
    if (req.method === "GET") {
        fs.readFile(__dirname + "/login.html", function (err, result) {
            if (err) {
                console.log("file read failed... :" + err.message);
                res.writeHead(404, { "Content-Type": "text/html" });
                ("<h1 style='text-align:center;'>페이지를 찾을 수 없습니다. </h1>");
            } else {
                res.writeHead(200, { "Content-Type": "text/html" });
                res.end(result);
            }
        });
    } else if (req.method === "POST") {
        let body = "";
        req.on("data", function (data) {
            body += data;
        });
        req.on("end", async function () {
            let data = qs.parse(body);
            let path = __dirname + "/login.html";
            const user = await User.findOne({ id: data.id });
            if (user) {
                // 아이디가 있으면
                if (user.password === data.password) {
                    // 비밀번호를 검사해서 일치한다면, 해당문서 경로로 path에 저장
                    path = __dirname + "/login_ok.html";
                }
            }

            // 일괄처리, path에 담긴 경로를 파일을 읽은 후에 경로를 응답해준다.
            fs.readFile(path, function (err, result) {
                if (err) {
                    console.log("file read failed... :" + err.message);
                    res.writeHead(404, { "Content-Type": "text/html" });
                    ("<h1 style='text-align:center;'>페이지를 찾을 수 없습니다. </h1>");
                } else {
                    res.writeHead(200, { "Content-Type": "text/html" });
                    res.end(result);
                }
            });
        });
    }
};

const pageNotFound = (req, res) => {
    res.statusCode = 404;
    res.end("<h1 style='text-align:center'>페이지를 찾을 수 없습니다... </h1>");
};

// 라우팅 구성
const pathMap = {
    "/": main,
    "/join": join,
    "/login": login,
};
