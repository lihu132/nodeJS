const path = require('path');
const fs = require('fs');

const pathStr = path.join('/a', '/b/c', '../', '/d', '/e');
console.log(pathStr);

const pathStr2 = path.join(__dirname, './files/1.txt');
console.log(pathStr2);