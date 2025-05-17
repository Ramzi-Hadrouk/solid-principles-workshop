interface Goods {
    getPrice(): number;
}
//-------------------------------------------------------

class Clothes implements Goods {
    constructor(private price: number) {}

    getPrice(): number {
        return this.price;
    }
}
//-------------------------------------------------------

class Hat implements Goods {
    constructor(private price: number) {}

    getPrice(): number {
        return this.price;
    }
}
//-------------------------------------------------------

class Shoe implements Goods {
    constructor(private price: number) {}

    getPrice(): number {
        return this.price;
    }
}
//-------------------------------------------------------

class Inventory {
    private goods: Goods[] = [];

    store(item: Goods): void {
        this.goods.push(item);
    }

    displayInventory(): void {
        console.log('Goods:', this.goods.map(g => g.getPrice()));
    }

    calculateTotal(): void {
        const total = this.goods.reduce((sum, g) => sum + g.getPrice(), 0);
        console.log(`Total: $${total}`);
    }
}
//-------------------------------------------------------

// Demo
const inventory = new Inventory();
inventory.store(new Clothes(20));
inventory.store(new Hat(15));
inventory.store(new Shoe(50));
inventory.displayInventory();
inventory.calculateTotal();
