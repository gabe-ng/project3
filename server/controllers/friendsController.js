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

const createFriendship = (req, res) => {
    let friendship = req.body;
    db.Friends.create(friendship, (err, createdFriendship) => {
        if (err) {
            console.log(err);
            return;
        }
        res.status(200).json(createdFriendship);
    })
}

module.exports = {
    show: getAllFriends,
    create: createFriendship,
}