const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let ImageSchema = new Schema({
    name: String,
    // mimeType: ,
})

let UserSchema = new Schema({
    name: String,
    username: String,
    email: String,
    aboutMe: {
        type: String,
        default: "Write something here!"
    },
    password_digest: String,
    profileImg: [ImageSchema],
    joinDate: {
        type: Date,
        default: Date.now
    }
})

let User = mongoose.model("User", UserSchema);

module.exports = User;