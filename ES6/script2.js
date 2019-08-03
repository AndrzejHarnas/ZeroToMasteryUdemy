const buttons = document.querySelectorAll('button');

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

const player1 = new player("Stefan");
const player2 = new player("Stefan");
player1.addPoint();

for(i=1;i<=10;i++){
 player2.addPoint();
}


const start =() => {


alert(`Cześć ${player1.name} przycisk działa! Masz ${player1.points} punktów`);

};


buttons[0].addEventListener('click',start);
