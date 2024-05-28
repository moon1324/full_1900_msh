// 라우터란?
// 라우터는 클라이언트의 요청 경로(path)를 보고 이 요청을 처리할 수 있는 곳으로 기능을 전달해주는 역할을 한다.
// 애플리케이션 엔드 포인트 (URI)의 정의, 그리고 URI가 클라이언트 요청에 응답하는 방식을 의미한다.
// 예를 들어, 클라이언트가 /users 경로로 요청을 보낸다면 이에 대한 응답 처리를 하는 함수를 별도로
// 분리해서 만든 다음 get()메소드를 호출하여 라우터로 등록할 수 있다.

import { createServer } from "http";
import { parse } from "url";

const server = createServer((req, res) => {
    // true : 쿼리스트링(url 중에서 ? 뒷부분)을 객체형식으로 가져온다.
    // false : 쿼리스트링을 문자열 형식으로 가져온다.
    const path = parse(req.url, true).pathname; // URL에서 URI(pathname)을 분리
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.statusCode = 200;

    if (path === "/new") {
        res.end("<h1 style='text-align: center'>신상품🙌</h1>");
    } else if (path === "/hot") {
        res.end("<h1 style='text-align: center'>인기제품😍</h1>");
    } else {
        res.statusCode = 404;
        res.end(
            "<h1 style='text-align: center'>페이지를 찾을 수 없습니다 ... 😢</h1>"
        );
    }
});

server.listen("8000", () => console.log("Router Server Start!"));
