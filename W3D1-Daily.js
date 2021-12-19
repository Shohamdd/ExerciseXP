let planet = ["Sun", "Mercury", "Mars","Venus","moon"];
let colors = ["yellow","red","purple","orange","white"];
let index = 0;
let section = document.createElement("section");
section.classList.add("listPlanets");
document.body.appendChild(section);
for (let div of planet) {
  let newDiv = document.createElement("div");
  newDiv.classList.add("planet");
  newDiv.classList.add(div)
  section.appendChild(newDiv);
  newDiv.style.backgroundColor = colors[index];
  index++;
}
