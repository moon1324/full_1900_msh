import mongoose from "mongoose";

const connection_url = `mongodb+srv://app:1234@app.gc8ei3h.mongodb.net/`;

const connect = () => {
    if (process.env.NODE_ENV !== "production") {
        mongoose.set("debug", true);
    }

    mongoose
        .connect(connection_url, {
            dbName: "projectName",
        })
        .then(() => {
            console.log("Connected to MongoDB");
        })
        .catch((err) => {
            console.error("Connection failed to MongoDB");
            console.log(err);
        });
};

export default connect;
