//Exercise1
let people = ["Greg", "Mary", "Devon", "James"]
people.shift();
people[2] = people[2].replace("James","Jason")
people.push("Shoham");
console.log(people);
let mary = people.indexOf("Mary");
console.log(mary);
console.log(people.slice(1,3));


//Exercise2
let colors = ["Red", "Blue", "Yellow", "Purple", "Green"];
 for (let n = 0; n <= colors.length-1; n ++){
console.log(`My # ${n+1} choice is ${colors[n]}`);
}

//Exercise3
let x = prompt("Enter a Value");
console.log(typeof(x));






//Exercise4
let building = {
    numberOfFloors : 4,
    numberOfAptByFloor : {
        firstFloor : 3,
        secondFloor : 4,
        thirdFloor : 9,
        fourthFloor : 2,
    },
    nameOfTenants : ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan :  [4, 1000],
        david : [1, 500],
    },
}
console.log(building.numberOfFloors)
console.log(building.numberOfAptByFloor.firstFloor)
console.log(building.numberOfAptByFloor.thirdFloor)
console.log(building.nameOfTenants[1])
console.log(building.nameOfTenants.numberOfRoomsAndRent)
console.log(building.numberOfRoomsAndRent.dan)

//Exercise5
let family = {
  sister: 'Shaked',
  brother: 'Sagi',
  bigSister: 'Narkis'
};
for (let property in family) {
   console.log(property);
}
for (let property in family) {
   console.log(family[property]);
}

//Exercise6
let details = {
  my: 'name',
  is: 'Rudolf',
  the: 'raindeer'
};
for (let property in details) {
    process.stdout.write(`${property} ${details[property]} `);
}


//Exercise7
let names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"]
names.sort();
names.forEach((name)=>{
 process.stdout.write(name.charAt(0));
});
