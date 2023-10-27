const routes = require('./routes/routes')
const fileUpload = require('express-fileupload')
const multer_config = require('./multer/multer_config')
const express = require("express")
const { StatusCodes } = require('http-status-codes')
const cors = require("cors")
const dotenv = require("dotenv")
import { connectToDatabase } from "./database/database"
dotenv.config();

const { ATLAS_URI } = process.env

if (!ATLAS_URI) {
    console.error("No ATLAS_URI environment variable has been defined in config.env")
}

connectToDatabase(ATLAS_URI!)
    .then(() => {
        const app = express()
        const port = 3000
        app.use(cors())
        app.use(express.json())
        app.use('/api', routes)
        app.use(fileUpload())

        app.listen(port, () => {
            console.log(`App running on port ${port}`)
        })


    })
    .catch(error => console.error(error))

