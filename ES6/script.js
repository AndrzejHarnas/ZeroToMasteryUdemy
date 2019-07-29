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

let obj2 = {
  [name]: "Peter Parker",
  [2*15]: "Green Goblin"
}

console.log(obj2);

const nm= "Kasia";
const wk= 32;

const text = `Ta dziewczyna ma na imie ${nm} i ma ${wk} lata`;
console.log(text)

let a=1;
let b=2;

const add = (a,b)=> a+b ;

console.log(add(2,4));
