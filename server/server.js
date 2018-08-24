// Set up Express

const express = require("express");
const app = express();

// Set up JSON

app.use(express.json());

// CORS

const cors = require("cors");

app.use(cors());

// Import controllers

let controllers = require("./controllers");

// Routes

app.get("/api/users", controllers.user.getAll);
app.get("/api/users/show/:id", controllers.user.getOne);

app.post("/api/users/create", controllers.user.create);

app.put("/api/users/update/:username", controllers.user.getUsers);

// Server
let port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})