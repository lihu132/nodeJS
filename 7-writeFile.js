const { log } = require('console');
const fs = require('fs');


//2. 调用fs.writeFile()方法，写入文件的内容
//   参数1：表示文件的存放路径
//   参数2：表示写入的内容
//   参数3：回调函数
fs.writeFile("f:/files/2.txt", 'abcd', 'utf8', function(err) {
    //成功以后，err为null
    console.log(err);
});