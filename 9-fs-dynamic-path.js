const fs = require('fs');

fs.readFile('./files/1.txt', 'utf8', function(err, dataStr) {
    if (err) {
        return console.log(`read file failure${err.message}`);
    }
    console.log(`read file success${dataStr}`);
})