// "/user"에 접속하면 "홍길동님 환영합니다!"응답
// "/product"에 접속하면 "상품 1, 상품 2, 상품 3은 팜매중 입니다!" 응답
// 위에 경로 외에 다른 경로는 모두 "해당 페이지는 찾을 수 없습니다." 응답

import { createServer } from "http";
import { parse } from "url";

const server = createServer((req, res) => {
    const path = parse(req.url, true).pathname;
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.statusCode = 200;

    // if (path === "/user") {
    //     res.end("홍길동님 환영합니다!");
    // } else if (path === "/product") {
    //     res.end("상품 1, 상품 2, 상품 3은 판매중 입니다!");
    // } else {
    //     res.end("해당 페이지는 찾을 수 없습니다.");
    // }

    if (path in pathMap) {
        pathMap[path](req, res);
    } else {
        pageNotFound(req, res);
    }
});

const user = (req, res) => {
    res.end("홍길동님 환영합니다!");
};

const product = (req, res) => {
    res.end("상품 1, 상품 2, 상품 3은 판매중 입니다!");
};

const pageNotFound = (req, res) => {
    res.end("해당 페이지는 찾을 수 없습니다.");
};

const pathMap = {
    "/user": user,
    "/product": product,
};

server.listen("8000", () => console.log("Router Server Start!"));
