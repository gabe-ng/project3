let db = require("../models");

// GET /api/friends/

const getAllFriends = (req, res) => {
    db.Friends.find({}, (err, friends) => {
        if (err) {
            console.log(err);
            return;
        }
        res.json(friends);
    })
}

module.exports = {
    get: getAllFriends,
}