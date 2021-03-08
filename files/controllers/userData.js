const userDataModel = require('../models/userData')
const statusCode = require("./status")

// hash password - set up bcrypt
const bcrypt = require('bcrypt')
const salt = bcrypt.genSaltSync(10)

// create
exports.createUserData = (req, res) => {
  try {
    const { realName, userName, userEmail, userPassword } = req.body
    const hashedUserPassword = bcrypt.hashSync(userPassword, salt)
    const newData = {
      realName,
      userName,
      userEmail,
      userPassword: hashedUserPassword,
      createdAt: new Date(),
      updatedAt: new Date()
    }
    userDataModel.newUserData(newData)
      .then(() => { statusCode.statRes(res, 200, 'Berhasil membuat User baru!') })
      .catch((err) => { console.log(err) })
  } catch (err) { res.send('ERROR : ' + err.message) }
}

// read
exports.readUserData = (req, res) => {
  userDataModel.getUserData()
    .then((result) => { statusCode.statRes(res, 200, result) })
    .catch((err) => { console.log(err) })
}
exports.readUserDataById = (req, res) => {
  const userId = req.params.id
  userDataModel.getUserDataById(userId)
    .then((result) => { statusCode.statRes(res, 200, result) })
    .catch((err) => { console.log(err) })
}

// update
exports.updateUserData = (req, res) => {
  try {
    const userId = req.params.id
    const { realName, userName, userEmail, userPassword } = req.body
    const hashedUserPassword = bcrypt.hashSync(userPassword, salt)
    const changeData = {
      realName,
      userName,
      userEmail,
      userPassword: hashedUserPassword,
      updatedAt: new Date()
    }
    userDataModel.changeUserData(changeData, userId)
      .then(() => { statusCode.statRes(res, 200, 'Berhasil ubah data User!') })
      .catch((err) => { console.log(err) })
  } catch (err) { res.send('ERROR : ' + err.message) }
}

// delete
exports.deleteUserData = (req, res) => {
  const userId = req.params.id
  userDataModel.removeUserData(userId)
    .then(() => { statusCode.statRes(res, 200, 'Berhasil hapus data User!') })
    .catch((err) => { console.log(err) })
}
