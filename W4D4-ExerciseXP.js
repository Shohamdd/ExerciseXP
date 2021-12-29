//Ex1
const person = {
    name: 'John Doe',
    age: 25,
    location: {
        country: 'Canada',
        city: 'Vancouver',
        coordinates: [49.2827, -123.1207]
    }
}

const {name, location: {country, city, coordinates: [lat, lng]}} = person;

console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);

 //Answer -
 I Am John Doe from Vancouver, Canada. Latitude(49.2827), Longitude(-123.1207)


//Ex2
function displayStudentInfo({ first, last }) {
  console.log(`Your full name is ${first} ${last}`);
}
displayStudentInfo({ first: "Elie", last: "Schoppik" });

//Ex3
const users = { user1: 18273, user2: 92833, user3: 90315 };
console.log(Object.entries(users));

let x2ID = [];

for (item of Object.entries(users)) {
  x2ID.push(item[0], item[1] * 2);
}
console.log(x2ID);

//Ex4
class Person {
  constructor(name) {
    this.name = name;
  }
}
let member = new Person("John");
console.log(typeof member);  // shows type : object;

//Ex5
class Dog {
  constructor(name) {
    this.name = name;
  }
};

//ConstructorNumber2//
class Labrador extends Dog {
  constructor(name, size) {
    super(name);
    this.size = size;
  }
};


//Ex6
[2] === [2]    /False/
{} === {}     /False/

const object1 = { number: 5 };   //=4
const object2 = object1;        //=4
const object3 = object2;       //=4
const object4 = { number: 5}; //=5
object1.number = 4;

class Animal {
  constructor(name, type, color) {
    this.name = name;
    this.type = type;
    this.color = color;
  }
}

class Mamal extends Animal {
  constructor(name, type, color) {
    super(name, type, color);
  }
  sound = (voice) => {
    console.log(
      `${voice.repeat(3)} the ${this.name} says it is a ${
        this.type
      }  and its in color ${this.color}`
    );
  };
}

let cow = new Mamal("cow", "weed eater", "black and white");
cow.sound("Mooooo ");
