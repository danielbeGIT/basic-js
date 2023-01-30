class Product {
    constructor(name, sku, price, stock = 0) {
        this.name = name;
        this.sku = sku;
        this.price = price;
        this.stock = stock;
    }

    increaseStock = (added) => {
        this.stock += added
        return this
    }

    decreaseStock = (removed = 1) => {
        if (this.stock - removed < 0) {
            throw new Error("Too few items of this product in stock")
        } 
        this.stock -= removed
        return this
    }
}


class Basket {
    contents = []
    constructor(products = []) {
        this.contents = products
    }

    addProduct(product) {
        if (!Product instanceof Product) {
            throw new Error("That won't fit in the basket.")
        }
        this.content += product
        return this
    }

    removeProduct(product) {
        this.content = this.content.filter(item => item !== product);
        return this
    }
}
