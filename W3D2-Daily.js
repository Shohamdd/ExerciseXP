//Daily Ex
let libButton = document.getElementById('lib-button');
     let libIt = function() {
         let storyDiv = document.getElementById("story");
         let noun = document.getElementById("noun").value;
         let adjective = document.getElementById("adjective").value;
         let name = document.getElementById("person").value;
         storyDiv.innerHTML = "I took my " + noun + " and " +
           adjective + " it. "+ name + " didn't like it.";
     };
     libButton.addEventListener('click', libIt);
