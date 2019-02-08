   var express = require('express');
     var app = express();
     var session = require('express-session');
     var cookieParser=require("cookie-parser");
     app.use(cookieParser());//这里要加()
  app.use(session({
    secret :  'spflinux', // 对session id 相关的cookie 进行签名
     name:'adminapp',
    resave : false,
    saveUninitialized: false, // 是否保存未初始化的会话
    cookie : {
        maxAge : 1000 , // 设置 session 的有效时间，单位毫秒
    },

}));
function Session() {
	// body...
	this.session = function(callback)
	{

     callback(session);
	}
}
module.exports = Session;