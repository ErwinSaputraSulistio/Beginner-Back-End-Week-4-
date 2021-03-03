const express = require("express")
const router = express.Router()
const ticketDataController = require("../controllers/ticketData")

router
.post("/", ticketDataController.createTicketData)
.get("/", ticketDataController.readTicketData)
.get("/:name", ticketDataController.readTicketByName)
.put("/:id", ticketDataController.updateTicketData)
.delete("/:id", ticketDataController.deleteTicketData)

module.exports = router