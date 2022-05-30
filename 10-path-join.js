const path = require('path');
const fs = require('fs');

const pathStr = path.join('/a', '/b/c', '../../', './d', '/e');
console.log(pathStr);

const pathStr2 = path.join(__dirname, './files/1.txt');
console.log(pathStr2);


fs.readFile(path.join(__dirname, './files/1.txt'), 'utf8', function(err, dataStr) {
    if (err) {
        return console.log(err.message);
    }

    console.log(dataStr);
});