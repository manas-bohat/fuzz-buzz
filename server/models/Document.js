const mongoose = require("mongoose")

// changes in Document Schema
const DocumentSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    keywords: [
        {
          keyword: {
            type: String,
            required: true
          },
        },
    ],
    createdAt: {
        type: Date,
        required: true,
        default: Date.now
    },
    coverImage: {
        type: Buffer,
        required:false //change it to true
    },
    coverImageType: {
        type: String,
        required: false //change it to true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: false, //change it to true
        ref: 'User'
    }
}, {timestamps: true}
);

module.exports = mongoose.model("Document", DocumentSchema);