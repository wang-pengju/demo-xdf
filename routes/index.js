var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var connection = require('./db.js');

var fs = require('fs');

//插入新闻
router.post('/', function(req, res) {
    var userName = req.body.userName,
        userEmail = req.body.userEmail,
        userTel = req.body.userTel,
        userTime = req.body.userTime;
    console.log(userName);
    console.log(userEmail);
    console.log(userTel);
    console.log(userTime);
    // connection.query('INSERT INTO `news` (`userName`,`userEmail`,`userTel`,`userTime`) VAlUES (?,?,?,?)', [userName, userEmail, userTel, userTime], function(err, result, fields) {
    //     if (err) {
    //         console.log('insert error');
    //         return;
    //     }
    //     console.log(result.insertId);
    //     res.end('ok');
    // });
    var rows = (JSON.parse(fs.readFileSync('./data.json')));
    console.log(rows);
    var useid = rows.rows.length;
    rows.rows.push({
        id: useid,
        userName: userName,
        userEmail: userEmail,
        userTel: userTel,
        userTime: userTime
    });
    fs.writeFileSync('./data.json', JSON.stringify(rows));
    res.end('ok');
});


module.exports = router;