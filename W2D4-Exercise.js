//Ex1
function infoAboutMe () {
  console.log("My name is Shoham my age is 25 i like pc stuff");
}
infoAboutMe();

function infoAboutPerson(personName, personAge, personFavoriteColor){
  console.log(`Your name is ${personName}, you are ${personAge} years old, your favorite color is ${personFavoriteColor}`);
}
infoAboutPerson("David", 45, "blue");
infoAboutPerson("Josh", 12, "yellow");

//Ex2
function calculateTip(){
  let amount = Number(prompt("What is the amount of the bill"));
  let tip = 0;
  if (amount<50){
    tip = amount*0.2;
  } else if (amount>=50 && amount<=200){
      tip = amount*0.15;
  } else {
      tip = amount*0.1;
  }
  console.log(amount+tip);
}
calculateTip();

//Ex3
function isDivisible(){
  let sum = 0;
  for (let n = 0; n <= 500; n ++){
    if (n%23==0){
      sum = sum+n;
      console.log(n);
    }
  }
  console.log(sum);
}
isDivisible();

//Ex4
let stock = {
    "banana": 6,
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
}

let prices = {
    "banana": 4,
    "apple": 2,
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
}
let shoppingList = ["banana","orange","apple"];
function myBill(){
  let total = 0;
    for (let fruit of shoppingList){
      if (stock.fruit!=undefined){
        total = total+prices.fruit;
      }
    }
    console.log(total);
}
myBill();
