//1
let userNameArr = [];
gameInfo.forEach((v) => userNameArr.push(v.username + "!"));
console.log(userNameArr);

//2
let highScoreUser = [];
gameInfo.forEach((v) => (v.score > 5 ? highScoreUser.push(v.username) : v));

console.log(highScoreUser);

sumScore = 0;
gameInfo.forEach((v) => (sumScore += v.score));

console.log(sumScore);
