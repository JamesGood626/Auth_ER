const express = require('express')
const http = require('http')
const bodyParser = require('body-parser')
const app = express()
const router = require('./router')
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:auth/auth')

app.use(bodyParser.json({type: '*/*'}))
router(app)

const port = process.env.PORT || 5000
app.listen(port)