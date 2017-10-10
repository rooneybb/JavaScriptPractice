var view = {
  displayMessage: function (msg) {
      var messageArea = document.getElementById("messageArea");
      messageArea.innerHTML = msg;

  },
    displayHit: function (location) {
      var cell = document.getElementById(location);
      cell.setAttribute("class", "hit");
    },
    displayMiss: function (location) {
      var cell = document.getElementById(location);
      cell.setAttribute("class", "miss");

    }
};

var model = {
    boardSize : 7,
    numShips: 3,
    shipLength: 3,
    shipsSunk:0,
    ships: [
        {locations: [0, 0, 0], hits: ["", "", ""] },
        {locations: [0, 0, 0], hits: ["", "", ""] },
        {locations: [0, 0, 0], hits: ["", "", ""] }
    ],
    fire: function(guess){
        for (var i = 0; i <this.numShips; i++) {
            var ship = this.ships[i];
            var index = ship.locations.indexOf(guess);
            if (index >= 0) {
                ship.hits[index] = "hit";
                view.displayHit(guess);
                view.displayMessage("HIT!!!!");
                if (this.isSunk(ship)){
                    view.displayMessage("You sank my battleship!")
                    this.shipsSunk++;
                }
                return true;
            }
        }
        view.displayMiss(guess);
        view.displayMessage("You Missed!!!!");
        return false;
    },
    isSunk: function (ship) {
        for (var i = 0; i < this.shipLength; i++){
            if (ship.hits[i] !== "hit") {
                return false;
            }
        }
        return true;
    },
    generateShipLocations: function () {
        var locations;
        for (var i = 0; i < this.numShips; i++){
            do{
                locations = this.generateShip();
            }
            while(this.collision(locations));
            this.ships[i].locations = locations;
        }
    },
    generateShip: function(){
        var direction = Math.floor(Math.random() * 2);
        var row, col;

        if (direction === 1) {
            row = Math.floor(Math.random() * this.boardSize);
            col = Math.floor(Math.random() * (this.boardSize - this.shipLength));
        }
        else {
            row = Math.floor(Math.random() * (this.boardSize - this.shipLength));
            col = Math.floor(Math.random() * this.boardSize);

        }

        var newShipLocations = [];
        for (var i = 0; i < this.shipLength; i++) {
            if (direction === 1){
                newShipLocations.push(row + "" + (col + i));
            }
            else {
                newShipLocations.push((row + i) + "" + col);
            }

        }

        return newShipLocations;
    },
    collision: function (locations) {
        for (var i = 0; i < this.numShips; i++){
            var ship = model.ships[i];
            for (var j = 0; j < locations.length; j++){
                if (ship.locations.indexOf(locations[j]) >= 0){
                    return true;
                }
            }
        }
        return false;
    }

};

var controller = {
    guesses: 0,

    parseGuess: function(guess){
        var alphabet = ["A", "B", "C", "D", "E", "F", "G"];

        if(guess === null || guess.length !== 2) {
            alert("Oops, please enter a letter and a number on the board");
        }
        else {
            firstChar = guess.charAt(0);
            var row = alphabet.indexOf(firstChar);
            var column = guess.charAt(1);

            if (isNaN(row) || isNaN(column)) {
                alert("Guess is not valid");
            }
            else if (row < 0 || row >= model.boardSize || column < 0 || column >= model.boardSize) {
                alert("Guess is off the board");
            }
            else {
                return row + column;
            }
        }
        return null;
    },

    processGuesses: function(guess) {
        var location = controller.parseGuess(guess);
        if (location) {
            this.guesses++;
            var hit = model.fire(location);
            if (hit && model.shipsSunk === model.numShips) {
                view.displayMessage("You sank all the battleships! It took " + this.guesses + " guesses");
            }
        }

    }
};

function init(){
    var fireButton = document.getElementById("fireButton");
    fireButton.onclick = handleFireButton;
    model.generateShipLocations();
    //var guessInput = document.getElementById("guessInput");
    //guessInput.onkeydown = handleKeyPress;
}

function handleFireButton(){
    var guessInput = document.getElementById("guessInput");
    var guess = guessInput.value;
    controller.processGuesses(guess);
    guessInput.value = "";
}

function handleKeyPress(e){
    var fireButton = document.getElementById("fireButton");
    if (e.key === 13){
        fireButton.click();
        return false;
    }
}

window.onload = init;


/*controller.processGuesses("A2");
controller.processGuesses("B3");
controller.processGuesses("C4");

controller.processGuesses("A6");
controller.processGuesses("B6");
controller.processGuesses("C6"); */

