//Daily Challenge
let sentence = "The movie is  that bad, I like it"
let wordNot = sentence.indexOf("not");
let wordBad = sentence.indexOf("bad");
if (wordNot<wordBad && wordNot != -1){
     sentence = sentence.substring(0,wordNot) + "Good" + sentence.substring(wordBad+3);
}
console.log(sentence);
