var https = require('https');
var express = require('express');
var cartolaApi = require('./cartola_api.js');
var app = express();


//Definir root
app.get('/', function(req, res) {
  res.send('Inicio da API do cartola');
});

// Aplicação disponível em http://127.0.0.1:9000/
app.listen(80);


//Acessando API do Cartola
var url_cartola = 'api.cartolafc.globo.com';

app.get('/cartola',function(req, res){
	getInfoCartola(function(data){
		res.send(data)
	});
});

app.get('/teste',function (req,res){
	cartolaApi.ImHere();
	res.send('aqui');
});

function getInfoCartola(callback){
	var oRetorno = {}
	var opt = {
		host : url_cartola,
		path: '/time/loser1-fc',
		port: 443,
		method: 'GET'

	};
	https.request(opt,function(res){
		var time = '';
		console.log(" cartola>statusCode: ", res.statusCode);
		res.setEncoding('utf8');
		res.on('data',function (d){

			time += d;
		});

		res.on('end',function(){
			callback(JSON.parse(time));
		});

	}).end();
}
