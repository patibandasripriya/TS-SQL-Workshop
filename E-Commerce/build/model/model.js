"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
class Product {
    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }
    display() {
        console.log(`${this.name} - $${this.price.toFixed(2)} (Available: ${this.quantity})`);
    }
    updateQuantity(orderedQuantity) {
        if (this.quantity >= orderedQuantity) {
            this.quantity -= orderedQuantity;
            return true;
        }
        else {
            console.log(`Insufficient stock for ${this.name}. Only ${this.quantity} left in stock.`);
            return false;
        }
    }
}
exports.Product = Product;
