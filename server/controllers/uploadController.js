const multer = require("multer");
const path = require("path");

// Set Storage Engine
const storage = multer.diskStorage({
    destination: 'public/uploads',
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

// init Upload
const upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        checkFileType(file, cb);
    }
}).single("myImage"); 
//this is the form name!!! CHANGE WHEN MAKE FORM IF NEEDED

// file upload check
const checkFileType = (file, cb) => {
    // allowed file tpyes
    const filetypes = /jpeg|jpg|gif|png/;
    // check file uplaod type
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    // check mimetype
    const mimetype = filetypes.test(file.mimetype);
    
    if (mimetype && extname) {
        return cb(null, true);
    } else {
        cb('Error: Images Only.')
    }
}

// POST /api/:user_id/upload
const uploadImage = (req, res) => {
    // console.log("uploadImage", req);
    console.log("in route");
    
    upload(req, res, (err) => {
        // console.log("upload", req);
        
        if (err) {
            res.json({
                error: err,
                msg: "Error Uploading Image"
            })
        } else { 
            console.log("REQ FILE", req.file); 
        }
    })
}

module.exports = {
    upload: uploadImage,
}