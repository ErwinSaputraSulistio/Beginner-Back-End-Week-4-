const express = require('express')
const router = express.Router()
const userDataController = require('../controllers/userData')

router
  .post('/', userDataController.createUserData)
  .get('/', userDataController.readUserData)
  .get('/:id', userDataController.readUserDataById)
  .put('/:id', userDataController.updateUserData)
  .delete('/:id', userDataController.deleteUserData)

module.exports = router
