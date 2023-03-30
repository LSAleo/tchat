var http = require('http');
var formidable = require('formidable');
var fs = require('fs');
var pages = require('pages.js');
var mdp = 'moi'
var url = require('url');

http.createServer(function (req, res) {

    res.writeHead(200, {'Content-Type': 'text/html'});
    console.log('hello');
    var q = url.parse(req.url, true);
    console.log(q.href);
    if(q.href == "/add"){
        console.log('appel a la fonction ajouté')


    }
    else if(q == "/remove"){
        console.log('appel a la fonction supp')


    }
    else if(q == "/update"){
        console.log('appel a la fonction mettre a jour')


    }
    else{
        console.log('appel a la fonction par defaut')


    }
    res.write('<form action="/" method="post" enctype="multipart/form-data">');
    res.write('<input type="text" name="pseudo" value="Entrez votre pseudo"><br>');
    res.write('<p>Mot de Passe</p><br>');
    res.write('<input id="mdpa" type="password" name="password" ><br>');
    res.write('<input type="submit">');
    res.write('</form>');

 


}).listen(8080);