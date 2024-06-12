import express from "express";
import { parse } from "url";

const app = express();
const port = 8000;

app.listen(port, () => {
    console.log(`Server is on ${port} port!`);
});

const mainPage = (req, res) => {
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.end("<h1>환영합니다! 😍</h1>");
};

const newProduct = (req, res) => {
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    const query = parse(req.url, true).query; // 쿼리스트링
    res.end(`
        <h1 style='text-align:center'>신상품 소개</h1>
        <ul style='text-align:center; list-style:none;'>
            <li>${query.new1}</li>
            <li>${query.new2}</li>
        </ul>

    `);
};
const hotProduct = (req, res) => {
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    const { hot1, hot2 } = parse(req.url, true).query;
    res.end(`
        <h1 style='text-align:center'>인기상품 소개</h1>
        <ul style='text-align:center; list-style:none;'>
            <li>${hot1}</li>
            <li>${hot2}</li>
        </ul>

    `);
};

const pageNotFound = (req, res) => {
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.statusCode = 404;
    res.end("<h1 style='text-align:center'>페이지를 찾을 수 없습니다. 😢</h1>");
};

app.get("/", mainPage);
// new 신상품
app.get("/new", newProduct);
// hot 인기상품
app.get("/hot", hotProduct);
// pageNotFound
app.get("*", pageNotFound);
