//引入express
const express = require('express');
const bodyParser = require('body-parser');
//创建网站服务器
const app = express();

app.use(fn({ a : 1}))

function fn(){
    return function (req,res,next){
          if(obj.a == 1){
              console.log(req.url);
          }else{
        console.log(req.method);
    }
    next();
}
}
app.get('/',(req,res)=>{
    res.send('ok')
})

 //监听端口
app.listen(3000);
