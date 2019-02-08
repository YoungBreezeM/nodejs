var express = require('express');
var router = express.Router();
var Data = require("./db.js");
var Session = require('./session');

// 获取登录页面

router.get('/', function(req, res, next) {
       
      var sedata = new Session();
      sedata.session(function(session){
           req.session.userName = null; // 删除session
           
           res.redirect('login');
           
      });
    
});

 
module.exports = router;