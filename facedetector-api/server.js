const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const cors = require('cors');
const saltRounds = 10;
const app = express();
const knex = require('knex');

const db = knex ({
  client: 'pg',
  connection: {
    host : '127.0.0.1',
    user : 'postgres',
    password : 'Harnas_20',
<<<<<<< HEAD
    database : "'smart-brain'"
=======
    database : "smart-brain"
>>>>>>> 749c2403254f62ea89db560c6519145276dd6269
  }
});

db.select('*').from('users').then(data => {
  console.log(data);
});


app.use(bodyParser.json());
app.use(cors());


const database = {
  users: [
    {
      id: '123',
      name: 'John',
      email: 'john@gmail.com',
      password: 'cookies',
      entries: 0,
      joined: new Date()
    },
    {
      id: '124',
      name: 'Sally',
      email: 'sally@gmail.com',
      password: 'cookies',
      entries: 0,
      joined: new Date()
    }
  ],
  login: [
    {
      id:'987',
      has:'',
      email:'john@gmial.com'
    }
  ]
}


app.get('/', (req, res) => {
  res.send(database.users);
})


app.post('/signin', (req, res) => {
  if(req.body.email === database.users[0].email &&
     req.body.password === database.users[0].password) {
    res.json(database.user[0]);
  } else {
    res.status(400).json('error logging in');
  }
})

app.post('/register', (req, res) => {
  const {email, name, password} = req.body;
  bcrypt.genSalt(saltRounds, function(err, salt) {
    bcrypt.hash(password, salt, function(err, hash) {
        console.log(hash)
    });
});

db('users').insert({
  email: email,
  name: name,
  joined: new Date()
})
  .returning('*')
  .then(user => {
    res.json(user[0]);
  })
  .catch(err => res.status(400).json('nie można się zarejestrować'))
})


app.get('/profile/:id', (req, res) => {
  const { id } = req.params;
  let found = false;
 db.select('*').from('users').where({
   id: id
 }).then(user =>{
   console.log(user[0]);
 });
  if(!found) {
    res.status(400).json('not found');
  }
})


app.post('/image', (req,res) => {
  const { id } = req.body;
  let found = false;
  database.users.forEach(user => {
    if(user.id === id) {
      found = true;
      user.entries++;
      return res.json(user.entries);
    }
    if(!found) {
      res.status(400).json('not found');
    }
  })
})



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
