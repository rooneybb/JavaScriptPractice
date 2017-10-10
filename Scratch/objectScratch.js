var taxi = {
    make: 'Toyota',
    model: 'Corolla',
    year: 2014,
    color: 'yellow',
    passengers: 4,
    convertible: false,
    mileage: 32450,
    started: false,

    start: function() {
        this.started = true;
    },

    stop: function() {
        this.started = false;
    },

    drive: function(){
        //toDO drive method
    }
}


function Dog(name, breed, weight) {
    this.name = name;
    this.breed = breed;
    this.weight = weight;

}

function BigDog(dog){
    this.dog = dog;

    this.bark = function() {
        console.log(this.dog.name + " says woof woof");
    };
}

var fido = new Dog('Fido', 'Wolf Hound', 112);
var cujo = new Dog('Cujo', 'Hell Hound', 68 );
console.log(fido.name);
console.log(fido.weight);
console.log(fido.breed);
console.log(cujo.name);
console.log(cujo.weight);
console.log(cujo.breed);

var bigFido = new BigDog(fido);
bigFido.bark();

var now = new Date();
console.log(now);