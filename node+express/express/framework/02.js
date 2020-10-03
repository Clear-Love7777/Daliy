//02:中间件概念
//引入express
const express = require('express');

//创建网站服务器
const app = express();

app.get('/request',(req,res,next) =>{
      req.name = "zsdsadas";
      next();
})
app.get('/request',(req,res,next) =>{
    res.send(req.name)
})
//监听端口
app.listen(3000);
console.log('网站服务器启动成功');