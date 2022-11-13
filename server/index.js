const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");


const indexRoute = require('./routes/index.js');
const authRoute = require("./routes/auth.js");
const usersRoute = require("./routes/users.js");
const documentsRoute = require("./routes/documents.js");

app.use(cors());
app.use(express.json());

dotenv.config();

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(console.log("Connected to MongoDB"))
.catch((err) => console.log(err));

app.use("/", indexRoute);
app.use("/auth", authRoute);  
app.use("/users", usersRoute);
app.use("/documents", documentsRoute);

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