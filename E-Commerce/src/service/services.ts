import { Product } from "../model/model";
import promptSync from 'prompt-sync';
const prompt = promptSync();

const products: Product[] = [
    new Product("Lipstick", 300, 10),
    new Product("Lipgloss", 150, 20),
    new Product("Mascara", 250, 15),
    new Product("Compact", 190, 12),
    new Product("Blush", 100, 18),
];

function displayProducts(products: Product[]): void {
    console.log("Available products:");
    products.forEach((product, index) => {
        console.log(`${index + 1}.`);
        product.display();
    });
}

function placeOrder(productIndex: number, quantity: number): void {
    if (productIndex >= 0 && productIndex < products.length) {
        const product = products[productIndex];
        if (product.updateQuantity(quantity)) {
            const total = product.price * quantity;
            console.log(`Your order: ${quantity} ${product.name} - Total: $${total.toFixed(2)}`);
        }
    } else {
        console.log("Invalid product number. Please select a valid product.");
    }
}
displayProducts(products);
const productNumber = prompt('Enter the product number: ');
const quantity = prompt('Enter the quantity: ');66                                      
if (!isNaN(Number(productNumber)) && !isNaN(Number(quantity))) {
    placeOrder(Number(productNumber) - 1, Number(quantity));
} else {
    console.log("Invalid input. Please enter valid numbers.");
}
displayProducts(products);


