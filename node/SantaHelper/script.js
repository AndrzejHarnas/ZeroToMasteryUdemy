const fs = require('fs');
const file = fs.readFileSync('./floors.txt');

console.log(file.toString());

console.time('santa-time');
const string = file.toString();
const length = string.length;
let floor = 0;
let firstBasement = 0;


for(i=0;i<=length-1;i++) {

  if(string.charAt(i)==='(') { floor += 1; }
  if(string.charAt(i)===')') { floor -= 1; }

  if(floor < 0 && firstBasement === 0) {
    firstBasement = i;
  }

}

console.log('Mikołaj doszedł na:', floor, 'piętro');
console.log('Perwszy raz zszedł do piwnicy po:', firstBasement, 'ruchach' );

console.timeEnd('santa-time');
