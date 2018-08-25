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

app.get("/api/users", verifyToken, controllers.user.getAll);
app.get("/api/users/show/:id", controllers.user.getOne);
app.get("/api/posts", controllers.post.show);
app.get("/api/friends", controllers.friends.show);

app.post("/api/users/create", controllers.user.create);
app.post("/api/login", controllers.user.login);
app.post("/api/posts/new", controllers.post.create);
app.post("/api/comment/new", controllers.comment.create);

app.put("/api/users/update/:username", controllers.user.update);


// Server
let port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})