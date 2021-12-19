let sentence = prompt("enter sentence");
let array = sentence.split(",");
let box_width = 0;
for (let n=0; n<array.length; n++){
  if (box_width<array[n].length){
    box_width = array[n].length;
  }
}
for (let n=0; n<array.length+2; n++){
  if (n==0|| n==array.length+1){
    console.log("*".repeat(box_width+4));
  } else {
  console.log("* " + array[n] + " *");
  }

}
