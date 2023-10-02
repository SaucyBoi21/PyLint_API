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
    pylintCommand = `npm exec pylint ./uploads/${filename} --output-format json`

    exec(pylintCommand, (error, stdout, stderr) => {

        /*if (stderr) {
            res.status(400).send({
                error: `Error: ${stderr}`
            })
        }
        else if (error) {
            res.status(500).send({
                error: `Error: ${error}`
            })
        }*/
        //else if (stdout) {
           res.status(200).send({
                filename: filename,
                output: `Output: ${stdout}`
            }) 
        //}


    })
})

//status codes & logger
//promisified version of exec
//pylint config
//pylint --output (change from text to other data type)
