// first set-ups (require)
require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const app = express()
const port = process.env.PORT

// app - settings
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())
app.use(morgan('dev'))
app.listen(port, () => { console.log('Server telah di-aktivasi dengan port ' + port) })

// routers
const ticketDataRouter = require('./files/routes/ticketData')
const transactionDataRouter = require('./files/routes/transactionData')
const userDataRouter = require('./files/routes/userData')
app.use('/tickets', ticketDataRouter)
app.use('/transactions', transactionDataRouter)
app.use('/users', userDataRouter)
