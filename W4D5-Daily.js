if (
  !confirm(
    "Hey! lets check if 2 words you giving are Anagram, would you like to check?"
  )
) {
  alert(" Ok! Have a nice day");
} else {
  let word1 = prompt("type the first sentence").toLowerCase();
  let word2 = prompt("type the second sentence").toLowerCase();

  let wordArr1 = word1.replaceAll(" ", "").split("");
  let wordArr2 = word2.replaceAll(" ", "").split("");
  let wordArr2Copy = [...wordArr2];

  wordArr1.forEach((chr) => wordArr2.splice(wordArr2.indexOf(chr), 1));
  wordArr2Copy.forEach((chr) => wordArr1.splice(wordArr1.indexOf(chr), 1));

  if (wordArr1.length < 1 && wordArr2.length < 1) {
    alert("Yes they are n Anagram.");
  } else {
    alert("No they are not Anagram.");
  }
}
