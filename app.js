var express = require('express');
var app = express();

//Definir root
app.get('/', function(req, res) {
  res.send('Inicio da API do cartola');
});

// Aplicação disponível em http://127.0.0.1:9000/
app.listen(9000);