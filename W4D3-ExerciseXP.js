//Ex1
const fruits = ["apple", "orange"];
const vegetables = ["carrot", "potato"];

const result = ["bread", ...vegetables, "chicken", ...fruits];
console.log(result); // will be 1 array = ['bread',"carrot", "potato", 'chicken', "apple", "orange"]

const country = "USA";
console.log([...country]);  //---->["U","S","A"]

//Bonus
let newArray = [...[, ,]]; //---->[undefined, undefined]
console.log(newArray);

//Ex2
let users = [
  { firstName: "Bradley", lastName: "Bouley", role: "Full Stack Resident" },
  { firstName: "Chloe", lastName: "Alnaji", role: "Full Stack Resident" },
  { firstName: "Jonathan", lastName: "Baughn", role: "Enterprise Instructor" },
  { firstName: "Michael", lastName: "Herman", role: "Lead Instructor" },
  { firstName: "Robert", lastName: "Hajek", role: "Full Stack Resident" },
  { firstName: "Wes", lastName: "Reid", role: "Instructor" },
  { firstName: "Zach", lastName: "Klabunde", role: "Instructor" },
];

let helloArr = users.map((v) => `Hello ${v.firstName}`);
console.log(helloArr);

let specialHelloArr = users
  .filter((v) => v.role === "Full Stack Resident")
  .map((v) => "Hello " + v.firstName);
console.log(specialHelloArr);


//Ex3
let epic = ["a", "long", "time", "ago", "in a", "galaxy", "far far", "away"];
let theStory = epic.reduce((acc, v) => (acc += " " + v + " "));
console.log(theStory);


//Ex4
let student = [
  { name: "Ray", course: "Computer Science", isPassed: true },
  { name: "Liam", course: "Computer Science", isPassed: false },
  { name: "Jenner", course: "Information Technology", isPassed: true },
  { name: "Marco", course: "Robotics", isPassed: true },
  { name: "Kimberly", course: "Artificial Intelligence", isPassed: false },
  { name: "Jamie", course: "Big Data", isPassed: false },
];

let passStudents = student.filter((v) => v.isPassed === true);

let passStudentsWCong = student
  .filter((v) => v.isPassed === true)
  .map((v) => `Good job ${v.name}, you passed the course in ${v.course}`);

console.log(passStudents);
console.log(passStudentsWCong);
