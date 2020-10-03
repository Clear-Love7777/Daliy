const fs = require('fs');
const path = require('path');
//获取绝对路径  下划线下划线dirname
console.log(__dirname);
// 改成绝对路径 拼接
console.log(path.join(__dirname, '01.helloworld.js'))

fs.readFile(path.join(__dirname, '01.helloworld.js'), 'utf8', (err, doc) => {
	console.log(err)
	console.log(doc)
});