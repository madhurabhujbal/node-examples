const fs = require('fs');
const path = require('path');

// //creating folder
// fs.mkdir(path.join(__dirname, '/test'), {}, err=> {
//     if (err) throw err;
//     console.log('Folder created');
// });

//create and write in file
fs.writeFile(path.join(__dirname, 'test', 'hello.txt' ),
'Hello World!!',
err=>{
    if (err) throw err;
    console.log('Content written in file');
});

//write in file without creating folder
fs.writeFile('hello.txt',
'Hello World!!',
err=>{
    if (err) throw err;
    console.log('Content written in file');
});


