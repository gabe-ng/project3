let db = require("./models");

let userList = [

]

let postList = [
]

db.User.deleteMany({}, (err, users) => {
    // db.User.create(userList, (err, users) => {
    //     if (err) return console.log("ERROR", err);
    //     console.log("All users: ", users);
    //     console.log("Created ", users.length, "users");
    // });
});

db.Post.deleteMany({}, (err, posts) => {
    // db.Post.create(postList, (err, posts) => {
    //     if (err) {
    //         return console.log("ERROR", err);
    //     }
    //     console.log("All posts: ", posts);
    //     console.log("Created ", posts.length, "posts");
    //     // process.exit();
    // });
});

db.Comment.deleteMany({}, (err, comments) => {
    if (err) {
        console.log("Error", err);
        return;
    }
});

db.ProfileImage.deleteMany({}, (err, comments) => {
    if (err) {
        console.log("Error", err);
        return;
    }
    process.exit();
});
