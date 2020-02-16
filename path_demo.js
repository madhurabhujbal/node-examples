 const path = require('path');

//print current file
console.log(__filename);

//print current working directory
filename = path.basename(__filename);
console.log(filename);

//print extension
ext = path.extname(__filename);
console.log(ext);

//print directory
console.log(path.dirname("C:\\my_website\\html\\home.html"));