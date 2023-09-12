const {upload} = require("../multer/multer_config") 
const express = require('express')
const router = express.Router()


module.exports = router


router.post('/upload', upload.single('file'), (req, res) => {
    if (!req.file) {
        return res.status(400).json({error: 'No file uploaded'})
    }
    res.json({
        message: 'File Uploaded successfully', 
        fileName: req.file.filename
    })
})

router.get('/get/:fileID', (req, res) => {
    data = req.body    
})