var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var connection = require('./db.js');


//插入新闻
router.post('/', function(req, res) {
    connection.connect();
    var userName = req.body.userName,
        userEmail = req.body.userEmail,
        userTel = req.body.userTel,
        userTime = req.body.userTime;
    /* console.log(userName);
     console.log(userEmail);
     console.log(userTel);
     console.log(userTime);*/
    connection.query('INSERT INTO `news` (`userName`,`userEmail`,`userTel`,`userTime`) VAlUES (?,?,?,?)', [userName, userEmail, userTel, userTime], function(err, result, fields) {
        if (err) {
            console.log('insert error');
            return;
        }
        console.log(result.insertId);
        res.end('ok');
    });
});


module.exports = router;