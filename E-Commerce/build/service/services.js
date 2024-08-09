"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const model_1 = require("../model/model");
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
const products = [
    new model_1.Product("Lipstick", 300, 10),
    new model_1.Product("Lipgloss", 150, 20),
    new model_1.Product("Mascara", 250, 15),
    new model_1.Product("Compact", 190, 12),
    new model_1.Product("Blush", 100, 18),
];
function displayProducts(products) {
    console.log("Available products:");
    products.forEach((product, index) => {
        console.log(`${index + 1}.`);
        product.display();
    });
}
function placeOrder(productIndex, quantity) {
    if (productIndex >= 0 && productIndex < products.length) {
        const product = products[productIndex];
        if (product.updateQuantity(quantity)) {
            const total = product.price * quantity;
            console.log(`Your order: ${quantity} ${product.name} - Total: $${total.toFixed(2)}`);
        }
    }
    else {
        console.log("Invalid product number. Please select a valid product.");
    }
}
displayProducts(products);
const productNumber = prompt('Enter the product number: ');
const quantity = prompt('Enter the quantity: ');
66;
if (!isNaN(Number(productNumber)) && !isNaN(Number(quantity))) {
    placeOrder(Number(productNumber) - 1, Number(quantity));
}
else {
    console.log("Invalid input. Please enter valid numbers.");
}
displayProducts(products);
