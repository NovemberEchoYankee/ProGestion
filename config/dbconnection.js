
// fichier utilisé à chaque fois qu'une requete est faite sur la base de données

//Package nécéssaire
var mysql=require('mysql');
var express = require('express')
var app = express();

//Informations de connexion à la BDD
var connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    database:'progestion',
	charset : 'utf8mb4',
    multipleStatements:true
});

//Méthode connect pour créer une connexion
connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

//Rend la connexion active utilisable dans d'autres scripts (notamment dans le model)
module.exports = connection;

