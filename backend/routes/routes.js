const {upload} = require("../multer/multer_config")
const {exec} = require('child_process')
const express = require('express')
const fs = require('fs')
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

router.get('/output', (req, res) => {
    data = req.body
    filename = data.filename

    pylintCommand = `npm exec npm`

    exec(pylintCommand, (error, stdout, stderr) => {
        if (error) {
            res.status(500).json({
                error: `Error: ${error.message}`
            })
        }

        if (stderr) {
            res.status(400).json({
                error: 'No file found'
            })
        }

        var output = stdout;

        res.json({
        "filename": filename,
        "output": output
        })
    })
})