const express = require('express')
const router = express.Router()
const ticketDataController = require('../controllers/ticketData')

router
  .post('/', ticketDataController.createTicketData)
  .get('/', ticketDataController.readTicketDataPerPage)
  .put('/:id', ticketDataController.updateTicketData)
  .delete('/:id', ticketDataController.deleteTicketData)

module.exports = router
