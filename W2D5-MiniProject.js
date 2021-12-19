function playTheGame(){
  let answer = confirm ("would you like to play the game?")
  let userNumber;
  let numberint;
  let computerNumber;
    if (answer = true) {
      userNumber = promt("please enter a number between")
      numberint = Number(userNumber)
      if ((numberint != userNumber)){
        alert ("Sorry, not a number, goodbye")
    } else if (numberint < 0 || numberint > 10) {
          alert("Sorry, not a number goodbye")
    } else {
        let computerNumber = math.random() * (10-0) + 0;
          test(userNumber, computerNumber)
    }
}   else {
    alert("No problem, goodbye")
}
}
function test(userNumber,computerNumber){
  if (userNumber = computerNumber){
    console.log(playTheGame);
    alert("WINNER")
  }
}
