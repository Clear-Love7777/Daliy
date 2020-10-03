//04：中间件应用
//引入express
const express = require('express');

//创建网站服务器
const app = express();

//网站公告
// app.use((req,res,next)=>{
//     res.send('网站正在维护')
// })

app.use('/admin',(req,res,next) =>{
    //用户没有登录
    let isLogin = true;
    //如果登录了
    if(isLogin){
        //请求继续向下进行
        next()
    }else{
        //没有登录 客户端直接作出响应
        res.send('还没有登录')
    }
})

app.get('/admin',(req,res) =>{
    res.send('您已经登录 可以访问当前页面')
})

app.use((req,res,next)=>{
    //为客户端响应404状态码以及提示信息
    res.status(404).send('当前访问的页面不存在')
})
//监听端口
app.listen(3000);
console.log('网站服务器启动成功');