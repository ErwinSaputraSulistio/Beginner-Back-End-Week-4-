// first set-ups (require)
require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const app = express()
const port = process.env.PORT
const route = require('./files/routes')

// app - settings
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())
app.use(morgan('dev'))
app.listen(port, () => { console.log('Server telah di-aktivasi dengan port ' + port) })

// routers
app.use('/v1', route)
