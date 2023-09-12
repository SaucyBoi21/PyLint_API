const routes = require('./routes/routes')
const multer_config = require('./multer/multer_config')
const express = require("express")
const app = express()
const port = 3000

app.use(express.json())
app.use('/api', routes)

app.listen(port, () => {
    console.log(`App running on port ${port}`)
})