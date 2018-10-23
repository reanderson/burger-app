// require dotenv for env usage
require("dotenv").config();

// Set up MySQL connection.
console.log(process.env.JAWSDB_URL)
var mysql = require("mysql");
var connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL)
} else {
  connection = mysql.createConnection({
      host: "localhost",
      port: 3306,
      user: "root",
      password: process.env.MYSQL_PASSWORD || "",
      database: "burger_db"
    }
  });

// Make connection.
connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;