const mongoose = require("mongoose");
mongoose.connect(
    process.env.MONGOD_URI || "mongodb://localhost:27017/project3",
    { useNewUrlParser: true }
);

let User = require("./user");
let Post = require("./post");
let Comment = require("./comment");
let Friends = require("./friends");

module.exports = {
    User: User,
    Post: Post,
    Comment: Comment,
    Friends: Friends
}