// Violates Single Responsibility Principle
class WorkerC {
    constructor(
        public name: string,
        public baseSalary: number
    ) {}

    calculateSalaryOfDriver(): number {
        return this.baseSalary + 500; // Fixed bonus for drivers
    }

    calculateSalaryOfPainter(): number {
        return this.baseSalary * 1.10; // 10% bonus for painters
    }

    calculateSalaryOfChef(): number {
        return this.baseSalary + 300; // Fixed bonus for chefs
    }

    getInfo(): string {
        return `Worker: ${this.name}, Base Salary: $${this.baseSalary}`;
    }
}

// Usage
const worker = new WorkerC("John Doe", 3000);
console.log(worker.getInfo());
console.log("Driver Salary: $", worker.calculateSalaryOfDriver());
console.log("Painter Salary: $", worker.calculateSalaryOfPainter());
console.log("Chef Salary: $", worker.calculateSalaryOfChef());