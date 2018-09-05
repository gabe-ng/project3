const multer = require("multer");

// Set Storage Engine
const storage = multer.diskStorage({
    destination: './public/uploads',
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

// init Upload
const upload = multer({
    storage: storage
}).single("myImage"); //this is the form name!!! CHANGE WHEN MAKE FORM IF NEEDED
