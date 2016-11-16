	var express = require('express');
var app = express();
var https = require('https');

//Definir root
app.get('/', function(req, res) {
  res.send('Inicio da API do cartola');
});

// Aplicação disponível em http://127.0.0.1:9000/
app.listen(9000);


//Acessando API do Cartola
var url_cartola = 'api.cartolafc.globo.com';

app.get('/cartola',function(req, res){

	var time = '';
	var oRetorno = {}
	var opt = {
		host : url_cartola,
		path: '/time/loser1-fc',
		port: 443,
		method: 'GET'

	};

// do the GET request

	https.request(opt,function(res){
		console.log(" cartola>statusCode: ", res.statusCode);
		res.setEncoding('utf8');
		res.on('data',function (d){

			time += d;
		});

		res.on('end',function(){

			callback(JSON.parse(time));
		});

	}).end();
	
	res.send(oRetorno);

});
