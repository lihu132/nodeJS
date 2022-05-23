const { log } = require('console');
//1.导入fs模块
const fs = require('fs');


//2. 调用fs.readFile()
//   参数1：获取文件的存放路径
//   参数2：获取文件时采用的编码格式，一般默认UTF8
//   参数3：回调函数，拿到读取失败和成功的结果 err dataStr

fs.readFile('./files/1.txt', 'utf8', function (err, dataStr) {
    // //如果读取成功，则err为null
    // console.log(err);
    // console.log('-----');
    // //如果读取失败，则err的值为错误对象，dataStr为undefined
    // console.log(dataStr);


    if (err) {
        return console.log(`文件读取失败:${err.message}`);
    }

    console.log(`文件读取成功，内容是:${dataStr}`);
})