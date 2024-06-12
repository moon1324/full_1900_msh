import express from "express";

const app = express();
const port = 8000;

app.listen(port, () => {
    console.log(`server started: ${port} port!`);
});

app.get("/", (_, res) => {
    res.set({ "Content-Type": "text/html; charset=utf-8" });
    res.end("<h1>Welcome Express!</h1>");
});
