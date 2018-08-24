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

// Server
let port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})