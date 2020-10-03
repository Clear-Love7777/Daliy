// public/uploads/avatar
//路径拼接 
//windows上是\/d都可以
//Linux上是/
const path = require('path');

const finalPath = path.join('public', 'uploads','avatar');

console.log(finalPath);