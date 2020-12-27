require('dotenv').config()
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


// app.get('/name', (req, res) => {
//     res.json({"hello": "muhammad"})
// })


// app.get("/name", function(req, res) {
//     let firstName = req.query.first;
//     let lastName = req.query.last;
//     // Use template literals to form a formatted string
//     res.json({
    //       name: `${firstName} ${lastName}`
    //     });
    //   });
    
    // bodyParser.urlencoded({extended: false})
    // app.use(bodyParser.urlencoded({ extended: false }))
    app.use(bodyParser.json())
    mongoose.connect(process.env.MONGO_URI)

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
})
app.use(express.static(__dirname + '/public'));

app.post('/name',bodyParser.urlencoded({ extended: false }), (req, res) =>{
    let value = req.body.first + " " + req.body.last
    res.json({"name": value})
})
app.get('/secret', (req, res) =>{
    res.send({"secret":process.sample.env.MONGO_URI})
    console.log(process.sample.env.MONGO_URI)
})


























 module.exports = app;
