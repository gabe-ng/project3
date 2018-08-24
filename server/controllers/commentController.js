const db = require("../models");

// POST /api/:post_id/comment/new

const createComment = (req, res) => {
    let postId = req.params.post_id;
    let comment = req.body;
    db.User.findById(req.body.userId, (err, foundUser) => {
        if (err) {
            console.log(err);
            return;
        }
        comment.user = foundUser;
    })
    db.Post.findById(postId)
        .populate("user")
        .exec((err, foundPost) => {
        if (err) {
        console.log(err);
        return;
        }
        foundPost.comments.push(comment);
    });
    foundPost.save((err, post) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log("Saved ", post.title, " with the comment ", comment);
        res.status(200).json(post);
    });
};

module.exports = {
  create: createComment
};
