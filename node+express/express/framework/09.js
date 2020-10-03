//09.js 如何获取get参数
//引入express
const express = require('express');
//创建网站服务器
const app = express();

app.get('/index',(req,res) =>{
    //获取get请求参数
    res.send(req.query)
})

 //监听端口
app.listen(3000);
