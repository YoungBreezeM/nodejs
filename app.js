
var express = require('express');
var app = express();
var path = require('path');
var session = require('express-session');
var bodyparser = require('body-parser');
var login = require('./routes/login');
var status = require('./routes/status');
var logout = require('./routes/logout');
var cookieParser=require("cookie-parser");
// 下面三行设置渲染的引擎模板
app.set('views', path.join(__dirname, 'views')); //设置模板的目录
app.set('view engine', 'html'); // 设置解析模板文件类型：这里为html文件
app.engine('html', require('ejs').__express); // 使用ejs引擎解析html文件中ejs语法

app.use(bodyparser.json()); // 使用bodyparder中间件，
app.use(bodyparser.urlencoded({ extended: false}));
app.use(cookieParser());//这里要加()
// 使用 session 中间件
app.use(session({
    secret :  'spflinux', // 对session id 相关的cookie 进行签名
     name:'adminapp',
    resave : true,
    saveUninitialized: false, // 是否保存未初始化的会话
    cookie : {
        maxAge : 1000 , // 设置 session 的有效时间，单位毫秒
    },

}));

// 获取登录页面
app.use('/login',login);
// 判断用户状态
app.use('/',status);

// 退出
app.use('/logout',logout);
app.listen(8000);