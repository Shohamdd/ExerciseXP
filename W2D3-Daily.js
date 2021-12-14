let n = 6;
let asterisk = "";
for (let i = 1; i <= n; i++) {
  for (let j = 0; j < i; j++) {
    asterisk += "*";
  }
  asterisk += "\n";
}
console.log(asterisk);
