var randomLoc = Math.floor(Math.random() * 5); //need num 0 - 4
var loc1 = randomLoc;
var loc2 = loc1 + 1;
var loc3 = loc2 + 1;
var guess;
var hits = 0;
var guesses = 0;
var isSunk = false;
/*
while(isSunk == false){
  guess = prompt("Enter a number 0 - 6:");
  if (guess < 0 || guess > 6){
    alert("Please enter a valid number 0 - 6!");
  }
  else {
    guesses = guesses + 1;

    if (guess == loc1 || guess == loc2 || guess == loc3){
      hits = hits + 1;
      alert("Hit!");
      if (hits == 3) {
        isSunk = true;
        alert("You sank my Battleship!");
      }
    }
    else {
      alert("Miss");
    }
  }
}

var stats = "You took " + guesses + " guesses to sink the battleship." +
                " Your shooting accuracy was " + ((3 / guesses) * 100) + "%";
alert(stats);
*/
