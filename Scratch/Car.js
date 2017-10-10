var taxi = {
  make: "Toyota",
  model: "Taxi-Corrola",
  year: 2009,
  color: "yellow",
  passengers: 4,
  convertible: false,
  mileage: 10004
};

var sportsCar = {
  make: "Lamborghini",
  model: "Countach",
  year: 2013,
  color: "Red",
  passengers: 2,
  convertible: false,
  mileage: 5000
};

var car = {
  name: "Base Class Car",
  fuel: 0,
  started: false,
  start: function() {
    this.started = true;
    console.log(car.name + " started");
  },
  stop: function() {
    this.started = false;
    console.log(car.name + " stopped");
  },
  drive: function() {
    if (this.started) {
      if(this.fuel > 0) {
        alert("Vroooooooom");
        this.fuel -= 1;
      }
      else {
        alert("click click need gas!");
      }
    }
    else {
      alert("Start the cahhhh");
    }
  },
  addFuel: function(amount){
    this.fuel = this.fuel + amount;
  }
};

function preQual(car) {
  if (car.mileage > 10000) {
    return false;
  }
  else if (car.year < 2006) {
    return false;
  }

  return true;
}


function shouldIBuy(carType) {
  modelBool = preQual(carType);
  if (modelBool) {
    console.log("You should check out this " + carType.make + " " + carType.model);
  }
  else {
    console.log("Hard pass on " + carType.make + " " + carType.model);
  }
}

function pageLoadHandler() {
  alert("I'm Alive!!!")
}

window.onload = pageLoadHandler;
