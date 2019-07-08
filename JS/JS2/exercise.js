var database = [
{ username: "Harnas",
  password: "tescik"
},
{ username: "Janek",
  password: "12345"
},
{ username: "Marian",
  password: "333"
}
];



var newsfeed = [
{username: "Bobby", timeline: "So tired"},
{username: "Sally", timeline: "hi everyone"}
  ];

var userNamePrompt = prompt("Podaj login:");
var passwordPrompt = prompt("Podaj hasło:");

function isUserValid(username, password){
  for (var i=0; i< database.length; i++) {
    if(username === database[i].username && password === database[i].password) {
    return true;
    }
  }
  return false;
}

function signIn(user, pass) {

var check = isUserValid(user,pass);


  if(check === true){
     console.log(newsfeed);
   }
   else {
     alert("Przepraszam, podałeś błedny Login lub hasło");

   }
}

signIn(userNamePrompt,passwordPrompt);
