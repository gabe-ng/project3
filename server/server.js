const express = require("express");
const jwt = require("jsonwebtoken");
const cors = require("cors");

// init Express
const app = express();

// Set up JSON
app.use(express.json());

// CORS
app.use(cors());

// Public Folder
app.use(express.static('public'));

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

app.get("/profileimage/:imagename", (req, res) => {
    res.sendFile("public/uploads/" + req.params.imagename, { root: __dirname });
})

// Users
app.get("/api/users", verifyToken, controllers.user.index);
app.get("/api/users/:id", verifyToken, controllers.user.show);
app.post("/api/users/create", controllers.user.create);
app.post("/api/users/login", controllers.user.login);
app.put("/api/users/:id", verifyToken, controllers.user.update);

// Profile Images
app.get("/api/profileimages/", controllers.profileImages.index);
app.get("/api/profileimages/:user_id", controllers.profileImages.show);
app.post("/api/:user_id/upload", controllers.profileImages.upload);


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
server = app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})

let socket = require('socket.io');
io = socket(server);

io.on('connection', (socket) => {
    console.log(socket.id);
    // socket.removeAllListeners();

    socket.on('SEND_MESSAGE', function (data) {
        io.emit('RECEIVE_MESSAGE', data);
    })
})