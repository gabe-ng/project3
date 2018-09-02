// Set up Express

const express = require("express");
const jwt = require('jsonwebtoken');
const app = express();

// Set up JSON

app.use(express.json());

// CORS

const cors = require("cors");

app.use(cors());

// Import controllers

let controllers = require("./controllers");

// Format of Token
// Authorization: Bearer <access_token>

const verifyToken = (req, res, next) => {
    // Get auth header value
    const bearerHeader = req.headers['authorization'];
    // CHeck if bearder is undefined
    if (typeof bearerHeader !== "undefined") {
        // Split at the space
        const bearer = bearerHeader.split(" ");
        // Get token from array
        const bearerToken = bearer[1];
        // Set the token
        req.token = bearerToken;
        // Next middleware
        next();
    } else {
        // Forbidden
        res.sendStatus(403);
    }
}

// Routes

// Users
app.get("/api/users", verifyToken, controllers.user.index);
app.get("/api/users/:id", verifyToken, controllers.user.show);
app.post("/api/users/create", controllers.user.create);
app.post("/api/users/login", controllers.user.login);
app.put("/api/users/update/:id", verifyToken, controllers.user.update);

// Friends
app.get("/api/friends", controllers.friends.show);

// Posts
app.get("/api/posts", controllers.post.show);
app.post("/api/posts/new/:user_id", controllers.post.create);
app.delete("/api/posts/:id", controllers.post.delete);

// Comments
app.get("/api/comments", controllers.comment.index);
app.get("/api/comments/:post_id/", controllers.comment.getComments);
app.post("/api/comments/create/:user_id/:post_id", controllers.comment.create);
app.delete("/api/comments/:id", controllers.comment.delete)
app.delete("/api/comments/post/:post_id", controllers.comment.deleteMany);

// Server
let port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})