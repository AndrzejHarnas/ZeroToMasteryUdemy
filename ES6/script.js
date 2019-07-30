
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
