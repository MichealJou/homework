var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("dd  ddd"+new Date())
  res.render('index', { title: '首页' });
});

module.exports = router;
