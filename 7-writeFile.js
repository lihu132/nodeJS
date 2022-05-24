const { log } = require('console');
const fs = require('fs');


//2. 调用fs.writeFile()方法，写入文件的内容
//   参数1：表示文件的存放路径
//   参数2：表示写入的内容
//   参数3：回调函数
fs.writeFile("./files/3.txt", 'ok123', 'utf8', function (err) {
    //成功以后，err为null
    // console.log(err);

    //失败，则报错误码
    if (err) {
        console.log(`文件写入失败${err.message}`);
    }
    else {
        console.log(('文件写入成功！'));
    }
});