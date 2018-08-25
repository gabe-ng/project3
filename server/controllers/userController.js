// load jsonwebtoken and bcrypt
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

// load in models
let db = require("../models");

// GET /api/users

const getUsers = (req, res) => {
  jwt.verify(req.token, "secretKey", (err, authData) => {
    if (err) {
      res.sendStatus(403);
    } else {
      db.User.find({}, (err, users) => {
        if (err) {
          console.log(err);
          return;
        }
        res.json({
          users: users,
          authData
        });
      });
    }
  });
};

// GET /api/users/show/:id

const getUser = (req, res) => {
  db.User.findById(req.params.id, (err, user) => {
    if (err) {
      console.log(err);
      return;
    }
    res.json(user);
  });
};

// POST /api/users/create

const createUser = (req, res) => {
  db.User.findOne({ username: username }, (err, user) => {
    if (err) {
      console.log(err);
      return;
    }
    // if username is found, return bad request
    if (user) {
      res.status(400).send("Username already exists");
    }
    // create new user
    let newUser = new User({
      name: req.body.name,
      username: req.body.username,
      password_digest: req.body.password
    });

    // salt and has password with bcryptjs
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(newUser.password_digest, salt, (err, hash) => {
        if (err) {
          console.log("Error hasing password: ", err);
          return;
        }
        newUser.password_digest = hash;
        newUser.save((err, user) => {
          if (err) {
            console.log(err);
            return;
          }
          res.json(user);
        });
      });
    });

    newUser.save();
    res.status(200).send("User successfully created");
  });
};

// POST /api/users/login

const userLogin = (req, res) => {
  let username = req.body.username;
  let password_digest = req.body.password;
  db.User.findOne({ username: username }, (err, foundUser) => {
    if (err) {
      console.log(err);
      return;
    }

    // check for user
    if (foundUser) {
      // check password
      bcrypt.compare(password_digest, user.password_digest).then(isMatch => {
        if (isMatch) {
          // user confirmed, send web token
          jwt.sign({ user: foundUser }, "secretKey", (err, token) => {
            if (err) {
              console.log(err);
              return;
            }
            res.json({
              token: token
            });
          });
        }
      });
    } else {
      res.status(404).json({ message: "No user found" });
    }
  });
};

// PUT /api/users/udpate/:username

const updateUser = (req, res) => {
  let update = req.body;
  db.User.findOneAndUpdate(
    { username: req.params.username },
    update,
    { new: true },
    (err, user) => {
      if (err) {
        console.log(err);
        return;
      }
      res.status(200).send("User successfully created");
    }
  );
};

module.exports = {
  getAll: getUsers,
  getOne: getUser,
  create: createUser,
  login: userLogin,
  update: updateUser
};
