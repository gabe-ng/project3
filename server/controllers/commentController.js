const db = require("../models");

// GET /api/:post_id/comments
const getPostComments = (req, res) => {
    let postId = req.params.post_id;
    db.Comment.find( {post: postId}, (err, comments) => {
        if (err) {
            console.log(err);
            return;
        }
        res.json(comments);
    })
}

// POST /api/:post_id/comment/new

const createComment = (req, res) => {
    let postId = req.params.postId;
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
    getComments: getPostComments,
    create: createComment
};
