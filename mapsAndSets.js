let fruitInventory = new Map();
let bananaInventory = new Set();
let uniqueColors = new Set();

fruitInventory.set("apple", 10);
fruitInventory.set("banana", 20);
fruitInventory.set("orange", 30);
console.log(fruitInventory);

fruitInventory.set("apple", 15);
console.log(fruitInventory);

bananaInventory.add(fruitInventory.get("banana"));
console.log(bananaInventory);

uniqueColors.add("red");
uniqueColors.add("blue");
uniqueColors.add("green");
console.log(uniqueColors);

uniqueColors.add("yellow");
console.log(uniqueColors);

let hasBlue = uniqueColors.has("blue");
console.log(hasBlue);
