// query란?
// 데이터베이스에서 원하는 내용을 가져오기 위해 몇 개의 코드나 키를 통해 검색하는 것
import { createServer } from "http";
import { parse } from "url";

const server = createServer((req, res) => {
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.statusCode = 200;

    const path = parse(req.url, true).pathname;
    if (path in pathMap) {
        pathMap[path](req, res);
    } else {
        pageNotFound(req, res);
    }
});

server.listen("8000", () => {
    console.log("Router server start!!!");
});

const newProduct = (req, res) => {
    // 신상품 소개
    // 쿼리스트링 분리
    const query = parse(req.url, true).query;
    res.end(
        `
            <h1 style="text-align:center;">신상품 소개🎁</h1>
            <ul style="text-align:center; list-style:none">
                <li>${query.new1}</li>
                <li>${query.new2}</li>
            </ul>
        `
    );
};

const hotProduct = (req, res) => {
    // 인기상품 소개
    const query = parse(req.url, true).query;
    res.end(
        `
            <h1 style = "text-align:center;">인기상품 소개🔥</h1>
            <ul style="text-align:center; list-style:none">
                <li>${query.hot1}</li>
                <li>${query.hot2}</li>
            </ul>
        `
    );
};

const pageNotFound = (req, res) => {
    // 페이지를 찾을 수 없습니다
    res.statusCode = 404;
    res.end("<h1 style='text-align:center'>페이지를 찾을 수 없습니다. 😢</h1>");
};

const pathMap = {
    "/new": newProduct,
    "/hot": hotProduct,
};
