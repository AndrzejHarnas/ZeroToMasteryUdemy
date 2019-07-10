
var CSS = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.querySelector("body");
var los = document.querySelector(".losuj");


//konwersja z rgb do hex
var rgbToHex = function (rgb) {
  var hex = Number(rgb).toString(16);
  if (hex.length < 2) {
       hex = "0" + hex;
  }
  return hex;
};

//funkcja losująca liczby z przedziału :)
function rand( min, max ){
    min = parseInt( min, 10 );
    max = parseInt( max, 10 );

    if ( min > max ){
        var tmp = min;
        min = max;
        max = tmp;
    }

    return Math.floor( Math.random() * ( max - min + 1 ) + min );
}


function linGrad(){
  console.log(color1.value);
  body.style.background = "linear-gradient(to right," + color1.value + "," + color2.value + ")";
  CSS.textContent= body.style.background + ";";
}

function losuj(){
var r1 = rand(0,255);
var g1 = rand(0,255);
var b1 = rand(0,255);

var r2 = rand(0,255);
var g2 = rand(0,255);
var b2 = rand(0,255);

var hr1 = rgbToHex(r1);
var hg1 = rgbToHex(g1);
var hb1 = rgbToHex(b1);

var hr2 = rgbToHex(r2);
var hg2 = rgbToHex(g2);
var hb2 = rgbToHex(b2);

var hexcolor1 = "#"+hr1+hg1+hb1+"";
var hexcolor2 = "#"+hr2+hg2+hb2+"";

console.log(hexcolor1);
console.log(hexcolor2);

color1.value = hexcolor1;
color2.value = hexcolor2;

linGrad();
}

color1.addEventListener("input", linGrad);
color2.addEventListener("input", linGrad);
los.addEventListener("click",losuj);

linGrad();
