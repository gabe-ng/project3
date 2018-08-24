const mongoose = require("mongoose");
const Schema = mongoose.schema;

let FriendsSchema = new Schema({
    friend_1_id: Number,
    friend_2_id: Number,
    status: {
        type: Number,
        enums: [
            0,    //'add friend',
            1,    //'requested',
            2,    //'pending',
            3,    //'friends'
        ]
    }
})

module.exports = mongoose.model("Friends", FriendsSchema);