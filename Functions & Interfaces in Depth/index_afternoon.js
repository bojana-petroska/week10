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
const addToInventory = {
    id: 4,
    name: 't-shirt',
    price: 19,
    quantity: 25,
    sizes: ['s', 'm', 'l', 'xl']
};
console.log(addToInventory);
// const printDetails = (employee: Engineer | Manager): void => {
//     if ((employee as Engineer).department) {
//         const eng = employee as Engineer;
//         eng.department;
//         console.log(`Engineer's department is: ${eng.department}`);
//         console.log(`Tech Stack: ${eng.techStack.join(', ')}`)
//     } else if ((employee as Manager).projects) {
//         const manager = employee as Manager;
//         manager.projects
//         console.log(`The manager's projects are: ${manager.projects.join(', ')}`)
//     }
// }
// printDetails(engineer1);
// printDetails(manager1);
