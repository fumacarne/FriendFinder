
var mysql = require('mysql2')
var  db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'qwerty212342467',
    database : 'persons_DB'
  });
   
  // db.connect();
   
  
   
  // db.end();

  module.exports=db;