var count = 0;

window.onload = function () {
    var count = 0;
    var message = "You clicked me "
    var button = document.getElementById("clickMe");
    var div = document.getElementById("message");
    button.onclick = function(){
        count++;
        div.innerHTML = message + count + " times";
    };
};

function counter(){
    count = count + 1;
    return count;
}

console.log(counter());
console.log(counter());
console.log(counter());

function closureCounter(){
    var count = 0;

    function counter () {
        count = count + 1;
        return count;
    }

    return counter;
}

var doClosureCount = closureCounter();

console.log(doClosureCount());
console.log(doClosureCount());
console.log(doClosureCount());

function makeTimer(doneMessage, n){
    setTimeout(function () {
        console.log(doneMessage);
    }, n);
}

makeTimer("Cookies are done!", 1000);