class Clothes {
    constructor(public price: number) {}

    getPrice(): number {
        return this.price;
    }
}

//-------------------------------------------------------
class Hat {
    constructor(public price: number) {}

    getPrice(): number {
        return this.price;
    }
}
//-------------------------------------------------------

class Shoe {
    constructor(public price: number) {}

    getPrice(): number {
        return this.price;
    }
}
//-------------------------------------------------------

class Inventory {
    private clothes: Clothes[] = [];
    private hats: Hat[] = [];
    private shoes: Shoe[] = [];

    storeClothes(item: Clothes): void {
        this.clothes.push(item);
    }

    storeHat(item: Hat): void {
        this.hats.push(item);
    }

    storeShoe(item: Shoe): void {
        this.shoes.push(item);
    }

    displayInventory(): void {
        console.log('Clothes:', this.clothes.map(c => c.getPrice()));
        console.log('Hats:', this.hats.map(h => h.getPrice()));
        console.log('Shoes:', this.shoes.map(s => s.getPrice()));
    }

    calculateTotal(): void {
        const clothesTotal = this.clothes.reduce((sum, c) => sum + c.getPrice(), 0);
        const hatsTotal = this.hats.reduce((sum, h) => sum + h.getPrice(), 0);
        const shoesTotal = this.shoes.reduce((sum, s) => sum + s.getPrice(), 0);
        console.log(`Total Clothes: $${clothesTotal}`);
        console.log(`Total Hats: $${hatsTotal}`);
        console.log(`Total Shoes: $${shoesTotal}`);
        console.log(`Overall Total: $${clothesTotal + hatsTotal + shoesTotal}`);
    }
}
//-------------------------------------------------------

// Demo
const inventory = new Inventory();
inventory.storeClothes(new Clothes(20));
inventory.storeHat(new Hat(15));
inventory.storeShoe(new Shoe(50));
inventory.displayInventory();
inventory.calculateTotal();
