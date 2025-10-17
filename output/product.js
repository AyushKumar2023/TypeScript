class Product {
    name;
    price;
    pId;
    inCart = false;
    isOrderd = false;
    constructor(name, price, pid) {
        this.name = name;
        this.price = price;
        this.pId = pid;
    }
    addToCart() {
        this.inCart = true;
    }
    buyProduct() {
        if (this.inCart) {
            return `Product ${this.name} with price ${this.price} is ordered`;
        }
        else {
            return `no product in the cart`;
        }
    }
}
var product = new Product("Laptop", 45000, 101);
console.log(product.buyProduct());
export {};
