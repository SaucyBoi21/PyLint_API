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

    //pylintCommand = `npm exec pylint --help`
    pylintCommand = `npm exec pylint ./uploads/sample3.py`

    exec(pylintCommand, (error, stdout, stderr) => {
        /* if (error) {
            res.status(500).json({
                error: `Error: ${error.message}`
            })
        }

        if (stderr) {
            res.status(400).json({
                error: `Standard Error: ${stderr}`
            })
        }

        else { */
            res.status(200).json({
                filename: filename,
                output: `Output: ${stdout}`
            })
        //}

    })
})