//03：app.use方法

//引入express
const express = require('express');

//创建网站服务器
const app = express();

//接收所有请求的中间件
app.use((req,res,next)=>{
    console.log('请求走了app.use中间件');
    next();
})

app.use('/request',(req,res,next)=>{
    console.log('请求走了app.use /request中间件');
    next();
})

app.get('/list',(req,res)=>{
    res.send('/list')
})

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