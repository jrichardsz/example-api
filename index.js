var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.type('text/plain');
  res.send('Hi, Im the web');
});


app.get('/author', function(req, res) {
    res.type('text/plain');
    res.send('Jonh Doe');
  });

app.listen(process.env.PORT || 8080);
console.log("Server is ready")
