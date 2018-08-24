const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Comment = require("./comment");

let PostSchema = new Schema({
    title: String,
    body: String,
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    dateCreated: {
        type: Date,
        default: Date.now,
    },
    comments: [Comment.schema]

})

let Post = mongoose.model("Post", PostSchema);

module.exports = Post;