//Ex1
// #1
function q1() {
    var a = 5;
    if(a > 1) {
        a = 3;
    }
    alert(a);
}
// popup 5
//#2
var a = 0;
function q2() {
    a = 5;
}

function q22() {
    alert(a);
}
// 0

//#3
function q3() {
    window.a = "hello";
}

function q32() {
    alert(a);
} // undifined

//#4
var a = 1;
function q4() {
    var a = "test";
    alert(a);
} // alert test

//#5
var a = 2;
if (true) {
    var a = 5;
    alert(a); // 5
}
alert(a); // 2

//Ex2
function winBattle() {
    return true;
}

let experiencePoint = winBattle() ? 10 : 1;
// console.log(experiencePoint);
function experiencePoints() {
    return experiencePoint
}
experiencePoints()
// console.log(experiencePoints())

//Ex3
let colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
colors.forEach(e => { if (e === 'Violet') console.log('Violet is includes') })
colors.forEach((e, index) => { console.log(`${index + 1}# choice is ${e}`) })

//Ex4
let colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
let ordinal = ["th","st","nd","rd"];

colors.forEach((e, index) => {
    let choice = ordinal[index + 1]

    if (choice === undefined) {
        choice = '';
    }

    let colorFollowing = `${index + 1}${choice} choice is ${e}`
    console.log(colorFollowing)
})

//Ex5
let isString = (type) => {
    return typeof type ===  "string" ;
}


console.log(isString('hello'));
//true
console.log(isString([1, 2, 4, 0]));
//false

//Ex6
let bankAmount = 2000;
let vat = 0.17;
let details = ["+400", "-100", "+160", "+187", "-3600"]
let sum = 0;
let vatSum = 0;

details.forEach(e => {
    sum += parseInt(e)

    if (e.includes('-')) {
        vatSum += e * vat
        return vatSum
    }
    return sum
})

console.log(`Current amount : ${sum += vatSum += bankAmount}`)
