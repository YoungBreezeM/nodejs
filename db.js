//连接数据库
var mysql = require('mysql');
//创建连接池
var pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'yqf19980217',
    database:'test'
});
// 封装数据对象
function Data()
{  
   // 定义查找成员信息
   this.selectid = function(data,callback)
   {    
       var sql="SELECT uid FROM t_user WHERE uname=? AND binary upwd=?";
       pool.getConnection(function(conn_err, conn) {
        if(conn_err) {
            callback(err,null,null);
        }
          else {
            conn.query(sql,data, function(query_err, result) {
            if (query_err) {
              console.log(" Error: " + query_err.message);
              return;
              }
                conn.release();
                // 释放连接池
                callback(query_err,result);
            });
        }
    });
   }

};

module.exports = Data;