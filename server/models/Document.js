const mongoose = require("mongoose")

const DocumentSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
        required: true,
    },
    photo: {
        type: String
    },
    username: {
        type: String,
        required: true,
    }
}, {timestamps: true}
);

module.exports = mongoose.model("Document", DocumentSchema);