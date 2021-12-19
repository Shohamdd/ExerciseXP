//Ex1
document.getElementById("navBar").id = "socialNetworkNavigation";
var ul = document.getElementById("list");
var li = document.createElement("li");
ul.appendChild(li);
let text = "Logout";
let newText = document.createTextNode(text);
li.appendChild(newText);

//Ex2
let liPeteThirdWay= document.body.children[1].lastElementChild;
liPeteThirdWay.textContent = "Richard";

let ulNode = document.getElementsByClassName("list");

for (let ul of ulNode) {
  ul.firstElementChild.textContent = "Shoham";
}

for (let ul of ulNode) {
  let li = document.createElement("li");
  ul.appendChild(li);
  li.appendChild(document.createTextNode("Hey students"));
}

ulNode[1].children[1].style.display = "none";

//Ex3
document.body.style.backgroundColor = "lightblue";
document.getElementById("John").style.display = "none";
document.getElementById("Pete").style.border = "thick solid #0000FF";
document.getElementById("Body").style.fontSize = "x-large";
if (document.body.style.backgroundColor == "lightblue"){
  alert(`Hello ${document.getElementById("John").innerHTML} and ${document.getElementById("Pete").innerHTML}`)
}
