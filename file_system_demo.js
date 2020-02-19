const fs = require('fs');
const path = require('path');

// //creating folder
// fs.mkdir(path.join(__dirname, '/test'), {}, err=> {
//     if (err) throw err;
//     console.log('Folder created');
// });

// //create and write in folder
fs.writeFile(path.join(__dirname, 'test', 'hello.txt' ),
'Hello World!!',
err=>{
    if (err) throw err;
    console.log('Content written in file');
});

//create and write in file using writeFile
fs.writeFile('helloworld.txt',
'Hello World!!',
err=>{
    if (err) throw err;
    console.log('Content written in file');
});

//add or append content in existing file
fs.appendFile('helloworld.txt',
'\nWelcome to this world everyone!!',
err=>{
    if (err) throw err;
    console.log('Content written in file');
});

//Read file content created in folder
fs.readFile(path.join(__dirname, 'test', 'hello.txt' ), 'utf8',
 (err, data)=>{
    if (err) throw err;
    console.log(data);
})

//read file content
fs.readFile('helloworld.txt', 'utf8',
(err, data)=>{
    if (err) throw err;
    console.log(data);
});

//rename file
fs.rename(( 'helloworld.txt' ),
('helloWorld.txt'),
err=>{
    if (err) throw err;
    console.log('File renamed');
});
