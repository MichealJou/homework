var express = require('express');
var router = express.Router();
var userDao = require('../../dao/userDao');

/* GET home page. */
router.post('/login', function(req, res, next) {
    checkLogin(req,res);
});
router.get('/', function(req, res, next) {

        res.render('admin/login', { title: '登录页面' });


});



/**
 * 检查用户的信息
 * @param req
 * @param res
 */
function checkLogin(req,res, next){
     var email = req.body.email;
     var password = req.body.password;
    if(email && password){
        userDao.queryByUserPassword(req,res,next);
    }else{

    }

}
module.exports = router;
