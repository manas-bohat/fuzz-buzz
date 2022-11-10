const express = require("express");
const app = express();
const dotenv = require("dotenv");
const authRoute = require("./routes/auth.js");
const mongoose = require("mongoose");

app.use(express.json());

dotenv.config();

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(console.log("Connected to MongoDB"))
.catch((err) => console.log(err));

app.use("/auth", authRoute);  

// if(process.env.NODE_ENV == "production") {
//     app.use(express.static("client/build"));
//     // const path = require("path");
//     // app.get("*", (req, res) => {
//     //     res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
//     // })
// }

app.listen("5000", () => {
    console.log("Server is running");
})