var express = require('express');
var router = express.Router();
var Data = require("./db.js");
var Session = require('./session');
// 获取登录页面

router.get('/', function(req, res, next) {
       
      var sedata = new Session();
      sedata.session(function(session){
          if(req.session.userName){  //判断session 状态，如果有效，则返回主页，否则转到登录页面
               res.render('home.html',{username : req.session.userName,msg:"登录成功"});
          }  
          else{
          	 
               res.redirect('login');
          }
      });
    
});

 
module.exports = router;