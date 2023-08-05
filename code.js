// To run this assignment, right click on index.html in the Visual Studio Code file explorer to the left
// and select "Open with Live Server"

// Create your own Madlibs story!

let animal = prompt("Name a kind of monster (singular):");
let place = prompt("Name a planet:");
let food = prompt("Name a metal (plural):");

document.write("Here is a story for you!<br>");
document.write(
  "The giant "
  + animal
  + " walked proudly through "
  + place
  + ", dropping "
  + food
  + " everywhere."
);
