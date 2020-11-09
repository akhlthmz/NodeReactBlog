const mysql = require('mysql')
const config = require("config")
const host = config.get("HOST")
const user = config.get("USER")
const password = config.get("PASSWORD")
const port = config.get("PORT")

const db = { host,user,password,port }
const connection = mysql.createConnection(db)
  
  
connection.connect(function(err) {
    if (err) {
      console.error('Database connection failed: ' + err.stack);
      return;
    }
    console.log('Connected to MySql database .');
  });

module.exports = connection
  