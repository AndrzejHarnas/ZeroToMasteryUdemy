const express = require('express');

const app = express();
const user = {
  name: 'Natalia',
  hobby: 'Plażing'
}


app.get('/', (req, res) => {
//  res.send('<h1>hello<h1>');
//res.send(user);
res.send('getting root');
});

app.get('/profile', (req, res) => {
//  res.send('<h1>hello<h1>');
//res.send(user);
res.send('getting profile');
});

app.post('/profile', (req, res) => {
res.send(user);
});





app.listen(3000);
