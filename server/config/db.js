const mysql = require('mysql')

const db = mysql.createConnection({
host: "localhost",
port:'3308',
user: "root",
password: "W3Schools@",
database:"blog_posts" 
})

module.exports = db;