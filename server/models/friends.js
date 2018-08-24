const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let FriendsSchema = new Schema({
    friend1_id: Number,
    friend2_id: Number,
    status: {
        type: Number,
        enums: [
            0,    //'pending
            1,    //'rejected',
            2,    //'friends',
        ]
    }
})

module.exports = mongoose.model("Friends", FriendsSchema);