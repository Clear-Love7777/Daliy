//07.js 构建模块化路由的基础
//引入express
const express = require('express');
//创建网站服务器
const app = express();
//创建路由对象
const home = express.Router();
//为路由对象匹配请求路径
app.use('/home',home);
//创建二级路由
 home.get('/index',(req,res)=>{
     res.send('欢迎来到博客首页')
 })

 
//监听端口
app.listen(3000);
