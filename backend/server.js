const routes = require('./routes/routes')
const multer_config = require('./multer/multer_config')
const express = require("express")
const { StatusCodes } = require('http-status-codes')
const cors = require("cors")
const app = express()
const port = 3000

app.use(express.json())
app.use('/api', routes)

app.use((err, req, res, next) => {
    err.statusCode = err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR
    res.status(err.statusCode).json({
        status: err.status,
        message: err.message
    })
})

app.use(cors({
    //origin: 'http://localhost:4200',
    //methods: ['GET', 'POST'],
    credentials: true,
    allowedHeaders: ['X-Requested With, content-type'] 
}))

app.listen(port, () => {
    console.log(`App running on port ${port}`)
})