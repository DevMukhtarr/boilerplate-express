const express = require('express');
const app = express();
let bodyParser = require('body-parser');


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
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
})
app.use(express.static(__dirname + '/views/public'));





























 module.exports = app;
