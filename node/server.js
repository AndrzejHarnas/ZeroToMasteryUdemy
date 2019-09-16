const http = require('http');


const server = http.createServer((request, response) => {
//console.log('headers:', request.headers);
console.log('method:', request.method);
console.log('url:', request.url);

const user = {
  name: 'Andrzej',
  hobby: 'Guitar'
}

//response.setHeader('Content-Type', 'text/html');
response.setHeader('Content-Type', 'application/json');
//response.end('<h1>Hello</h1>');
response.end(JSON.stringify(user));
})

server.listen(3000);