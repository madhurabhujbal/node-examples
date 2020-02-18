
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

//returns a path string from an object
pathfrmt = path.format({
    dir: 'C:\\path_demo',
    base: 'file.txt'
});
console.log(pathfrmt);

//if path is absolute path
abspath = path.isAbsolute(__filename);
console.log(abspath);

//joining path
joinpath = path.join("foo1", "foo2", " ");
console.log(joinpath);

//normalize path
normpath = path.normalize('foo1//\\foo2\\foo3..' );
console.log("normalized path is: "+ normpath);

//parsing path
parsepath = path.parse("C:\\path\\dir\\file.");
console.log(parsepath);

//relative path
relativepath = path.relative("C:\\foofoo4\\text.txt", "C:\\foo3\\foo4\\text.txt");
console.log("relative path is: "+ relativepath);

//resolving path
resolvepath = path.resolve("/foo1/foo2/foo3", "../file/txt");
console.log("resolved path is: " + resolvepath);

//path seperator //On Windows, both the forward slash (/) and backward slash (\) are accepted as path segment separators;
 //however, the path methods only add backward slashes (\).
pathsep = "foo1\\foo2\\foo3\\file\\txt".split(path.sep);
console.log("Seperated path is: " + pathsep);

//namespaced path
namesppath = path.toNamespacedPath(__filename);
console.log(namesppath);
