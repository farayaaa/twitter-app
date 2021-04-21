const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tweetSchema = new Schema(
    {
        name: { type: String, required: true },
        username: { type: String, required: true },
        content: { type: String, required: true }
    },
    { timestamps: true });

module.exports = mongoose.model('Tweet', tweetSchema);
