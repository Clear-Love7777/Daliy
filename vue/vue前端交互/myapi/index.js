const express = require('express')
const app = express()
const bodyParser = require('body-parser')
// 处理静态资源
app.use(express.static('public'))
// 处理参数
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// 设置允许跨域访问该服务
app.all('*', function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.get('/fdata', (req, res) => {
  res.send('Hello fetch!')
})
app.get('/books', (req, res) => {
  res.send('传统形式的url传递参数!' + req.query.id) 
})
app.get('/books/:id', (req, res) => {
  res.send('Restful形式的url传递参数!' + req.params.id) 
})
app.delete('/books/:id', (req, res) => {
  res.send('Delete请求传递参数!' + req.params.id) 
})
app.post('/books', (req, res) => {
  res.send('Post请求传递参数!' + req.body.uname + '---' + req.body.pwd) 
})
app.put('/books/:id', (req, res) => {
  res.send('Put请求传递参数!' + req.body.uname + '---' + req.body.pwd) 
})

app.get('/json', (req, res) => {
  res.json({
    uname:'lisi',
    age:13,
    gender:'male'
  })
})

app.get('/a1', (req, res) => {
  setTimeout(function(){
  res.send('Hello Tom!')
},1000);
})
app.get('/a2', (req, res) => {
  setTimeout(function(){
  res.send('Hello jerry!')
},2000);
})
app.get('/a3', (req, res) => {
  setTimeout(function(){
  res.send('Hello world!')
},3000);
})
// 路由
app.get('/data', (req, res) => {
  res.send('Hello World!')
})
app.get('/data1', (req, res) => {
  setTimeout(function(){
  res.send('Hello Tom!')
},1000);
})
app.get('/data2', (req, res) => {
  res.send('Hello Jerry!')
})
// 启动监听
app.listen(3000, () => {
  console.log('running...')
})