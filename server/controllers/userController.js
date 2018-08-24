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

// GET /api/users/user/:id

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
            res.json(400).send("Username already exists");
        } else {
            let newUser = new User({

            })
            newUser.save();
            res.json(200).send("User successfully created");
        }
    })
}

module.exports = {
    getAll: getUsers,
    getOne: getUser,
    create: createUser,
}