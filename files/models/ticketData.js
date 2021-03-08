const db = require('../configs/db')

// create
exports.newTicketData = (newData) => {
  return new Promise((resolve, reject) => {
    db.query('INSERT INTO ticket_data SET ?', newData, (err, result) => {
      if (!err) { resolve(result) } else { reject(err) }
    })
  })
}

// read
exports.getTicketDataPerPage = (queryPages, queryLimits) => {
  const calcPaginationLogics = queryPages * queryLimits - queryLimits
  let inputLimitOrNot = ''
  let inputOffsetOrNot = ''
  queryPages !== 0 ? (inputLimitOrNot += 'LIMIT ' + queryLimits + ' ') && (inputOffsetOrNot += 'OFFSET ' + calcPaginationLogics) : null
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM ticket_data ORDER BY updatedAt DESC ' + inputLimitOrNot + inputOffsetOrNot + ';', (err, result) => {
      if (!err && result.length !== 0) { resolve(result) } else if (result.length == 0) { resolve('More film coming soon ~') } else { reject(err) }
    })
  })
}
exports.getTicketNameBySearch = (searchedFilmName) => {
  return new Promise((resolve, reject) => {
    db.query("SELECT * FROM ticket_data WHERE movieName like '%" + searchedFilmName + "%' ORDER BY updatedAt DESC", (err, result) => {
      result.length == 0 && resolve('Judul film yang dicari tidak ditemukan!')
      if (!err) { resolve(result) } else { reject(err) }
    })
  })
}

// update
exports.changeTicketData = (changeData, ticketID) => {
  return new Promise((resolve, reject) => {
    db.query('UPDATE ticket_data SET ? WHERE ticketId = ?', [changeData, ticketID], (err, result) => {
      if (!err) { resolve(result) } else { reject(err) }
    })
  })
}

// delete
exports.removeTicketData = (ticketID) => {
  return new Promise((resolve, reject) => {
    db.query('DELETE FROM ticket_data WHERE ticketId = ?', ticketID, (err, result) => {
      if (!err) { resolve(result) } else { reject(err) }
    })
  })
}
