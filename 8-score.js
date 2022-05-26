const { log } = require('console');
const fs = require('fs');

//读取文件
fs.readFile('./download/成绩.txt', 'utf8', function(err, dataStr) {
    if (err) {
        return console.log(`读取文件失败：${err.message}`);
    }

    // console.log(`读取文件成功：${dataStr}`);

    const arrOld = dataStr.split(' ');
    const arrNew = [];
    for (var i = 0; i < arrOld.length; i++) {
        //replace 不会修改旧的string，只会返回一个新的string
        arrNew[i] = arrOld[i].replace('=', ':');
    }
    console.log(arrNew);

    // arrOld.forEach(item => {
    //     arrNew.push(item.replace('=', ':'))
    // })

    // console.log(arrNew);

    const newStr = arrNew.join('\r\n');
    console.log(newStr);

    fs.writeFile('./download/成绩-OK.txt', newStr, 'utf8', function(err) {
        if (err) {
            return console.log(`文件写入失败${err.message}`);
        }
        console.log('成绩写入成功');
    });

});