var express = require('express');
var router = express.Router();
var Data = require("./db.js");
var Session = require('./session');
// 获取登录页面

router.get('/', function(req, res, next) {
    
       res.render('login.html',{msg:""});
      
    
});
// 用户登录
router.post('/', function(req, res, next) {
      var sedata = new Session();
      var data = [
       req.body.uname,
       req.body.upwd
      ];

      sedata.session(function(session)
        {  
           var face = new Data();
           
           face.selectid(data,function(err,result){
            if(result.length>0){
                req.session.userName = req.body.uname;
                res.redirect('/');
                 
            }else{
                res.render("login.html",{msg:"用户名或密码有误"});
            }
            
           });
           
        });
      
});
 
module.exports = router;