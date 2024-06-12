// mongodb+srv://app:1234@app.gc8ei3h.mongodb.net/
import mongoose from "mongoose";

const connect_url = `mongodb+srv://app:1234@app.gc8ei3h.mongodb.net/`;

const connect = () => {
    if (process.env.NODE_ENV !== "production") {
        mongoose.set("debug", true);
    }
    mongoose
        .connect(connect_url, { dbName: "express" })
        .then(() => {
            console.log("Connected to MongoDB");
        })
        .catch((err) => {
            console.error("Connection failed to MongoDB");
            console.log(err);
        });
};

export default connect;
