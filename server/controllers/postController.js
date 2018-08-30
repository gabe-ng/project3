const db = require("../models");

// GET /api/posts

const getPosts = (req, res) => {
    db.Post.find({})
        .populate("user")
        .exec((err, posts) => {
        if (err) {
            console.log(err);
            return;
        }
        res.json(posts);
    })
}

// POST /api/posts/new/:user_id

const createPost = (req, res) => {
    let newPost = req.body;
    let userId = req.params.user_id;
    db.Post.create(newPost, (err, createdPost) => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log("Newly created post: ", createdPost);
            db.User.findById(userId, (err, foundUser) => {
                if (err) {
                    console.log(err);
                    return
                } else {
                    console.log("Setting new post user");
                    createdPost.user = foundUser;
                    createdPost.save();
                    res.status(200).send(createdPost, "successfully created with user ", foundUser);
                }
            })
        }
    })
}

module.exports = {
    show: getPosts,
    create: createPost,
}