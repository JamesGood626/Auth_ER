const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const router = require('./router')

app.use(bodyParser.json({type: '*/*'}))
router(app)

const port = process.env.PORT || 5000
app.listen(port)