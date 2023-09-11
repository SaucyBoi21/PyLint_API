const express = require('express')

const app = ex
'app.use(express.json)'
PORT = 3000

app.listen(
    PORT, 
    () => console.log(`Server started on http://localhost:${PORT}`)
)

const routes = require('./routes/routes')

app.use('/api', routes)