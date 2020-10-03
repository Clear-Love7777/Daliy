//06:捕获错误
//引入express
const express = require('express');
const fs = require('fs');
const promisify = require('util').promisify;
const readFile = promisify(fs.readFile);
//创建网站服务器
const app = express();
// try catch 捕获错误
app.get('/index', async (req,res,next)=>{
    try{
        await readFile('./aaa.js')
    }catch(ex){
        next(ex);
    }
})

//错误处理中间件
app.use((err,req,res,next)=>{
    res.status(500).send(err.message);
})
//监听端口
app.listen(3000);
console.log('网站服务器启动成功');