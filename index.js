/*const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
  socket.on('chat message', msg => {
    io.emit('chat message', msg);
  });
});

http.listen(port, () => {
  console.log(`Socket.IO server running at http://localhost:${port}/`);
});

// CONNEXION BASE DE DONNEE

const mysql = require('mysql');

// créer une connexion à la base de données
 const connection = mysql.createConnection({
   host: 'localhost',
   user: 'root',
   database: 'tchat'
 });

 // établir la connexion à la base de données
 connection.connect((error) => {
   if (error) {
     console.error('Erreur de connexion à la base de données :', error);
   } else {
     console.log('Connexion réussie à la base de données');
   }
 }); */


 











const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = process.env.PORT || 3000;
var mysql = require('mysql');
var url = require('url');

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/ajouter', (req, res) => {
  var q = url.parse(req.url, true).query;
  var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "mydb"
  });

  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var username = q.username;
    var password = q.password;
    console.log(username + password);
    var sql = `INSERT INTO users (name, password) VALUES ("${username}", "${password}")`;
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("1 user inserted");
    });
  });
});

io.on('connection', (socket) => {
  socket.on('chat message', msg => {
    io.emit('chat message', msg);
  });
});

http.listen(port, () => {
  console.log(`Socket.IO server running at http://localhost:${port}/`);
});