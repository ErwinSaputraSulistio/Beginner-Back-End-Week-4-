const db = require('../configs/db')

// create
exports.newUserData = (newData) => {
  return new Promise((resolve, reject) => {
    db.query('INSERT INTO user_data SET ?', newData, (err, result) => {
      if (!err) { resolve(result) } else { reject(err) }
    })
  })
}

// read
exports.getUserData = () => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM user_data', (err, result) => {
      if (!err) { resolve(result) } else { reject(err) }
    })
  })
}
exports.getUserDataById = (userId) => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM user_data WHERE userId = ?', userId, (err, result) => {
      result.length === 0 && resolve('Tidak dapat menemukan user dengan ID yang dicari!')
      if (!err) { resolve(result) } else { reject(err) }
    })
  })
}

// update
exports.changeUserData = (changeData, userID) => {
  return new Promise((resolve, reject) => {
    db.query('UPDATE user_data SET ? WHERE userId = ?', [changeData, userID], (err, result) => {
      if (!err) { resolve(result) } else { reject(err) }
    })
  })
}

// delete
exports.removeUserData = (userID) => {
  return new Promise((resolve, reject) => {
    db.query('DELETE FROM user_data WHERE userId = ?', userID, (err, result) => {
      if (!err) { resolve(result) } else { reject(err) }
    })
  })
}
