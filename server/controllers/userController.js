const jwt = require("jsonwebtoken");
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
    if (user) {
      res.status(400).send("Username already exists");
    } else {
      let newUser = new User({

        
      });
      newUser.save();
      res.status(200).send("User successfully created");
    }
  });
};

// POST /api/users/login

const userLogin = (req, res) => {
  const user = {
    id: 1,
    username: "gabe",
    email: "email"
  };

  jwt.sign({ user: user }, "secretKey", { expiresIn: "30s" }, (err, token) => {
    if (err) {
        console.log(err);
        return;
    }
    res.json({
      token: token
    });
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
