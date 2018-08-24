const db = require("../models");

// GET /api/posts

const getPosts = (req, res) => {
    db.Post.find({}, (err, posts) => {
        if (err) {
            console.log(err);
            return;
        }
        res.json(posts);
    })
}

module.exports = {
    show: getPosts,
}