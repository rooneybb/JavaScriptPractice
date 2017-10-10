var emptyArray = new Array();
emptyArray[0] = 99;

var oddNumbers = [3];
oddNumbers.push(45);
oddNumbers.push(23);
oddNumbers.push(56);
oddNumbers.pop();
oddNumbers.pop();
oddNumbers.pop();
oddNumbers[0] = 2;
oddNumbers[1] = 4;
oddNumbers[2] = 6;


var areAllOdd = oddNumbers.every(function(x) {
    return ((x % 2) !== 0);
});

var makeAllOdd = function () {
    if (!areAllOdd){
        for (var i = 0; i < oddNumbers.length; i++) {
            var counter = oddNumbers[i] + 1;
            //console.log("counter: " + counter);
            console.log(oddNumbers[i] + " turning odd " + counter);
            oddNumbers[i] = counter;
        }
    }
    return oddNumbers;
}

makeAllOdd();
var oddString = oddNumbers.join(", \n");


console.log(oddString);
console.log(emptyArray);
