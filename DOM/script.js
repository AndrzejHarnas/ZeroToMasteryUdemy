//document.write("Czesc działa");
var button = document.getElementById('enter');
var input = document.getElementById('userinput');
var ul = document.querySelector('ul');

function inputLength() {
  return input.value.length;
}

function createLi(){
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);
  input.value="";
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
