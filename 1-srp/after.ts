//-------------------------------------------------------
// Base Abstract Class
abstract class WorkerC {
    constructor(
        protected name: string,
        protected baseSalary: number
    ) {}

    abstract calculateSalary(): number;

    getInfo(): string {
        return `${this.constructor.name}: ${this.name}, Base Salary: $${this.baseSalary}`;
    }
}
//-------------------------------------------------------

//-------------------------------------------------------
// Chef Specialization
class Chef extends WorkerC {
    calculateSalary(): number {
        return this.baseSalary + 400;
    }
}
//-------------------------------------------------------

//-------------------------------------------------------
// Painter Specialization
class Painter extends WorkerC {
    calculateSalary(): number {
        return this.baseSalary * 1.15;
    }
}
//-------------------------------------------------------

//-------------------------------------------------------
// Driver Specialization
class Driver extends WorkerC {
    calculateSalary(): number {
        return this.baseSalary + 600;
    }
}
//-------------------------------------------------------

// Usage
const chef = new Chef("Gordon Ramsay", 5000);
const painter = new Painter("Bob Ross", 4000);
const driver = new Driver("Lewis Hamilton", 4500);

console.log(chef.getInfo());
console.log("Chef Salary: $", chef.calculateSalary());

console.log(painter.getInfo());
console.log("Painter Salary: $", painter.calculateSalary());

console.log(driver.getInfo());
console.log("Driver Salary: $", driver.calculateSalary());