const {upload} = require("../multer/multer_config")
const {exec} = require('child_process')
const {StatusCodes} = require('http-status-codes')
const CustomError = require('../utils/customerror')
const express = require('express')
const cors = require('cors')
const fs = require('fs')
const router = express.Router()


module.exports = router

router.post('/upload', upload.single('recfile'), (req, res) => {

    /*if (err) {
        console.log(err)
    }*/
    res.status(StatusCodes.OK).send({
        message: `${req.file.filename} uploaded successfully!`, 
        filename: req.file.filename
    })
    
})

router.get('/output/:filename', (req, res, next) => {

    filename = req.params.filename

    pylintCommand = `npm exec pylint ./uploads/${filename} -- --output-format=json`

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
