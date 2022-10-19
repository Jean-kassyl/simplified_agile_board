require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const path = require('path')

const app = express()

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: true}))


app.get('/', (req, res) => {
    res.render('home', {title: "home page", company_name: "Agile Board"});
})

app.get('/register', (req, res) => {
    res.render('company_register', {title: "register", company_name: "Agile Board"});
})

app.post('/register', function(req, res){
    const bod = req.body;
    console.log(bod);
    res.redirect('/register')
})


const PORT = process.env.PORT || "3000"

app.listen(PORT, ()=> console.log("server listening at " + PORT))