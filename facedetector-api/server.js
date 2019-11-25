const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const cors = require('cors');
const saltRounds = 10;
const app = express();
const knex = require('knex');

const register = require('./controlers/register');
const signin = require('./controlers/signin');
const profile = require('./controlers/profile');
const image = require('./controlers/image');

const db = knex ({
  client: 'pg',
  connection: {
    host : '127.0.0.1',
    user : 'postgres',
    password : 'Harnas_20',
    database : "'smart-brain'"
  }
});

db.select('*').from('users').then(data => {
  console.log(data);
});


app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send(database.users);
})

app.post('/signin', (req, res) => {signin.handleSignin(req, res, db, bcrypt)});
app.post('/register', (req, res) => {register.handleRegister(req, res, db, bcrypt, saltRounds)});
app.get('/profile/:id', (req, res) => {profile.handleProfileGet(req,res,db)});
app.put('/image', (req,res) => {image.handleImage(req, res, db)});
app.post('/imageurl', (req,res) => {image.handleApiCall(req, res)});


// Load hash from your password DB.
//bcrypt.compare("bacon", hash, function(err, res) {
    // res == true
//});
//bcrypt.compare("veggies", hash, function(err, res) {
    // res = false
//});

app.listen(3000, ()=> {
  console.log('app is running on port 3000');
})
