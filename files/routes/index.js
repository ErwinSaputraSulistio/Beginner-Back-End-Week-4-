const express = require('express')
const route = express.Router()
const ticketDataRouter = require('./ticketData')
const transactionDataRouter = require('./transactionData')
const userDataRouter = require('./userData')

route.use('/tickets', ticketDataRouter)
route.use('/transactions', transactionDataRouter)
route.use('/users', userDataRouter)

module.exports = route
