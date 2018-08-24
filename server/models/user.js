const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let UserSchema = new Schema({
    name: String,
    username: String,
    password_digest: String,
    joinDate: {
        type: Date,
        default: Date.now
    }
})

let User = mongoose.model("User", UserSchema);

module.exports = User;