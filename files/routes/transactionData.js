const express = require('express')
const router = express.Router()
const transactionDataController = require('../controllers/transactionData')

router
  .post('/', transactionDataController.createTransactionData)
  .get('/', transactionDataController.readTransactionDataPerPage)
  .get('/:id', transactionDataController.readTransactionDataById)
  .put('/:id', transactionDataController.updateTransactionData)
  .delete('/:id', transactionDataController.deleteTransactionData)

module.exports = router
