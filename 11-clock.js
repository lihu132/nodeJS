const fs = require('fs');
const { resolve } = require('path');
const path = require('path');


//regex to match <style> and <script>
const regStyle = /<style>[\s\S]*<\/style>/;
const regScript = /<script>[\s\S]*<\/script>/;


//read file
fs.readFile(path.join(__dirname, './download/index.html'), 'utf8', (err, dataStr) => {
    if (err) return console.log(`read file error ${err.message}`);



    resolveCSS(dataStr);
    resolveJS(dataStr);
    // resolveHTML(dataStr);
})

function resolveCSS(htmlStr) {
    const r1 = regStyle.exec(htmlStr);

    const newCSS = r1[0].replace('<style>', '').replace('</style>', '');

    fs.writeFile(path.join(__dirname, './download/index.css'), newCSS, 'utf8', function (err) {
        if (err) return console.log(`write file error ${err.message}`);
        console.log('write fille success');
    });
};

function resolveJS(htmlStr) {
    const r1 = regScript.exec(htmlStr);

    const newJS = r1[0].replace('<script>', '').replace('</script>', '');

    fs.writeFile(path.join(__dirname, './download/index.js'), newJS, 'utf8', function (err) {
        if (err) return console.log(`write file error ${err.message}`);
        console.log('write fille success');
    });
};

function resolveHTML() {

};