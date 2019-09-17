const fs = require('fs');
const file = fs.readFileSync('./floors.txt');

console.log(file.toString());
const string = file.toString();
const length = string.length;
let floor = 0;


for(i=0;i<=length-1;i++) {

  if(string.charAt(i)==='(') { floor += 1; }
  if(string.charAt(i)===')') { floor -= 1; }

}

console.log(floor);
