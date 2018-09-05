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

// POST /api/:user_id/upload
const uploadImage = (req, res) => {
    upload(req, res, (err) => {
        if (err) {
            res.json({
                error: err,
                msg: "Error Uploading Image"
            })
        } else {
            console.log(req.file); 
        }
    })
}

module.exports = {
    upload: uploadImage,
}