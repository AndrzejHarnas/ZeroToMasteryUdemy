
//let i const zamiast var
let x = 7;
const z = "Billy";

if(x>5){

  let x =15
  console.log("inside" +x);
}
console.log("outside"+x);

const obj = {
  imie: "Andrzej",
  wiek: 36,
  nazwisko: "Gołąbek"
}

console.log(obj)
//obj = "stefan", 15,"Rychlicki";
obj.imie = "stefan";
console.log(obj.imie);

const name = "Spiderman";
//nowa deklaracja obiektów;
let obj2 = {
  [name]: "Peter Parker",
  [2*15]: "Green Goblin"
}

console.log(obj2);

const nm= "Kasia";
const wk= 32;

// nowa możliwość wypisywania stringa
const text = `Ta dziewczyna ma na imie ${nm} i ma ${wk} lata`;
console.log(text)

let a=1;
let b=2;

// arrow functions
const add = (a,b)=> a+b ;

console.log(add(2,4));

const multiply = (a)=>(b)=> a*b;
console.log(multiply(3)(3));

const compose = (f,g,v) => (a) => f(g(v(a)));
const sum = (a) => a+1;

const result = compose(sum,sum,sum)(1);

console.log(result);

const array = [1,2,3,4];

// kopiowanie elementów tablicy razy dwa  map
const doubleArray = array.map((num) => {
  return num*2;});

console.log(doubleArray);

//filter - wybranie elementów tablicy większych od 2 - wersja skrócona bez return

const filterArray = array.filter(num => num > 2);

console.log(filterArray);

// reduce


const reduceArray = array.reduce((acc,num) => {return acc+num},2);
console.log(reduceArray);


const test1 = (a,b) => a*b;

console.log(test1(2,3));

//reference type

var object1 = {value:10};
var object2 = object1;
var object3 = {value:10};

//context
const object4 = {a:function(){console.log(this)}};
console.log(object4);

//instantiation

class Player {
  constructor(name, type){
    this.name=name;
    this.type=type;
  }
  introduce() {
    console.log(`Cześć mam na imie ${this.name} i jestem ${this.type}`);
  }
}

class Wizard extends Player {
  constructor(name,type) {
    super(name,type);
  }

  play(){
    console.log(`hi your are Wizard but you play like ${this.type}`);
  }
}


let player1 = new Player("Andrzej","Warrior");
player1.introduce();

let player2 = new Wizard("Marian","Hunter");
player2.introduce();
player2.play();

// refrences

let user1 = {name:"Andrzej", password:"123"};
let user2 = user1;

user2.password = "555";


console.log(user1);
console.log(user2);

var arr1 = [1,2,3,4];
var arr2 = arr1;

arr2.push(1232323);


console.log(arr1);
console.log(arr2);


//objects diferent location in memory

let obj4 = {a: 'a', b:'b', c='c'};
let obj5 = Object.assign({},obj4);
let obj6 = {...obj4};


obj4.c="5";

console.log(obj5);

//type coercion - == prównanie z automatyczną konwersją do tego samego typu
1 == '1';
1 === '1';



object.is(-0,+0)


//ES7

const text = "Whats up";
text.includes("u");

const arrayPets = {'dog','cat','snake'};
arrayPets.includes('snake');


const square = (x) => x**2;



//ES8

text.padStart(10);
text.padEnd(10);


const funPlusComma = (a,b,c,) => {return a*b*c};


const objValue = {
  username1: "Andrzej1",
  username2: "Andrzej2",
  username3: "Andrzej3"
}

Object.value(objValue).forEach(value => console.log(value));
