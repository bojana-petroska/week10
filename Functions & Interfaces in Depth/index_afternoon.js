"use strict";
// Define a Complex Interface for Clothing Inventory
const clothingItem1 = {
    id: 1,
    name: 'blouse',
    price: 29,
    quantity: 9,
    sizes: ['s', 'm', 'l', 'xl'],
};
const clothingItem2 = {
    id: 2,
    name: 'jeans',
    price: 39,
    quantity: 12,
    sizes: ['s', 'm', 'l', 'xl'],
};
const clothingItem3 = {
    id: 3,
    name: 't-shirt',
    price: 19,
    quantity: 25,
    sizes: ['s', 'm', 'l', 'xl'],
};
const clothingItems = [
    clothingItem1,
    clothingItem2,
    clothingItem3,
];
const clothingItems2 = [];
// Implement Functions for Inventory Calculations
const calculateAveragePrice = (items) => {
    const totalPrice = items.reduce((sum, item) => sum + item.price, 0);
    const averagePrice = totalPrice / items.length;
    if (items.length === 0) {
        return `The inventory is empty.`;
    }
    return averagePrice;
};
console.log(calculateAveragePrice(clothingItems));
console.log(calculateAveragePrice(clothingItems2));
const countItemsInInventory = (items) => {
    const quantity = items.reduce((sum, item) => sum + item.quantity, 0);
    return quantity;
};
console.log(countItemsInInventory(clothingItems));
console.log(countItemsInInventory(clothingItems2));
function addToInventory(item, quantity, size) {
    if (size && item.sizes.includes(size)) {
        item.quantity += quantity;
        console.log(`Added ${quantity} ${size} size to ${item.name}!`);
    }
    else {
        item.quantity += quantity;
        console.log(`Added ${quantity} ${size} size to ${item.name}!`);
    }
    ;
}
function removeFromInventory(item, quantity, size) {
    if (size && item.sizes.includes(size)) {
        item.quantity -= quantity;
        console.log(`Removed ${quantity} ${size} size from ${item.name}`);
    }
    else {
        item.quantity -= quantity;
        console.log(`Removed ${quantity} ${size} size from ${item.name}`);
    }
}
addToInventory(clothingItem1, 20);
console.log(clothingItem1);
addToInventory(clothingItem2, 10, 's');
console.log(clothingItem2);
removeFromInventory(clothingItem3, 10, 's');
removeFromInventory(clothingItem2, 5);
