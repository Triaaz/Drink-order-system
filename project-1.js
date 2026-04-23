const prompt = require("prompt-sync")();

const name = prompt("Enter your name: ");
console.log("Welcome " + name);

let drinks = ["boba", "coffee", "tea", "juice"];
let prices = [4, 3, 2, 5];

console.log("Here is our menu:");
for (let i = 0; i < drinks.length; i++) {
    console.log(`${drinks[i]}: $${prices[i]}`);
}

let orders = [];
let continueOrder = "yes";

while (continueOrder === "yes") {

    let order = prompt("What would you like to order? ").toLowerCase();

    if (!drinks.includes(order)) {
        console.log("We do not have this drink");
        continue;
    }

    let quantity = Number(prompt("How many would you like to order? "));

    if (!Number.isInteger(quantity) || quantity <= 0) {
        console.log("Invalid quantity");
        continue;
    }

    let index = drinks.indexOf(order);
    let price = prices[index];

    let existing = orders.find(item => item.drink === order);

    if (existing) {
        existing.quantity += quantity;
    } else {
        orders.push({ drink: order, quantity });
    }

    console.log(`${name} ordered ${quantity} ${order}(s)`);

    continueOrder = prompt("Do you want to order another item? (yes/no): ").toLowerCase();
    if (continueOrder !== "yes" && continueOrder !== "no") {
        console.log("Invalid input, assuming no.");
        break;
    }
}

let grandTotal = orders.reduce((sum, item) => {
    let price = prices[drinks.indexOf(item.drink)];
    return sum + (price * item.quantity);
}, 0);

console.log("\nOrder Summary:");
console.log("-------------");
console.log(`Customer: ${name}`);

orders.forEach(item => {
    let price = prices[drinks.indexOf(item.drink)];
    console.log(`${item.quantity} ${item.drink}(s) = $${price * item.quantity}`);
});

console.log("-------------");
console.log(`Grand Total: $${grandTotal}`);