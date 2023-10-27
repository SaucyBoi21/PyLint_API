const {upload} = require("../multer/multer_config")
const {exec} = require('child_process')
const {StatusCodes} = require('http-status-codes')
const express = require('express')
const router = express.Router()


module.exports = router

router.post('/upload', upload.single('file'), (req, res) => {

    res.status(StatusCodes.OK).json({
        message: 'File Uploaded successfully', 
        filename: req.file.filename
    })
    
})

router.get('/output', (req, res, next) => {

    data = req.body
    filename = data.filename

    pylintCommand = `npm exec pylint ./uploads/${filename} `

    exec(pylintCommand, (error, stdout, stderr) => {

        output = stdout

        res.status(StatusCodes.OK).send({
            filename: filename,
            response: output
        }) 


    })
})

router.get('/test', (req, res) => {
    res.status(StatusCodes.OK).send({
        filename: "test file",
        output: "test output"
    })
})
//status codes & logger
//promisified version of exec
//pylint config
//pylint --output (change from text to other data type)
