let db = require("../models");

// GET /api/users

const getUsers = (req, res) => {
    db.User.find({}, (err, users) => {
        if (err) {
            console.log(err);
            return;
        }
        res.json(users);
    })
}

// GET /api/users/show/:id

const getUser = (req, res) => {
    db.User.findById( req.params.id, (err, user) => {
        if (err) {
            console.log(err);
            return
        }
        res.json(user);
    })
}

// POST /api/users/create

const createUser = (req, res) => {
    db.User.findOne( { username: username }, (err, user) => {
        if (err) {
            console.log(err);
            return; 
        }
        if (user) {
            res.status(400).send("Username already exists");
        } else {
            let newUser = new User({

            })
            newUser.save();
            res.status(200).send("User successfully created");
        }
    })
}

// PUT /api/users/udpate/:username

const updateUser = (req, res) => {
    let update = req.body;
    db.User.findOneAndUpdate( { username: req.params.username }, update, { new: true }, (err, user) => {
        if (err) {
            console.log(err);
            return;
        }
        res.status(200).send("User successfully created");
    })
}

module.exports = {
    getAll: getUsers,
    getOne: getUser,
    create: createUser,
    update: updateUser,
}