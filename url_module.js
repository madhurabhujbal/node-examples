const url = require('url');

const myURL = new URL('https://www.google.com:8080/');

//getting serialized url
console.log(myURL.href);
console.log(myURL.toString());

//host or root domain, gets port number as well
console.log(myURL.host);

//hostname, returns everything same as host except the port number
console.log(myURL.hostname);
