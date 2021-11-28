"use strict";
let mountainA = {
    name: 'Kilimanjaro',
    height: 19341
};
let mountainB = {
    name: 'Everest',
    height: 29029
};
let mountainC = {
    name: 'Denali',
    height: 20310
};
let mountains = [mountainA, mountainB, mountainC];
function findNameOfTallestMountain(mountains) {
    var tallestMountainName = '';
    var tallestMountainHeight = 0;
    for (var i = 0; i < mountains.length; i++) {
        if (mountains[i].height > tallestMountainHeight) {
            tallestMountainHeight = mountains[i].height;
            tallestMountainName = mountains[i].name;
        }
    }
    return tallestMountainName;
}
let result = findNameOfTallestMountain(mountains);
console.log(result);
let coffee = {
    name: 'Coffee',
    price: 5
};
let snickers = {
    name: 'Snickers',
    price: 2
};
let sandwich = {
    name: 'Sandwich',
    price: 6
};
let products = [coffee, snickers, sandwich];
function calcAverageProductPrice(products) {
    let total = 0;
    for (let i = 0; i < products.length; i++) {
        total = total + products[i].price;
    }
    let average = total / products.length;
    return average;
}
let averageResult = calcAverageProductPrice(products);
console.log(averageResult);
let motor = {
    name: 'Motor',
    price: 10.00
};
let sensor = {
    name: 'Sensor',
    price: 12.50
};
let led = {
    name: 'LED',
    price: 1.00
};
let iMotor = {
    product: motor,
    quantity: 10
};
let iSensor = {
    product: sensor,
    quantity: 4
};
let iLed = {
    product: led,
    quantity: 20
};
let inventory = [iMotor, iSensor, iLed];
function calcInventoryValue(inventory) {
    let total = 0;
    for (let i = 0; i < inventory.length; i++) {
        total = total + (inventory[i].product.price * inventory[i].quantity);
    }
    return total;
}
let inventoryResult = calcInventoryValue(inventory);
console.log(inventoryResult);
//# sourceMappingURL=main.js.map