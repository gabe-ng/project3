const mongoose = require("mongoose");
mongoose.connect(
    process.end.MONGOD_URI || "mongodb://localhost:27017/project3",
    { useNewUrlParser: true }
);

let User = require("./user.js");

module.exports = {
    User: User,
}