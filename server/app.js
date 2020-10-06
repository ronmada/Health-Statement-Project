require('dotenv').config()
const timeStampFunc = require('./timeStampFunc')
const mongoConnection = require('./mongoConnection')
const express = require('express')
const cors = require('cors')
const routes = require('./routes')

const app = express()
exports.app = app

mongoConnection()
routes()

app.use(express.json()) // Make sure it comes back as json

app.use(express.urlencoded({ extended: false }))

app.use(cors())

app.use(timeStampFunc)

app.get('/', (req, res) => {
  res.status(200).send(`<h7>${req.hostname}</h7>`)
})

const PORT = process.env.PORT || 5000 //set port
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`)) //start server
