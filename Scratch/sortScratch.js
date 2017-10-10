function compareNumbers(num1, num2){
    if (num1 > num2){
        return 1;
    }
    else if (num1 == num2) {
        return 0;
    }
    else {
        return -1;
    }
}

var numbersArray = [75, 87, 73, 24, 64, 22, 1, 123, 34, 72];
numbersArray.sort(compareNumbers);
console.log(numbersArray);

var products = [
    {name: "Squirt", calories: 170, color: "yellow", sold: 8200},
    {name: "Coke", calories: 150, color: "brown", sold: 10234},
    {name: "Sprite", calories: 210, color: "clear", sold: 6789},
    {name: "Root Beer", calories: 230, color: "brown", sold: 5672},
    {name: "Fanta", calories: 250, color: "orange", sold: 3412},
    {name: "Ginger Ale", calories: 100, color: "clear", sold: 4378},
    {name: "Mountain Dew", calories: 185, color: "yellow", sold: 7836},
    {name: "Red Bull", calories: 210, color: "yellow", sold: 11345}
];

function printProducts(products){
    for (var i = 0; i < products.length; i++){
        console.log("name: " + products[i].name + ", calories: " + products[i].calories + ", color: " +
            products[i].color + ", sold: " + products[i].sold);
    }
}

function compareSold(soda1, soda2){
    if (soda1.sold > soda2.sold){
        return 1;
    }
    else if (soda1.sold == soda2.sold){
        return 0;
    }
    else {
        return -1;
    }
}

function compareCalories(soda1, soda2){
    if (soda1.calories > soda2.calories){
        return 1;
    }
    else if (soda1.calories == soda2.calories){
        return 0;
    }
    else {
        return -1;
    }
}

function compareColor(soda1, soda2){
    if (soda1.color > soda2.color){
        return 1;
    }
    else if (soda1.color == soda2.color){
        return 0;
    }
    else {
        return -1;
    }
}

function compareName(soda1, soda2){
    if (soda1.name > soda2.name){
        return 1;
    }
    else if (soda1.name == soda2.name){
        return 0;
    }
    else {
        return -1;
    }
}


products.sort(compareSold);
printProducts(products);
console.log("Sorted by amount sold^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n")

products.sort(compareCalories);
printProducts(products);
console.log("Sorted by amount of calories^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n")

products.sort(compareColor);
printProducts(products);
console.log("Sorted by color^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n")

products.sort(compareName);
printProducts(products);
console.log("Sorted by name^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n")