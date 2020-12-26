var express = require('express');
var app = express();


// app.get('/name', (req, res) => {
//     res.json({"hello": "muhammad"})
// })


app.get("/name", function(req, res) {
    var firstName = req.query.first;
    var lastName = req.query.last;
    // Use template literals to form a formatted string
    res.json({
      name: `${firstName} ${lastName}`
    });
  });
  





























 module.exports = app;
