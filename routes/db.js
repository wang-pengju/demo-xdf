var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    post: '3306',
    user: 'ourtime',
    password: '526527',
    database: 'xdftask'
});

module.exports = connection;