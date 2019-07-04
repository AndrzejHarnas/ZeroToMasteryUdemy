var database = [
{ username: "Harnas",
  password:"tescik"}
];



var newsfeed = [
{username: "Bobby", timeline: "So tired"},
{username: "Sally", timeline: "hi everyone"}
  ];

var userNamePrompt = prompt("Podaj login");
var passwordPrompt = prompt("Podaj hasło");

function signIn(user, pass) {
  if(user === database[0].username && pass === database[0].password){
    console.log(newsfeed);
  }
  else {
    alert("Przepraszam, podałeś błedny Login lub hasło");

  }
}

signIn(userNamePrompt,passwordPrompt);
