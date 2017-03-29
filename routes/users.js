var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var connection = require('./db.js');
/* 后台路由页面 */

//获取所有新闻列表

router.get('/getnews', function(req, res, next) {
    connection.query('SELECT * FROM `news` order by id desc', function(err, rows) {
        if (err) {
            res.json(err);
            return;
        }
        console.log(rows);
        res.json(rows);

    });

});

//删除数据

router.post('/delete', function(req, res) {
    var newsid = req.body.newsid;
    connection.query('DELETE FROM `news` WHERE `news`.`id`=?', [newsid], function(err, result) {
        console.log(result.affectedRows);
    });
    res.end('ok');
});



module.exports = router;