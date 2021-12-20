//Ex1
let z = document.querySelector("h1").innerHTML;
console.log(z)
let lastP = document.getElementById("demo");
lastP.remove();
document.getElementById('x').addEventListener('click', changeColor);

function changeColor() {
    this.style.backgroundColor = "red";
    return false;
}
let paragraph = document.getElementById("test");

function myFunction() {
  paragraph.style.visibility = "hidden";
}

function myThirdFunction() {
  paragraph.style.visibility = "visible";
}
paragraph.addEventListener("click", myFunction);
let btn = document.getElementById("button");

let para = document.getElementById("boldtext");

btn.addEventListener("click", function() {

	para.style.fontWeight = '700';
});

Ex2
let form = document.forms[0];
console.log(form);
for (let input of document.forms[0].elements){
  console.log(input);
}
let name1= document.forms[0].fname.name;
console.log(name1);
let name2= document.forms[0].lname.name;
console.log(name2);
let ul = document.getElementsByClassName("usersAnswer");
let allUsers = [];
form.addEventListener("submit", addUser);
function addUser(e){
	e.preventDefault();

	let fname = e.target.elements.fname.value;
  	allUsers.push(fname);
	let lname = e.target.elements.lname.value;
  	allUsers.push(lname);
	console.log(allUsers);
  showUsers();
}
function showUsers(){
		let li =  document.createElement("li");
		let text = document.createTextNode(`first name of the user ${allUsers[0]}`)
	  li.appendChild(text);
    ul[0].appendChild(li);
    let li2 =  document.createElement("li");
		let text2 = document.createTextNode(`last name of the user ${allUsers[1]}`)
	  li2.appendChild(text2);
    ul[0].appendChild(li2);
	}

Ex3
let allBoldItems;
getBold_items();
  function getBold_items()
{
  allBoldItems = document.getElementsByTagName('strong');
}
function highlight(){
  for(let item of allBoldItems) {
    item.style.color = "blue";
  }
}
function return_normal(){
  for(let item of allBoldItems) {
    item.style.color = "black";
  }
}

//Ex3Volume
function volume_sphere()
 {
  let volume;
  let radius = document.getElementById('radius').value;
  radius = Math.abs(radius);
  volume = (4/3) * Math.PI * Math.pow(radius, 3);
  volume = volume.toFixed(4);
  document.getElementById('volume').value = volume;
 }
 document.getElementById('MyForm').onsubmit = volume_sphere;
