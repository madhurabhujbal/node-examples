const url = require('url');

const myURL = new URL('https://www.youtube.com:8080/watch?v=fBNz5xF-Kx4');

//getting serialized url
console.log(myURL.href);
console.log(myURL.toString());

//host or root domain, gets port number as well
console.log(myURL.host);

//hostname, returns everything same as host except the port number
console.log('hostname: '+myURL.hostname);

//Pathname returns everthing between '/' and '?' in url
console.log('pathname: '+myURL.pathname);

//Serialized query..returns everything after '?' in the url
console.log(myURL.search);

//Get url parameters
console.log('parameters in url: '+myURL.searchParams);

//Add parameters
myURL.searchParams.append('abc', '123');
myURL.searchParams.append('lock', '345');
console.log(myURL.searchParams);
console.log(myURL.toString());
