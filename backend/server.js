const express = require('express')
const dotenv = require('dotenv').config()
const port = process.env.PORT

const app = express()

app.get('/api/goals', (req, res) => (
    res.send('This are my goals')
))

app.listen(port, () => console.log(`Server is listening on port ${port}`))
