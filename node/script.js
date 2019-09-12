const c  = require('./script2.js');
const d = require('http');

const a = c.largeNumber ;
const b = 7 ;

setTimeout(() => {
  console.log(a+b);
}, 3000)

console.log(__dirname);
console.log(d);
