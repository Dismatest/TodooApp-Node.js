const express = require('express')
const todooAppControlers = require("./controlers/todooAppControlers")

const app = express()

app.use(express.static('./public'))

app.set('view engine', 'ejs')

//setting up the controlers by calling the todooAppControllers
todooAppControlers(app)

const portNumber = 3000
app.listen(portNumber)
console.log(`listening on port: ${portNumber}`)