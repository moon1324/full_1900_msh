import express from "express";
import todoRouter from "./todoRouter.js";
import userRouter from "./userRouter.js";
import { index } from "../controller/index.js";

const rootRouter = express.Router();

rootRouter.get("/", index);
rootRouter.use("/todo", todoRouter);
rootRouter.use("/user", userRouter);

export default rootRouter;
