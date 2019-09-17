const express = require('express');
const bodyParser = require('body-parser')


const app = express();
app.use(express.static(__dirname + '/public'));


//app.use(bodyParser.urlencoded({extended: false}));
//app.use(bodyParser.json());

//app.get('/:id', (req, res) => {
//console.log(req.query);
//  req.body
//console.log(req.header);
//  console.log(req.params);

//res.status(404).send('Not Found');
//});



app.listen(3000);
