const url = require('url');

const myURL = new URL('https://www.youtube.com:8080/watch?v=fBNz5xF-Kx4');

//getting serialized url
console.log(myURL.href);
console.log(myURL.toString());

//host or root domain, gets port number as well
console.log(myURL.host);

//hostname, returns everything same as host except the port number
console.log('hostname: '+myURL.hostname);

//Pathname
console.log('pathname: '+myURL.pathname);
