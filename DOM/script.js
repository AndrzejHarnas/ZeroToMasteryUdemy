//document.write("Czesc działa");
var button = document.getElementById('enter');
var input = document.getElementById('userinput');
var ul = document.querySelector('ul');
var li2 = document.getElementsByTagName('li');

function inputLength() {
  return input.value.lengt
}


function createLi(){
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);
  input.value="";
}

function liClick(i){
  var delButton = document.createElement("button");
  delButton.appendChild(document.createTextNode("Delete"));
  li2[i].appendChild(delButton);
}

button.addEventListener("click", function() {
//  alert("kliknołeś");
  if(inputLength() > 0 ){
    createLi();
  }
});

input.addEventListener("keypress", function(event) {
//  alert("kliknołeś");
  if(inputLength() > 0 && event.keyCode === 13 ){
  createLi();
  }
});

for(var i =0; i < li2.length; i++) {
li2[i].addEventListener("click",liClick[i]);
}
