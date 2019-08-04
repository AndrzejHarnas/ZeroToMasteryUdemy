const buttons = document.querySelectorAll('button');
const inputPlyers = document.querySelectorAll('input');
const ballImg = document.getElementById("ball");


class player {

  constructor(name='Andrzej',type='Kółko', points=0){
    this.name = name;
    this.type = type;
    this.points = points;
  }

  addPoint(){
  this.points+=1;
  }
}

class ball {
  constructor(left=0,right=0,top=0,bottom=0){
    this.left = left;
    this.right = right;
    this.top = top;
    this.bottom = bottom;
  }
addLeft(){
  this.left += .1;
}

addRight(){
  this.right += .1;
}

addTop(){
  this.top += .1;
}

addBottom(){
  this.bottom += .1;
}

}

const player1 = new player("Stefan");
const player2 = new player("Andrzej","Krzyżyk");
const ballObject = new ball(27,15,15,15);
player1.addPoint();

for(i=1;i<=10;i++){
 player2.addPoint();
}

const ballMove = (e) => {

var keyCode = e.which;
if(keyCode == 119){

ballObject.addBottom();
ballImg.style.bottom = ""+ballObject.bottom+"rem";
}

}

const start =() => {

buttons[0].innerHTML="vs";
buttons[0].disabled="true";
player1.name = prompt("Wpisz imię pierwszego gracza:");
player2.name = prompt("Wpisz imię drugiego gracza:");

inputPlyers[0].value=player1.name;
inputPlyers[1].value=player2.name;

window.addEventListener('keypress',ballMove);
};

buttons[0].style.backgroundColor="#b7990d";
buttons[0].addEventListener('click',start);
