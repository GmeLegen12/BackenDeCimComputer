const multer = require("multer")
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "../upload/imageStore");
    },
    filename: (req, file, cb)=>{
        cb(null, `${file.filename}-${Date.now()}`);
    }
});

const upload = multer({ storage });

module.exports = upload;