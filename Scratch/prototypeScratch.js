function Dog(name, breed, weight) {
    this.name = name;
    this.breed = breed;
    this.weight = weight;
};

function ShowDog(name, breed, weight, handler) {
    Dog.call(this, name, breed, weight);
    this.handler = handler;
}

Dog.prototype.species = "Canine";

ShowDog.prototype = new Dog();
ShowDog.prototype.constructor = ShowDog;


Dog.prototype.bark = function () {
    if (this.weight > 25){
        console.log(this.name + " says Woof!");
    }
    else {
        console.log(this.name + " says Yip!");
    }
};

Dog.prototype.run = function()  {
    console.log(this.name +" is running!");
};

Dog.prototype.wagging = function() {
    console.log(this.name + " is wagging!");
};

Dog.prototype.sitting = false;

Dog.prototype.sit = function () {
    if (this.sitting){
        console.log(this.name + " is already sitting silly.")
    }
    else {
        this.sitting = true;
        console.log(this.name + " is now sitting obediently.");
    }
}

ShowDog.prototype.bark = function () {
    console.log(this.handler + " has allowed " + this.name + " to bark; Arf!");
}



Dog.prototype.up = function () {
    if (this.sitting){
        this.sitting = false;
        console.log(this.name + " got up from sitting.");
    }
    else {
        console.log(this.name + " is already up silly.");
    }
};

var fido = new Dog("Fido", "Jack Russell", 32);
var milo = new Dog("Milo", "Pug", 17);
var otis = new Dog("Otis", "Malmut", 312);
var spot = new Dog("Spot", "Rotweiller", 178);
var jenkins = new ShowDog("Jenkins", "Poodle", 78, "Martha Washington");
var tronString = '{"name": "Tron", "breed": "Robot Dog", "weight": 2001}';
var tron = JSON.parse(tronString);
console.log(tron);

spot.bark = function () {
    console.log(this.name + " says GRRRRR!");
};

jenkins.bark();
jenkins.run();
fido.bark();
fido.run();
fido.wagging();
milo.wagging();
milo.run();
milo.bark();
otis.run();
otis.bark();
otis.wagging();
spot.wagging();
spot.run();
spot.bark();
fido.sit();
fido.sit();
fido.up();
fido.up();
fido.sit();
fido.up();