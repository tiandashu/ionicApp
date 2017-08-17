/**
 * Created by Administrator on 2017/8/7.
 */

var mysql  = require('mysql');  //调用MySQL模块
var express = require('express');
var app = express();
var mysqlconfig = require('./config/mysql.connection'); //调用配置

/*设置API响应头*/
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

//配置api接口端口
var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;
});



//写个register api
app.get('/register',function(req,res){
  //创建一个connection 查询特定的库
    var connection = mysqlconfig('ionicApp');

  //connection 开始连接数据库
    connection.connect(function(err){
      if(err){
        console.log('[connection start]:'+err);
        return;
      }
      console.log('[connection start]: open mysql succeed!');
    });


    //执行SQL语句 插入数据
    connection.query("select * from usertest where username='"+req.query.username+"'", function(err, rows, fields) {

      if (err) {//查询失败
        console.log('[query] - :'+err);
        return;
      }

      if(rows[0]== undefined){
        res.status(200),
        res.send("该账号可以使用");
      }else if(req.query.username == rows[0].username){//procedure
        res.status(200),
        res.send("此账号已存在，请重新输入");
      }

      //关闭connection
      connection.end(function(err){
        if(err){
          console.log('[connection end]:'+err);
          return;
        }
        console.log('[connection end]close mysql succeed!');
      });


    });


});


