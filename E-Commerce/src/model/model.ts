export class Product {
    name: string;
    price: number;
    quantity: number;

    constructor(name: string, price: number, quantity: number) {
        this.name = name;
        this.price = price;
        this.quantity = quantity; 
    }

    display(): void {
        console.log(`${this.name} - $${this.price.toFixed(2)} (Available: ${this.quantity})`);
    }
    updateQuantity(orderedQuantity: number): boolean {
        if (this.quantity >= orderedQuantity) {
            this.quantity -= orderedQuantity;
            return true;
        } else {
            console.log(`Insufficient stock for ${this.name}. Only ${this.quantity} left in stock.`);
            return false;
        }
    }
}