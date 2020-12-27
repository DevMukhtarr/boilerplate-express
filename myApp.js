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

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
})
app.use(express.static(__dirname + '/public'));

app.post('/name',bodyParser.urlencoded({ extended: false }), (req, res) =>{
    let value = req.body.first + " " + req.body.last
    res.json({"name": value})
})
app.get('/secret', (req, res) =>{
    res.send({"secret":process.env.MONGO_URI})
})
mongoose
.connect(process.env.MONGO_URI, 
    { useNewUrlParser: true, useUnifiedTopology: true });


























 module.exports = app;
