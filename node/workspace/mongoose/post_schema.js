import { ObjectId } from "mongodb";
import { Schema, model } from "mongoose";

const postSchema = new Schema(
    {
        title: { type: String, required: true },
        content: { type: String, required: true },
        user: { type: ObjectId, ref: "User", required: true },
    },
    { timestamps: true }
);

export default model("Post", postSchema, "post");
