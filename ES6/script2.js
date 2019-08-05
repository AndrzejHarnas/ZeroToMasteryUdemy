const buttons = document.querySelectorAll('button');
const inputPlyers = document.querySelectorAll('input');
const ballImg = document.getElementById('ball');
const mans = document.getElementsByClassName('man')


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

class movingObjects {
  constructor(left=0,top=0,step1=0.1,step2=0.5){
    this.left = left;
    this.top = top;
    this.step1 = step1;
    this.step2 = step2;

  }
addRight(){
  if(this.left <=30){
  this.left = this.left + this.step2;
  }
}

addLeft(){
  if(this.left >=-30){
  this.left = this.left - this.step2;
  }
}

addTop(){
  if(this.top<=17) {
  this.top =this.top + this.step1;
    console.log(this.top);
  }
}

addBottom(){
  if(this.top>=-17){
  this.top = this.top - this.step1;
  console.log(this.top);
  }
}

}

const player1 = new player("Stefan");
const player2 = new player("Andrzej","Krzyżyk");
const ballObject = new movingObjects(-30.5,0,0.1,0.5);
const man1Object = new movingObjects(-30,0,0.1,0.5);
const man2Object = new movingObjects(30,0,0.1,0.5);


const ballMove = (e) => {

var keyCode = e.which;
  if(keyCode == 119){

    ballObject.addBottom();
    man1Object.addBottom();
    ballImg.style.top = ""+ballObject.top+"rem";
    mans[0].style.top = ""+man1Object.top+"rem";

    console.log(ballObject.top);
  }

  if(keyCode == 115){

    ballObject.addTop();
    man1Object.addTop();
    ballImg.style.top = ""+ballObject.top+"rem";
    mans[0].style.top = ""+man1Object.top+"rem";
    console.log(ballObject.top);

  }

  if(keyCode == 100) {
    for(i=1;i<=60;i++){
      ballObject.addRight();
      ballImg.style.left = ""+ballObject.left+"rem";
    }
  }

  if(keyCode == 126) {
    man2Object.addBottom();
    mans[1].style.top = ""+man2Object.top+"rem";
  }

}

const start =() => {

buttons[0].innerHTML="vs";
buttons[0].disabled="true";
player1.name = prompt("Wpisz imię pierwszego gracza:");
player2.name = prompt("Wpisz imię drugiego gracza:");

inputPlyers[1].value=player1.name;
inputPlyers[2].value=player2.name;

window.addEventListener('keypress',ballMove);
};

buttons[0].style.backgroundColor="#b7990d";
buttons[0].addEventListener('click',start);
