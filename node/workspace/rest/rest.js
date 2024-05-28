import { createServer } from "http";
import { parse } from "url";

const server = createServer((req, res) => {
    const path = parse(req.url, true).pathname;
    res.setHeader("Content-Type", "application/json; charset=utf-8");

    res.setHeader("Access-Control-Allow-origin", "*");
    res.setHeader("Access-Control-Allow-Credentials", true);

    if (path === "/api/user/1") {
        res.end(
            JSON.stringify({
                number: 1,
                name: "michael",
                address: "전라북도 전주시",
            })
        );
    }
});

server.listen(8000, () => {
    console.log("REST server start!!!");
});
