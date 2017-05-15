var express = require('express');
var app = express();
var importedQuotes = require('./quotes');
// var importedTacos = require('./tacos');

app.get('/', function(req, res){
  res.send('Quotes from Alan Watts');
});

app.get('/api/random-quote', function(req, res){
  res.send(importedQuotes.alanWattsQuotes[Math.floor(Math.random() * importedQuotes.alanWattsQuotes.length)]);
});

app.get('/api/quotes', function(req, res){
  res.send(importedQuotes.alanWattsQuotes);
});


//tacos and stuff
app.get('/api/tacokinds', function(req, res){
  res.send(
    {
      meat: "carne asada",
      toppings: ["pico de gallo", "cilantro", "onion"]
    },
    {
      meat: "pescado",
      toppings: ["cilantro", "onion"]
    },
    {
      meat: "chicken",
      toppings: ["cilantro", "onion"]
    }
  );
});


console.log(importedQuotes.alanWattsQuotes);

var server = app.listen(3000, function () {
var port = server.address().port;
  console.log('Example app listening at http://localhost:%s', port);
});
