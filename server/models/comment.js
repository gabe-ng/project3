const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let CommentSchema = new Schema({
    title: String,
    body: String,
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
    dateCreated: {
        type: Date,
        default: Date.now
    }
})

let Comment = mongoose.model("Comment", CommentSchema);

module.exports = Comment;