var _ = require('lodash');
var array = [1,2,3,4,5,6];
const funyTest =(item) => {
  console.log(item*item);
}

console.log('answear', _.without(array,3));
array.forEach(funyTest);
