const db = require("../configs/db")

//create
exports.newTicketData = (newData) => {
   return new Promise((resolve, reject) => {
      db.query("INSERT INTO ticketdata SET ?", newData, (err, result) => {
         if(!err) {resolve(result)}
         else {reject(err)}
      })
   })
}

//read
exports.getTicketData = () => {
   return new Promise((resolve, reject) => {
      db.query("SELECT * FROM ticketdata", (err, result) => {
         if(!err) {resolve(result)}
         else {reject(err)}
      })
   })
}
exports.getTicketByName = (searchedFilmName) => {
   return new Promise((resolve, reject) => {
      db.query("SELECT * FROM ticketdata WHERE filmName like '%" + searchedFilmName + "%'", (err, result) => {
         result.length == 0 && resolve("Not Found")
         if(!err) {resolve(result)}
         else {reject(err)}
      })
   })
}

//update
exports.changeTicketData = (changeData, ticketID) => {
   return new Promise((resolve, reject) => {
      db.query("UPDATE ticketdata SET ? WHERE ticketID = ?", [changeData, ticketID], (err, result) => {
         if(!err) {resolve(result)}
         else {reject(err)}
      })
   })
}

//delete
exports.removeTicketData = (ticketID) => {
   return new Promise((resolve, reject) => {
      db.query('DELETE FROM ticketdata WHERE ticketID = ?', ticketID, (err, result)=>{
         if(!err) {resolve(result)}
         else {reject(err)}
      })
   })
}
