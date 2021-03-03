//first set-ups (require)
const express = require("express")
const bodyParser = require("body-parser")
const app = express()
const port = 8000

//app - settings
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.listen(port, () => {console.log("Server telah di-aktivasi dengan port " + port)})

//routers
const ticketDataRouter = require("./files/routes/ticketData")
app.use("/tickets", ticketDataRouter)
