// dao/userDao.js
// 实现与MySQL交互
var mysql = require('mysql');
var $conf = require('../conf/db');
var $util = require('../util/util');
var $sql = require('./userSqlMapping');
var crypto = require('crypto');

// 使用连接池，提升性能
var pool  = mysql.createPool($util.extend({}, $conf.mysql));

// 向前台返回JSON方法的简单封装


module.exports = {
    queryByUserPassword:function(req, res, next){
        var email =  req.body.email;
        var password = req.body.password;
        var md5 =  crypto.createHash('md5');
            md5.update(password);
        var d = md5.digest('hex');
        pool.getConnection(function(err,connection){
             connection.query($sql.queryByUserPassword,[email,d] ,function(err, result) {
                if(result.length>0){
                    req.session.isFlag=true;
                    res.redirect('/');

                }else{

                    res.render('admin/login', { title: '登录页面' ,flag:true});
                }

                connection.release();
            });
        });
   }
    
};
