const fs = require('fs');
const path = require('path');

//creating folder
fs.mkdir(path.join(__dirname, '/test'), {}, err=> {
    if (err) throw err;
    console.log('Folder created');
});
