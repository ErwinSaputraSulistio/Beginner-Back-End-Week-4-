const ticketDataModel = require("../models/ticketData")

//create
exports.createTicketData = (req, res) => {
   const {filmName, filmGenre, showDate, startTime, endTime, seatPosition, ticketPrice} = req.body
   const newData = {
      filmName, 
      filmGenre, 
      showDate, 
      startTime, 
      endTime, 
      seatPosition, 
      ticketPrice,
      createdAt: new Date(),
      updatedAt: new Date()
   }
   ticketDataModel.newTicketData(newData)
   .then((result) => {res.json({createdData: result})})
   .catch((err) => {console.log(err)})
}

//read
exports.readTicketData = (req,res) => {
   ticketDataModel.getTicketData()
   .then((result) => {res.json({readedData: result})})
   .catch((err) => {console.log(err)})
}
exports.readTicketByName = (req, res) => {
   const TicketName = req.params.name
   ticketDataModel.getTicketByName(TicketName)
   .then((result) => {res.json({readedData: result})})
   .catch((err) => {console.log(err)})
}

//update
exports.updateTicketData = (req, res) => {
   const ticketID = req.params.id
   const {filmName, filmGenre, showDate, startTime, endTime, seatPosition, ticketPrice} = req.body
   const changeData = {
      filmName, 
      filmGenre, 
      showDate, 
      startTime, 
      endTime, 
      seatPosition, 
      ticketPrice,
      updatedAt: new Date()
   }
   ticketDataModel.changeTicketData(changeData, ticketID)
   .then((result) => {res.json({updatedData: result})})
   .catch((err) => {console.log(err)})
}

//delete
exports.deleteTicketData = (req, res) => {
   const ticketID = req.params.id
   ticketDataModel.removeTicketData(ticketID)
   .then((result) => {res.json({deletedData: result})})
   .catch((err) => {console.log(err)})
}
