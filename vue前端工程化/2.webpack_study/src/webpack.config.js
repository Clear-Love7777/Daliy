module.exports = {
    //编译模式
    mode:'development', //development  production
    entry: path.join(_dirname, './src/index.js'),
    output:{
        path:join(_dirname, './dist'),//输出文件的存放路径
       filname:'bundle.js'//输出文件名称
    }
};