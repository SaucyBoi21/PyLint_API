const express = require('express')

const router = express.Router()

module.exports = router

router.post('/post', (req, res) => {
    
    const test_filepath = `../python_files/test.py`
    const { filename } = req.body
    const { file } = req.body


    res.status(200).send({
        filename,
        file 
    })

})