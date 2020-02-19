const url = require('url');

const myURL = new URL('https://www.google.com/');

//getting serialized url
console.log(myURL.href);
console.log(myURL.toString());