//Tallest Mountain Exercise
interface Mountain {
    name: string,
    height: number
}

let mountainA: Mountain = {
    name: 'Kilimanjaro',
    height: 19341
}

let mountainB: Mountain = {
    name: 'Everest',
    height: 29029
}

let mountainC: Mountain = {
    name: 'Denali',
    height: 20310
}

let mountains:Mountain[] = [mountainA, mountainB, mountainC]

function findNameOfTallestMountain(mountains: Mountain[]){
    var tallestMountainName = '';
    var tallestMountainHeight = 0;
    
    for(var i=0; i<mountains.length; i++){
        if(mountains[i].height > tallestMountainHeight){
            tallestMountainHeight = mountains[i].height;
            tallestMountainName = mountains[i].name;
        }
    }
    return tallestMountainName;
}

let result = findNameOfTallestMountain(mountains);
console.log(result);

//Products Exercise
interface Product{
    name: string,
    price: number
}

let coffee: Product = {
    name: 'Coffee',
    price: 5
}

let snickers: Product = {
    name: 'Snickers',
    price: 2
}

let sandwich: Product = {
    name: 'Sandwich',
    price: 6
}

let products: Product[] = [coffee, snickers, sandwich]

function calcAverageProductPrice(products: Product[]){
    let total = 0;
    for(let i=0; i < products.length; i++){
        total = total + products[i].price
    }
    let average = total / products.length
    return average
}

let averageResult = calcAverageProductPrice(products)
console.log(averageResult)

//Inventory Exercise
interface InventoryItem{
    product: Product,
    quantity: number
}

let motor:Product = {
    name: 'Motor',
    price: 10.00
}

let sensor:Product = {
    name: 'Sensor',
    price: 12.50
}

let led:Product = {
    name: 'LED',
    price: 1.00
}

let iMotor: InventoryItem = {
    product: motor,
    quantity: 10
}

let iSensor: InventoryItem = {
    product: sensor,
    quantity: 4
}

let iLed: InventoryItem = {
    product: led,
    quantity: 20
}

let inventory: InventoryItem[] = [iMotor, iSensor, iLed]

function calcInventoryValue(inventory: InventoryItem[]){
    let total = 0;
    for(let i=0; i < inventory.length; i++){
        total = total + (inventory[i].product.price * inventory[i].quantity)
    }
    return total
}

let inventoryResult = calcInventoryValue(inventory)
console.log(inventoryResult)