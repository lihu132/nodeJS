const fs = require('fs');

//出现路径拼接错误，是因为提供了./或者../的相对路径
//解决这个问题，可以提供完整的路径

// fs.readFile('./files/1.txt', 'utf8', function (err, dataStr) {
//     if (err) {
//         return console.log(`read file failure${err.message}`);
//     }
//     console.log(`read file success${dataStr}`);
// })


//完整的路径，移植性很差，不利于维护

// fs.readFile('E:\\web learn\\nodeJS\\files\\1.txt', 'utf8', function (err, dataStr) {
//     if (err) {
//         return console.log(`read file failure${err.message}`);
//     }
//     console.log(`read file success${dataStr}`);
// })

//__dirname 表示当前文件所处的目录
console.log(__dirname);

fs.readFile(__dirname + '/files/1.txt', 'utf8', function (err, dataStr) {
    if (err) {
        return console.log(`read file failure${err.message}`);
    }
    console.log(`read file success${dataStr}`);
})