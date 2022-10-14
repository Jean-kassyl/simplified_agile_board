require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const app = express()

app.set('view engine', 'ejs')

app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: true}))


app.get('/', (req, res) => {
    res.send("<h1>Welcome where the change happen</h1>")
})


const PORT = process.env.PORT || "3000"

app.listen(PORT, ()=> console.log("server listening at " + PORT))