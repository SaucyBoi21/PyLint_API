const {upload} = require("../multer/multer_config")
const {exec} = require('child_process')
const {StatusCodes} = require('http-status-codes')
const express = require('express')
const fs = require('fs')
const router = express.Router()


module.exports = router

router.post('/upload', upload.single('file'), (req, res) => {
    if (!req.file) {
        return res.status(StatusCodes.NOT_FOUND).json({error: 'No file uploaded'})
    }
    res.json({
        message: 'File Uploaded successfully', 
        fileName: req.file.filename
    })
})

    router.get('/output', async (req, res, next) => {
    data = await req.body
    filename = await data.filename

    pylintCommand = `npm exec pylint ./uploads/${filename} --output-format json`

    exec(pylintCommand, (error, stdout, stderr) => {

        res.status(StatusCodes.OK).send({
            filename: filename,
            output: `Output: ${stdout}`
        }) 


    })
})

//status codes & logger
//promisified version of exec
//pylint config
//pylint --output (change from text to other data type)
